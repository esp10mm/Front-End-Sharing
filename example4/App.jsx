class Card extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
            User {this.props.data.id}
          </div>
          <div className="meta">
            Age: {this.props.data.age}
          </div>
          <div className="description">
            description
          </div>
        </div>
      </div>
    )
  }
}
Card.propTypes = {
  data: React.PropTypes.object,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
    this.newid = 0;
    this.increase = this.increase.bind(this);
  }
  increase() {
    const users = this.state.users;

    const age = Math.floor(Math.random() * 100);
    users.push({ id: this.newid, age: age });

    this.newid += 1;
    this.setState({ users: users });
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
            this.state.users.map(function(user) {
              return <Card data={user} key={user.id} />
            })
          }
        </div>
      </div>
    )
  }
}

window.App = App;
