import React from 'react';
import {foos} from './foos.pb';
import {foosClient} from './foos-client';
import {LeagueSidebar} from './league-sidebar'
import {LeaguePage} from './league-page'
import './App.css';


interface State {
  selectedLeague?: foos.ILeague;
}
interface Props {}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  selectLeague = (league: foos.ILeague) => {
    this.setState({selectedLeague: league})
  }

  refreshLeague = (league_id: string) => {
    foosClient.getLeagues({}).then((resp) => {
      for (let league of resp.leagues) {
        if (league.id == league_id) {
          this.selectLeague(league)
          return
        }
      }
    })
  }

  render() {
    let leaguePage;
    if (this.state.selectedLeague != null) {
      leaguePage = <LeaguePage league={this.state.selectedLeague} refreshLeague={this.refreshLeague} />
    }

    return (
      <div className="App">
        <LeagueSidebar selectLeague={this.selectLeague}/>
        {leaguePage}
      </div>
    );
  }
}

export default App;
