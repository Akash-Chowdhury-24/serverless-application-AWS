import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  const getUser = async() => {
    try {
      const response = await fetch('https://zy7onkovh2.execute-api.us-east-1.amazonaws.com/api/users/users');
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <div>
    <button onClick={getUser}>Get the user</button>
    <div>
      <h1>{user?.name}</h1>
      <h3>{user?.email}</h3>
    </div>
   </div>
  )
}

export default App
