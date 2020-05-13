import React from 'react';
import './App.css';
import data from './data/test-all-entries.json';
import { ProfileCard, InputSelect } from './components/';


class App extends React.Component {
  state = {
    selectedProfile: []
  }

  updateSelectedProfile = (id) => {
    const profile = data.filter(profile => profile.id === id)
    this.setState({selectedProfile: profile });
  }

  render() {
    return (
      <div className="App">
        <h1>Select a profile</h1>
        <InputSelect 
          updateSelection={this.updateSelectedProfile.bind(this)} 
          options={data} />
        <ProfileCard profile={this.state.selectedProfile} />
      </div>
      
    );
  }
}

export default App;
