class Card extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.name}
      </div>
    )
  }
}
Card.propTypes = {
  data: React.PropTypes.object,
};

window.Card = Card;
