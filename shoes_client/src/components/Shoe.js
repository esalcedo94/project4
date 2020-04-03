import React from 'react'

class Shoe extends React.Component {
  render () {
  return (
    <div>
      <h1>{this.props.shoe.name}</h1>
      <div className="shoe-body"> {this.props.shoe.body}</div>
      <div className="shoe-options">
        <ul>
          <li onClick={() =>
            {this.props.handleView('editShoe', this.props.shoe)}}>edit shoe</li>
          <li onClick={() =>
            {this.props.handleDelete(this.props.shoe.id)}}>delete shoe</li>
        </ul>
        </div>
    </div>
  )}
}

export default Shoe
