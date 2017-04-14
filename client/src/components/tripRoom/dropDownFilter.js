import React from 'react';

////////////////
// Drop Down
////////////////

class DropDownFilter extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.setter(event.target.value);
  }

  render () {
    var options = this.props.options.map((option, i) => (
        <option value={option} key={i}> {option} </option>
      ));

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}

module.exports = DropDownFilter;