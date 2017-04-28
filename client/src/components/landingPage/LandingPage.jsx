import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import GetStartedSection from './LandingPageComponents/GetStarted.jsx';
import HowItWorksSection from './LandingPageComponents/HowItWorks.jsx';
import IntroMessageSection from './LandingPageComponents/IntroMessage.jsx';

var colors = [
  'red', 'pink', 'purple', 'deep-purple', 'indigo',
  'blue', 'cyan', 'teal', 'green',
  'amber', 'orange', 'deep-orange'
];
var randomColor = colors[Math.floor(Math.random() * (colors.length - 1))] + '-text';

var ChatMessages = function({name, text, color}) {
  return (
    <div>
      <p className={color}>{name}</p>
      <div className="chip">
        <div className={color}>
          {text}
        </div>
      </div>
    </div>
  );
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.state = {
      messages: [],
      socket: io(),
      activeRoom: 'Gotham'
    };

    this.state.socket.on('connect', function() {
      this.state.socket.emit('room', this.state.activeRoom);
    }.bind(this));

    this.state.socket.on('new message', function(data) {
      this.setState({
      messages: this.state.messages.concat(
        {
          name: data.name,
          text: data.text,
          color: data.color
        })
      });
    }.bind(this));
  }

  sendMessage() {
    var text = $('#chatTextField').val();
    this.setState({
      messages: this.state.messages.concat(
        {
          name: 'You',
          text: text,
          color: randomColor
        })
    });
    $('#chatTextField').val('');

    this.state.socket.emit('new message', {
      name: 'Someone',
      text: text,
      color: randomColor
    });
  }

  updateMessage(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  handleRoomChange(event) {
    this.state.socket.emit('room', event.target.value);

    this.setState({
      activeRoom: event.target.value
    });

  }

  componentDidMount() {
    $(document).ready(function() {
      $('.carousel').carousel();
      $('.parallax').parallax();
      $('select').material_select();
    });
  }

  render() {
    console.log(this.state.activeRoom);
    return (
      <div>
        <div className="no-pad-bot" id="index-banner">
          {/* INTRO */}
          <IntroMessageSection />

          {/* QUOTE */}
          <div className="parallax-container homepage-quote">
            <div className="parallax"><img src="http://aweinclusive.com/wp-content/uploads/2013/03/Beachchairs.jpg" alt="photo" /></div>
            <h4 className="header col s12">"The social way to plan group travel"</h4>
            <h5 className="header col s12">- Cara</h5>
          </div>

          {/* How */}
          <HowItWorksSection />

          {/* CHAT */}
          <div className="section container white homepage-data">
            <h5 className="header col s12 light">Chat with your friends about the results and brainstorm ideas.</h5>
            <br />

            <div className="input-field">
              <select className="browser-default" value={this.state.activeRoom} onChange={this.handleRoomChange.bind(this)}>
                <option value="Gotham">Gotham</option>
                <option value="MiddleEarth">MiddleEarth</option>
                <option value="Narnia">Narnia</option>
                <option value="Tatooine">Tatooine</option>
              </select>
            </div>

            <div className="col s12 m6">
              <div className="chat card grey lighten-4">
                <div className="card-content">
                  <div>
                    <p className="blue-text">Preston</p>
                    <div className="chatMessageContainer blue-text">
                      Hey guys looks like we all are free to travel in a few weeks...
                    </div>
                  </div>

                  <div>
                    <p className="green-text">Nate</p>
                    <div className="chatMessageContainer green-text">
                      Yeah that looks like the best time! Where do you guys want to go? Looks like we had a lot of overlap
                    </div>
                  </div>

                  <div>
                    <p className="red-text">Max</p>
                    <div className="chatMessageContainer red-text">
                      Personally, the carribean would be my top choice!
                    </div>
                  </div>

                  {this.state.messages.map((message, index) =>
                    <ChatMessages name={message.name} text={message.text} color={message.color} key={index} />
                    )}

                </div>
                <div className="card-action">
                  <input id="chatTextField" placeholder="type a message..." type="text" onKeyUp={this.updateMessage.bind(this)} />
                  <a className="btn-floating halfway-fab waves-effect waves-light orange" onClick={this.sendMessage.bind(this)} ><i className="material-icons">add</i></a>
                </div>
              </div>
            </div>
          </div>

          {/* GET STARTED */}
          <GetStartedSection />

          {/* FOOTER */}
          <footer className="page-footer orange">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Company Bio</h5>
                  <p className="grey-text text-lighten-4">Booking Buddy, Inc. is the brainchild of a group of buddies who came together at Hack Reactor to build awesome websites.  The team consists of Maxamillian Berger (Front-End and Deployment Wizard) Jesse DeOms (Scrum Master), Lou Kaileh(Product Owner), Preston Moore (Database Dynamo), Nate Nault (Routing and Authentication Genius)</p>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
              <span className="orange-text text-lighten-3">&copy; BookingBuddy</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default LandingPage;