import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    state = {
      view: {
        page: "home",
        pageTitle: "shoe index"
      },
      formInputs: {
        name: null,
        brand: null,
        qty: null,
        id: null
      }
    };

    handleView= (view, post) => {
      let pageTitle =""
      let formInputs ={
        name: '',
        brand: '', 
        qty: null, 
        id: null
      }
      switch (view){
        case 'home':
          pageTitle = 'Home'
          break;
        case 'shoe':
          pageTitle = 'Shoe'
          break;
        case 'addShoe': 
          pageTitle = "add a shoe"
          break;
        case 'editShoe':
          pageTitle = 'edit a shoe'
          break;
        default:
          break;
      }
      this.setState({
        view:{ 
          page: view,
          pageTitle: pageTitle
        },
        formInputs: formInputs
      })
    }

    return <></>;
  }
}

export default App;
