import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewPost from './components/NewPost';
import Thread from './components/Thread';

function App() {

  const [userId,setUserId] =useState("");

  return (
    <div className="app-container">
      <div className="login">
        <h3>Bonjour</h3>
        <input type="text" placeholder="Pseudo" onChange={e=>setUserId(e.target.value)}/>
      </div>
      <NewPost userId={userId}/>
      <Thread userId={userId} />
    </div>
    
  );
}

export default App;
