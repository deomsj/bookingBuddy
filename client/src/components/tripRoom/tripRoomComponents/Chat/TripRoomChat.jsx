import React, { Component } from 'react';

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
      <div className='chatMessageContainer'>
        <div className={color}>
          {text}
        </div>
      </div>
    </div>
  );
};



class TripRoomChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      socket: io(),
    };

    this.state.socket.on('connect', function() {
      this.state.socket.emit('room', this.props.tripId);
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

  render() {
    return (
      <div>

        <div className="col s12">
          <div className="chat card grey lighten-4">
            <div className="card-content">
              <div>
                <p className="blue-text">Booking Buddies</p>
                <div className="chatMessageContainer blue-text">
                  Welcome to your group's private trip room!
                </div>
              </div>

              <div>
                <p className="green-text">Booking Buddies</p>
                <div className="chatMessageContainer green-text">
                  We have partnered with expedia to ensure that we are always showing you the best deals on hotels that match your group's travel preferences
                </div>
              </div>

              <div>
                <p className="red-text">Booking Buddies</p>
                <div className="chatMessageContainer red-text">
                  Bookmark, comment on, and upvote your favorites to let your buddies know which ones you're most excited about!
                </div>
              </div>

              <div>
                <p className="purple-text">Booking Buddies</p>
                <div className="chatMessageContainer purple-text">
                  Use this chat as a central location to share ideas, links, and any details realted to your trip planning with your group!
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
    )
  }

}


module.exports = TripRoomChat;
