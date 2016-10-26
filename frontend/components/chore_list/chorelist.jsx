import React from 'react';
import ChorelistItem from './chorelist_item';
import ChoreForm from './chore_form';

class Chorelist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChores;
  }

  render() {
    return (
      <ul className="chore-list">
        {this.props.chores.map((chore, idx) => (
          <ChorelistItem
            key={idx}
            title={chore.title}
            body={chore.body}
            done={chore.done} />
        ))}
        <ChoreForm createChore={this.props.createChore}/>
      </ul>
    );
  }
}

export default Chorelist;
