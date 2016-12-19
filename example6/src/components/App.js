import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './../actions';

import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  render() {
    const style = { margin: '5px' };
    return (
      <div style={style}>
        <button className="ui button" onClick={this.props.actions.AddUser}>
          +1
        </button>
        <div className="ui cards" style={{ paddingTop: '5px' }}>
          {
            this.props.db.user.map(user => (
              <Card
                data={user}
                key={user.username}
                remove={this.props.actions.RemoveUser}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
App.propTypes = {
  actions: React.PropTypes.object,
  db: React.PropTypes.object,
};

const mapStateToProps = state => ({
  db: state
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});


// export default App;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
