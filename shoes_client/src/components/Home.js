import React from "react";
import Form from "./Form.js";
import Shoe from "./Shoe.js";

class Home extends React.Component {
  state = {
    shoes: []
  };
  componentDidMount() {
    this.fetchShoes();
  }

  handleCreate = async createdData => {
    let response = await fetch("http://localhost:3000/shoes", {
      body: JSON.stringify(createdData),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    this.props.handleView("home");
    this.setState(prevState => {
      return { shoes: [...prevState.shoes, data] };
    });
  };
  fetchShoes = async () => {
    let response = await fetch("http://localhost:3000/shoes");
    let data = await response.json();
    console.log(data);
    this.setState({ shoes: data });
  };

  handleUpdate = async updateData => {
    let response = await fetch(`http://localhost:3000/shoes/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();
    this.props.handleView("home");
    this.fetchShoes();
  };

  handleDelete = async id => {
    let response = await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    this.setState(prevState => {
      const shoes = prevState.shoes.filter(shoe => shoe.id !== id);
      return { shoes };
    });
  };
  componentDidMount() {
    this.fetchShoes();
  }

  render() {
    return (
      <main>
        <h1>{this.props.view.pageTitle}</h1>
        {this.props.view.page === "home" ? (
          this.state.shoes.map(shoe => (
            <Shoe
              key={shoe.id}
              shoe={shoe}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}
            />
          ))
        ) : (
          <Form
            handleCreate={this.handleCreate}
            handleUpdate={this.handleUpdate}
            formInputs={this.props.formInputs}
            view={this.props.view}
            handleUpdate={this.handleUpdate}
          />
        )}
      </main>
    );
  }
}

export default Home;
