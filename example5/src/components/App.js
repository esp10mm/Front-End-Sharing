import React from 'react';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.newid = 0;
    this.increase = this.increase.bind(this);
  }
  increase() {
    const users = this.state.users;

    const age = Math.floor(Math.random() * 100);
    users.push({ id: this.newid, age });

    this.newid += 1;

    this.setState({ users });
  }
  render() {
    const style = { margin: '5px' };
    return (
      <div style={style}>
        <button className="ui button" onClick={this.increase}>
          +1
        </button>
        <div className="ui cards" style={{ paddingTop: '5px' }}>
          {
            this.state.users.map(user => (
              <Card data={user} key={user.id} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
