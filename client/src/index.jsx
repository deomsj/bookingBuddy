var TripRoomNav = function() {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <button type="button" className="btn btn-default navbar-btn">
            Start Planning A Trip!
          </button>
          <button type="button" className="btn btn-default navbar-btn">
            Sign In
          </button>
          <button type="button" className="btn btn-default navbar-btn">
            Start a free Account
          </button>
          <p className="navbar-text navbar-right">Signed in as
            <a href="#" className="navbar-link"> Jesse DeOms</a>
          </p>
        </div>
      </nav>
      <h1>Hiking Trip with the Guys</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <TripRoomNav />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));