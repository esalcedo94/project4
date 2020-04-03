import React from "react";
import Main from './components/Home.js'

class App extends React.Component {
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

    handleView= (view, shoe) => {
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
          formInputs = {
            name: shoe.name,
            brand: shoe.brand,
            qty: shoe.qty,
            id: shoe.id,

          }
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

    render() {
      return (
          <div className='container'>
              <aside>
              <h1>NAVIGATE</h1>
                <ul>
                  <li onClick={() => {
                    this.handleView('home')
                  }}>home</li>
                  <li onClick={() => {
                    this.handleView('addShoe')
                  }}>add shoe</li>
                </ul>
              </aside>
          <Main view={this.state.view} handleView={this.handleView} formInputs={this.state.formInputs}/>
        </div>
      )
    }
  }

export default App;
