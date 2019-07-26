import React from 'react';
import {foos} from './foos.pb';
import {foosClient} from './foos-client';

interface State {
    players: foos.IPlayer[];
    winner?: string;
    winner2?: string;
    loser?: string;
    loser2?: string;
}
interface Props {
    league: foos.ILeague;
    refreshLeague: (league_id: string) => void;
}

export class LeaguePage extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
        }
    }

    componentDidMount() {
        this.refreshPlayers()
    }

    refreshPlayers = () => {
        console.log("refreshing players")
        foosClient.getPlayers({}).then((resp) => {
            console.log("got players resp", resp)
            let leaguePlayers = []
            for (let player of resp.players) {
                if (this.props.league.playerIds.includes(player.id)) {
                    leaguePlayers.push(player)
                }
            }
            this.setState({
                players: leaguePlayers,
            })
        })
    }

    componentWillReceiveProps(oldProps: Props, newProps: Props) {
        if (newProps.league == null || oldProps.league.playerIds.length != newProps.league.playerIds.length) {
            this.refreshPlayers()
        }
    }

    createPlayer = () => {
        let name = prompt("player name")
        foosClient.createPlayer({
            name: name,
            leagueId: this.props.league.id,
        }).then((resp) => {
            console.log("player created", resp)
            this.props.refreshLeague(this.props.league.id)
     }).catch((err) => {
         console.log("error creating player")
         console.log(err)
     })
    }

    handleWinnerChange = (event) => {
        console.log(event.target)
        this.setState({
            winner: event.target.value,
        })
    }

    handleWinner2Change = (event) => {
        console.log(event.target)
        this.setState({
            winner2: event.target.value,
        })
    }
    
    handleLoserChange = (event) => {
        this.setState({
            loser: event.target.value,
        })
    }
    handleLoser2Change = (event) => {
        console.log(event.target)
        this.setState({
            loser2: event.target.value,
        })
    }

    inputGame = () => {
        console.log(this.state.winner, this.state.loser)
        let winners: string[] = []
        let losers: string[] = []
        if (![undefined, ""].includes(this.state.winner)) {
            winners.push(this.state.winner)
        }
        if (![undefined, ""].includes(this.state.winner2)) {
            winners.push(this.state.winner2)
        }
        if (![undefined, ""].includes(this.state.loser)){
            losers.push(this.state.loser)
        }
        if (![undefined, ""].includes(this.state.loser2)){
            losers.push(this.state.loser2)
        }
        console.log({
            winners: winners,
            losers: losers,
            winningScore: 1,
            losingScore: 0,
        })
        foosClient.inputGame({
            winners: winners,
            losers: losers,
            winningScore: 1,
            losingScore: 0,
        }).then((resp) => {
            console.log(resp)
            this.refreshPlayers()
        }).catch((err) => {
            console.log("error inputting game")
            console.log(err)
        })
    }

    render() {
        let players = []
        for (let player of this.state.players) {
            players.push(
                <p key={player.id}>{player.name} - {Math.round(player.rating)}</p>
            )
        }
        return <div>
            {this.props.league.name}
            {players}
            <a href="#" onClick={this.createPlayer}>add player</a><br />

            <select value={this.state.winner} onChange={this.handleWinnerChange}>
                <option value="">select winner</option>
                {this.state.players.map((player, i) => {
                    return <option key={player.id} value={player.id}>{player.name}</option>
                })}
            </select>
            <select value={this.state.winner2} onChange={this.handleWinner2Change}>
                <option value="">select winner</option>
                {this.state.players.map((player, i) => {
                    return <option key={player.id} value={player.id}>{player.name}</option>
                })}
            </select><br />
            <select value={this.state.loser} onChange={this.handleLoserChange}>
                <option value="">select loser</option>
                {this.state.players.map((player, i) => {
                    return <option key={player.id} value={player.id}>{player.name}</option>
                })}
            </select>
            <select value={this.state.loser2} onChange={this.handleLoser2Change}>
                <option value="">select loser</option>
                {this.state.players.map((player, i) => {
                    return <option key={player.id} value={player.id}>{player.name}</option>
                })}
            </select><br />
            <a href="#" onClick={this.inputGame}>input game</a>
        </div>;
    }
}