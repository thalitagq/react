import React from 'react';
import logo from './logo.svg';
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Routes from "./components/Router"
import './App.css';

const user = {
  email: "teste@user.com",
  password: "123123",
  nickname: "user1",
  name: "User 1",
  following: [
    { name: "John Doe", avatar: "avatar.png" },
    { name: "Jane Doe", avatar: "" },
    { name: "Walter", avatar: "" },
  ],
};
class App extends React.Component {

  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
