import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, IconButton, Input, InputLabel} from "@material-ui/core";
import Message from "./componets/message";
import {db} from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import './css/Message.css'
import {Send} from "@material-ui/icons";


function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');


    useEffect(()=>{
    const  username = prompt("Please Enter your name")
        setUsername(username)
    },[]);

    useEffect( ()=>{

       db.collection("messages").orderBy('timestamp','desc')
           .onSnapshot(snapshot=>{
          setMessages(snapshot.docs.map(document=>({id:document.id,message:document.data()})));
       });
    },[]);
    const sendMessage = (event) => {
        event.preventDefault();
         db.collection('messages').add({
             message:input,
             username:username,
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
         })
        setInput('');
    }
    return (
        <div className="app">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGIszYgqEd46jA0B-sfIwZkFCs8TE1hovYWgf_rjYasCxhoK00kPA_18kdhcG2-UGCoY&usqp=CAU" alt=""/>
            <h1> Hello guys You are welcome To codersHub</h1>
            <h2> welcome {username}</h2>
            <form className={'app_form'}>


                    <FormControl className='app_formControl'>

                        <Input className='app_input' placeholder='Enter a message...' type="text" value={input} onChange={event => setInput(event.target.value)} />
                        <IconButton className='app_iconButton' disabled={!input} variant={"contained"} type={"submit"} color={"primary"} onClick={sendMessage}>
                            <Send/>

                        </IconButton>

                    </FormControl>
            </form>
                  <FlipMove>
                      {
                          messages.map(({message,id}) => (
                              <Message key={id} message={message} username={username}/>

                          ))
                      }
                  </FlipMove>



        </div>

    );
}

export default App;
