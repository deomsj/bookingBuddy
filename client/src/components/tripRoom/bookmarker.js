import React from 'react';
/////////////////////////
// Add New Bookmark Bar
/////////////////////////

class Bookmarker extends React.Component {
  constructor (props) {
    super(props);
    this.bookmarkThisOne = this.bookmarkThisOne.bind(this);
    this.changeBookmarkComment = this.changeBookmarkComment.bind(this);
    this.state = {
      bookmarkComment: ''
    };
  }

  changeBookmarkComment(e) {
    this.setState({
      bookmarkComment: e.target.value
    });
  }

  bookmarkThisOne(e) {
    e.preventDefault();
    var comment = this.state.bookmarkComment;
    this.props.bookmarkThisRec(comment);
    this.setState({
      bookmarkComment: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.bookmarkThisOne} >
          <textarea className="materialize-textarea" onChange={this.changeBookmarkComment} placeholder="Want to stay here? Write a quick note to your buddies about why you like this one, then bookmark it to highlight this option for your friends to see!" defaultValue={this.state.bookmarkComment} /> <br/>
          <button className="btn-large waves-effect waves-light orange" type="submit">Add Bookmark!</button>
        </form>
      </div>
    );
  }

}

module.exports = Bookmarker;