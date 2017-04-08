var TripRoomNav = function() {
  return (
    <header>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <button type="button" class="btn btn-default navbar-btn">
            Start Planning A Trip!
          </button>
          <button type="button" class="btn btn-default navbar-btn">
            Sign In
          </button>
          <button type="button" class="btn btn-default navbar-btn">
            Start a free Account
          </button>
          <p class="navbar-text navbar-right">Signed in as
            <a href="#" class="navbar-link"> Jesse DeOms</a>
          </p>
        </div>
      </nav>
      <h1>Hiking Trip with the Guys</h1>
    </header>
  )
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TripRoomNav />
      </div>
    )
  }
}

var mountNode = $('body');

ReactDOM.render(<App />, mountNode);