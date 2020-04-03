import React from 'react'

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
          name
          <input type="text" placeholder="shoe name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          brand
          <input type="text" placeholder="shoe brand" id="brand" value={this.state.brand} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          qty
          <input placeholder="0" type="number" id="qty" value={this.state.body} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }
}

export default Form
