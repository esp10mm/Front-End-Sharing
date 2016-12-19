class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}
Counter.propTypes = {
  data: React.PropTypes.number,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 }
    this.increase = this.increase.bind(this);
  }
  increase() {
    const old = this.state.counter;
    this.setState({ counter: old + 1 });
  }
  render() {
    return (
      <div>
        <Counter data={this.state.counter} />
        <button onClick={this.increase}>+1</button>
      </div>
    )
  }
}

window.App = App;
