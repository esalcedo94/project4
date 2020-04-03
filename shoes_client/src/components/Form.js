import React from 'react'
import Button from 'react-bootstrap/Button'

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      brand: '',
      qty: null,
      id: null
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id] : event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.props.view.page === 'addShoe') {
      this.props.handleCreate(this.state)
    } else if (this.props.view.page === 'editShoe') {
      this.props.handleUpdate(this.state)
    }
  }
  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      brand: this.props.formInputs.brand,
      qty: this.props.formInputs.qty,
      id: this.props.formInputs.id
    })
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>name</p>
          <input className="field" type="text" placeholder="shoe name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          <p>brand</p>
          <input className="field" type="text" placeholder="shoe brand" id="brand" value={this.state.brand} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          <p>qty</p>
          <input className="field" placeholder="0" type="number" id="qty" value={this.state.body} onChange={this.handleChange}/>
        </label><br/><br/>
        <Button variant="info" size="sm"><input className="input" type="submit" value="submit"/></Button>
      </form>
    )
  }
}

export default Form
