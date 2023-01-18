import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NewPost from './components/NewPost';
import Thread from './components/Thread';
import { useDispatch } from 'react-redux';
import { getUser } from './feature/user.slice';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
  
  },[])

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input type="text" placeholder="Pseudo" onChange={e=>dispatch(getUser(e.target.value))}/>
      </div>
      <NewPost/>
      <Thread />
    </div>
    
  );
}

export default App;
