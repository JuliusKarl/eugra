import React, { Component } from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import Topics from '../Topics/Topics';
import Logo from '../../media/Untitled-2.png'
import Download from '../../media/google-play-badge.png'
import Profile from '../Profile-Panel/Profile';
import Trending from '../Trending-Panel/Trending';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    fetch('https://www.eugra.app/api/homev2')
      .then(res => res.json())
      .then((data) => {
        this.setState({ topics: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div className="App-Container">
        <div className="App">

          {/* Switch below to a bootstrap Navbar */}
            <header className="App-header">
              <img src={ Logo } alt="logo"></img>
              <BrowserView>
                <a 
                  href="https://play.google.com/store/apps/details?id=app.eugra.eugra&hl=en" 
                  target="_blank"
                  rel="noopener noreferrer">
                    <img src={ Download } alt="download"></img>
                </a>
              </BrowserView>
              <MobileView>
                Hamburgur Button
              </MobileView>
            </header>
          {/* Switch above to a bootstrap Navbar */}
          
          <hr/>

          <main className="main">
            <hr/>
            <Profile />
            <Topics topics={ this.state.topics } />
            <Trending />
          </main>
        </div>
      </div>
    );
  }
}

export default App;