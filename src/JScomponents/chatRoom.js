import React, { useState, useEffect } from 'react'
import { dataBase } from './firebase'
import {useCollectionData} from "react-firebase-hooks/firestore"

import "../CSScomponents/chatRoom.scss"


function ChatRoom(props) {


    const [state, setState] = useState(()=> ({user: null, message: "", messages: []}))

    useEffect(()=> {
        setState(ps => ({...ps, user: props.user}))
    }, [])

    let [lit] = useCollectionData(dataBase.collection("messages"))
    
    useEffect(() => {
        dataBase.collection("messages").get().then(res => {
            let messageArr = res.docs.map(a => a.data())
            setState(ps => ({...ps, messages: messageArr}))
        })

    }, [lit])


    let messages = () => {

        console.log(state.messages)
        if (state.user && state.messages){
          let sortedArr = state.messages.sort((a,b) => a.dateCreated - b.dateCreated)
          return sortedArr.map(a => a.id === state.user.uid ? (
          
          <li className="sent">
          <p className="message">{a.message}</p>
          <img src className="img" src={a.accountImg}/>
          </li>) : (
          
          <li className="received">
          <img src className="img" src={a.accountImg}/>
          <p className="message">{a.message}</p>
          </li>))
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
  
    return (
        <div>
            <button onClick={props.signOut}>SIGNOUT</button>
            <div className="container">
            <ul className="messageContainer">
                {messages()}
            </ul>

            <div className="inputs">

                <input type="text" className="textInput" onChange={inputChange} value={state.message}></input>
                <button className="sendBtn" onClick={sendMessage}>send</button>

            </div>
        </div> 
        </div>
    )
}

export default ChatRoom
