import React from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: []
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=5&inc=name,gender,nat, picture&noinfo")
      .then(response => response.json())
      .then(data => 
        this.setState({
        users: data.results
      }))
  }
  
  render() {
    return (
    <ContactList contacts={this.state.users} />
    )}
}

export default App;

