import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import firebase, { database } from "firebase"
import { auth, googleLogin, signOut, dataBase } from "./JScomponents/firebase"
import ChatRoom from './JScomponents/chatRoom';


function App() {

  const [state, setState] = useState(()=> ({user: null, message: "", messages: []}))

  // auth.onAuthStateChanged(user => {
  //   setState(ps => ({...ps, user: user}))
  // })

  useEffect(() => {
    auth.onAuthStateChanged(user => {

      setState(ps => ({...ps, user: user}))

      /*const collection = {
        "messages":
      }
      
      get() gets the "messages" collection which returns a promise cuz its async
      res.docs returns the docs that are within that collection as an array e.g [doc1, doc2]
      res.docs.data() returns the data within the docs e.g res.docs.forEach(a => console.log(a.data()))*/


    

    })

  }, [])

  








  
// const loggedInPage = ( <div>
//   <button onClick={signOut}>SIGNOUT</button>
//   <div className="container">
//   <ul>
//     {messages()}
//   </ul>

//   <input type="text" onChange={inputChange} value={state.message}></input>
//   {state.message}
//   <button onClick={sendMessage}>send</button>
//   </div>  
// </div> )


const loggedOutPage = (<div className="loggedOutPage">
<h1>SIGN IN TO CHAT</h1>
  <button className="loginBtn" onClick={googleLogin}>GOOGLE LOGIN</button>
</div>)

  return (
    <div className="App">
      <h1>Welcome to Google Chat</h1>
      {state.user ? <ChatRoom user={state.user} signOut={signOut} /> : loggedOutPage}


   
    </div>
  );
}

export default App;

/*
{document=**} //every single document inside the database
 */