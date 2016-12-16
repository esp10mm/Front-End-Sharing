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
  data: React.PropTypes.number
};

window.Counter = Counter;
