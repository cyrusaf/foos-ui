import React from 'react';
import {foosClient} from './foos-client';
import {foos} from './foos.pb';
import { format } from 'url';

interface State {
    leagues: foos.ILeague[];
}
interface Props {
    selectLeague: (league: foos.ILeague) => void;
}

export class LeagueSidebar extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            leagues: [],
        }
    }

    componentDidMount() {
        this.refreshLeagues()
    }

    refreshLeagues = () => {
        foosClient.getLeagues({}).then((resp) => {
            this.setState({
                leagues: resp.leagues,
            })
         })
    }

    createLeague = () => {
        let name = prompt("league name")
        console.log(name)
        foosClient.createLeague({name: name}).then((resp) => {
            this.refreshLeagues()

        }).catch((err) => {
            console.log("error creating leagues")
            console.log(err)
        })
    }

    render() {
        let leagueList = []
        for (let league of this.state.leagues) {
            leagueList.push(
                <p key={league.id} onClick={() => {this.props.selectLeague(league)}}>
                    {league.name}
                </p>
            )
        }
        return <div className="league-sidebar">
            {leagueList}
            <a href="#" onClick={this.createLeague}>new league</a>
        </div>;
    }
}