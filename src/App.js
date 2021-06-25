
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import UserList from './UserList';

function App() {

    useEffect(() => {
      fetchData();
    }, []);
  
  const [userList, setUserList] = useState([]); 
  const [errors, setErrors] = useState(null); 
  const [loading, setLoading] = useState(false); 
  
  const fetchData = async () => {
  
  setLoading(true);
  setTimeout(() => {
      axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((res) => {
          setUserList(res.data);
          setLoading(false);
      }) 
      .catch((err) => setErrors(err)); 
  }, 1000);
  };


  return (
    <div className="App">
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
