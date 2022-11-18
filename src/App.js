import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {authService} from "/.services/AuthService";

function App() {
  const[user, setNewUser] = useState({email: "", password: ""});

  const handleOnLogin = async (e) => {
    e.preventDefault()
    await authService.login(user);
  };
  const handleRefresh = async (e) => {
    
  }

  return (
    <form onSubmit={onCreateNewCustomer}>
    <input
      required
      type="email"
      name="name"
      value={user.email}
      onChange={({ target }) =>
      setNewUser({ ...user, email: target.value })
      }
    />
    <input
      required
      type="email"
      name="name"
      value={user.password}
      onChange={({ target }) =>
      setNewUser({ ...user, password: target.value })
      }
    />
    <button type="submit">Add</button>
  </form>
  );
}

export default App;
