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
  <div className="ui card">
    <div className="content">
      <div className="header">
        User {props.data.id}
      </div>
      <div className="meta">
        Age: {props.data.age}
      </div>
      <div className="description">
        description
      </div>
    </div>
  </div>
);

Card.propTypes = {
  data: React.PropTypes.object,
};

export default Card;
