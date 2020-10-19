import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { database } from "firebase"
import { auth, googleLogin, signOut, dataBase } from "./JScomponents/firebase"
import {useCollectionData} from "react-firebase-hooks/firestore"


function App() {

  const [state, setState] = useState(()=> ({user: null, message: "", one: []}))

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

  let [lit] = useCollectionData(dataBase.collection("messages"))
  
  console.log(lit)
 
 

  console.log(lit)

  let messages = () => {

    console.log(lit)
    if (state.user && lit){
      let sortedArr = lit.sort((a,b) => b.dateCreated - a.dateCreated)
      return sortedArr.map(a => a.id === state.user.uid ? (<li className="sent"><p>{a.message}</p><img src className="img" src={a.accountImg}/></li>) : (<li className="received"><img src className="img" src={a.accountImg}/><p>{a.message}</p></li>))
    }
  }



  const inputChange = (e) => {
    const message = e.target.value;
    setState(ps => ({...ps, message: message}))
  }

  const sendMessage = () => {
    if(state.message){
      dataBase.collection("messages").add({
        id: state.user.uid,
        accountImg: state.user.photoURL,
        message: state.message,
        dateCreated: new Date()
      })
      

      setState(ps => ({...ps, message: ""}))
      console.log(state.user.photoURL)

    }

  }


  
const loggedInPage = ( <div>
  <button onClick={signOut}>SIGNOUT</button>
  <div className="container">
  <ul>
    {messages()}
  </ul>

  <input type="text" onChange={inputChange} value={state.message}></input>
  {state.message}
  <button onClick={sendMessage}>send</button>
  </div>  
</div> )


const loggedOutPage = (<div>
<h1>SIGN IN TO CHAT</h1>
  <button onClick={googleLogin}>GOOGLE LOGIN</button>
</div>)

  return (
    <div className="App">
      <h1>Hello there</h1>
      {state.user ? loggedInPage : loggedOutPage}


   
    </div>
  );
}

export default App;

/*
{document=**} //every single document inside the database
 */