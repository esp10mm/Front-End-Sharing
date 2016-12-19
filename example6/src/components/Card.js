import React from 'react';

// class Card extends React.Component {
//   render() {
//     return (
//       <div className="ui card">
//         <div className="content">
//           <div className="header">
//             User {this.props.data.id}
//           </div>
//           <div className="meta">
//             Age: {this.props.data.age}
//           </div>
//           <div className="description">
//             description
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const Card = props => (
  <div className="ui card" style={{ width: '200px' }}>
    <div className="image">
      <div
        className="ui red right corner label"
        onClick={() => { props.remove(props.data.username); }}
        style={{ cursor: 'pointer' }}
      >
        <i className="remove icon" />
      </div>
      <img src={props.data.pic} role="presentation" />
    </div>
    <div className="content">
      <div className="header">
        {props.data.username}
      </div>
      <div className="meta">
        {props.data.registered}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  data: React.PropTypes.object,
  remove: React.PropTypes.func,
};

export default Card;
