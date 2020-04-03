import React from 'react'
import Button from 'react-bootstrap/Button'

class Shoe extends React.Component {
  render () {
  return (
    <div>
      <h3>{this.props.shoe.name}</h3>
      <div className="shoe-body"> {this.props.shoe.body}</div>
      <div className="shoe-options">
        <ul>
          <Button variant="info" size="sm"><li onClick={() =>
            {this.props.handleView('editShoe', this.props.shoe)}}>edit shoe</li></Button>
          <Button variant="info" size="sm"><li onClick={() =>
            {this.props.handleDelete(this.props.shoe.id)}}>delete shoe</li></Button>
        </ul>
        </div>
    </div>
  )}
}

export default Shoe
