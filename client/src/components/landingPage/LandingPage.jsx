import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// var socket = io();
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
    this.state = {
      messages: []
    };

    // socket.on('new message', function(data) {
    //   this.setState({
    //   messages: this.state.messages.concat(
    //     {
    //       name: data.name,
    //       text: data.text,
    //       color: data.color
    //     })
    //   });
    // }.bind(this));
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

    // socket.emit('new message', {
    //   name: 'Someone',
    //   text: text,
    //   color: randomColor
    // });
  }

  updateMessage(event) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  componentDidMount() {
    $(document).ready(function() {
      $('.carousel').carousel();
      $('.parallax').parallax();
    });
  }

  render() {
    return (
      <div>
        <div className="no-pad-bot" id="index-banner">
          {/* INTRO */}
          <div className="parallax-container homepage-intro">
            <h1 className="header center orange-text">Planning a trip with friends? Let us Help!</h1>
            <div className="row center">
              <h5 className="header col s12 light">With a quick questionnaire, we make it easy to find trips that you and all of your friends can and want to go on!</h5>
            </div>
            <div className="parallax"><img src="https://images.trvl-media.com/media/content/expus/graphics/launch/activity1320x742.jpg" alt="photo" /></div>
          </div>


          <div className="container">
            <div className="section">

              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center green-text darken-2"><i className="material-icons">location_on</i></h2>
                    <h5 className="center">Location</h5>

                    <p className="light">Choose one, or several locations where you'd like to travel. If you're friends have already chosen some locations, you can also choose from theirs. You can add to this list at any time. After that, everyone can vote on their favorites.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center green-text darken-2"><i className="material-icons">today</i></h2>
                    <h5 className="center">Date</h5>

                    <p className="light">Which dates are you available? When you and your buddies pick dates, the whole group can see them in order to figure out what works best for everyone. Are your dates not working out? Just go back and modify them at any time.</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center bling-header green-text darken-2">$</h2>
                    <h5 className="center">Budget</h5>

                    <p className="light">Almost everyone has a budget. We promise not to make it awkward for you. Let us know how much you can spend and we'll find trip options that work for everyone, without breaking the bank.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* DATA + CHAT */}
          <div className="section container white homepage-data">
            <div className="row">
              <br />
              <h5 className="header col s12 light">We'll organize all this information and share it with you and your buddies.</h5>
              <br /><br /><br />
              <table className="highlight responsive-table">
                <thead>
                  <tr>
                    <th>Group</th>
                    <th>Available Dates</th>
                    <th>Budget</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Max</td>
                    <td>May 3rd - May 28th</td>
                    <td>$1,000</td>
                  </tr>
                  <tr>
                    <td>Lou</td>
                    <td>May 1st - May 12th</td>
                    <td>$2,000</td>
                  </tr>
                  <tr>
                    <td>Preston</td>
                    <td>May 5th - May 11th</td>
                    <td>$1,200</td>
                  </tr>
                  <tr>
                    <td>Nate</td>
                    <td>May 1st - May 20th</td>
                    <td>$1,700</td>
                  </tr>
                  <tr>
                    <td>Jesse</td>
                    <td>May 4th - May 17th</td>
                    <td>$1,300</td>
                  </tr>
                </tbody>
              </table>

              <br /><br />
            </div>
            <h5 className="header col s12 light">Chat with your friends about the results and brainstorm ideas.</h5>
            <br />









            <div className="col s12 m6">
              <div className="chat card grey lighten-4">
                <div className="card-content">
                  <div>
                    <p className="blue-text">Preston</p>
                    <div className="chip blue-text">
                      Hey guys looks like we all are free to travel in a few weeks...
                    </div>
                  </div>

                  <div>
                    <p className="green-text">Nate</p>
                    <div className="chip green-text">
                      Yeah that looks like the best time! Where do you guys want to go? Looks like we had a lot of overlap
                    </div>
                  </div>

                  <div>
                    <p className="red-text">Max</p>
                    <div className="chip red-text">
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
          {/* QUOTE */}
          <div className="parallax-container homepage-quote">
            <div className="parallax"><img src="http://aweinclusive.com/wp-content/uploads/2013/03/Beachchairs.jpg" alt="photo" /></div>
            <h4 className="header col s12">"The social way to plan group travel"</h4>
            <h5 className="header col s12">- Cara</h5>
          </div>
          {/* SLIDER */}
          <div className="container homepage-slider">
            <h5 className="header col s12 light">Scroll through and pin favorites from the vacations we find for you</h5>
            <div className="carousel">
              <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1" alt="pic" /></a>
              <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2" alt="pic" /></a>
              <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3" alt="pic" /></a>
              <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4" alt="pic" /></a>
              <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5" alt="pic" /></a>
            </div>

            <h5 className="header col s12 light">Pin favorites from our list and add your own</h5>
            <br /><br />
            <div>
              <img src="http://lorempixel.com/250/250/nature/1" alt="pic" />
              <img src="http://lorempixel.com/250/250/nature/2" alt="pic" />
              <img src="http://lorempixel.com/250/250/nature/3" alt="pic" />
            </div>
          </div>
          {/* GET STARTED */}
          <div className="parallax-container homepage-cta">
            <div className="parallax"><img src="http://www.parisaddress.com/var/source/district/new/tour_eiffel-paris.jpg" alt="photo" /></div>
              <h4 className="header col s12 light white-text">What are you waiting for?</h4>
              <div className="row center">
                <Link id="download-button" className="btn-large waves-effect waves-light orange" to="/start-planning">Start Planning!</Link>
              </div>
          </div>
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
              Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default LandingPage;