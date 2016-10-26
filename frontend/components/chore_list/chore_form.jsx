import React from 'react';

class ChoreForm extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.linkState = this.linkState.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createChore(this.state);
    this.setState({title: "", body: ""});
  }

  linkState(key) {
    return (e => this.setState({[key]: e.currentTarget.value}));
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.linkState('title')} value={this.state.title} placeholder="Trash" />
        <input type="text" onChange={this.linkState('body')} value={this.state.body} placeholder="Remember to take it out." />
        <input type="submit" onClick={this.handleClick} value="Create Chore!" />
      </div>
    );
  }
}

export default ChoreForm;
