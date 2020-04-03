import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Home extends Component {
    state = {
        shoes: []
    }
    componentDidMount() {
        this.fetchShoes()
    }

    handleCreate = async createData =>{
        let response = await fetch ('/shoes',{
            body: JSON.stringify(createdData),
            method: 'POST',
            headers:{
                Accept: 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            }
        })
        let data = await respine.json();
        this.props.handleView('home');
        this.setState(prevState =>{
            return {shoes: [...prevState.shoes,data]}
        })
    }
    fetchShoes = async()=>{
        let response = await fetch('/shoes')
        let data = await response.json()
        console.log(data);
        this.setState({shoes: data})
        
    }

    handleUpdate = async updateData => {
        let response = await fetch(`/shoes/${updateData.id}`, {
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
    let response = await fetch(`/shoes/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    this.setState(prevState => {
      const shoes = prevState.shoes.filter(shoes => shoe.id !== id);
      return { shoes };
    });
  };
    

  render() {


    return <></>;
  }
}

export default Home;
