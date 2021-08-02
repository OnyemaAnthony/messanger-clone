import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Message from "./componets/message";
import {db} from "./firebase";

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');


    useEffect(()=>{
    const  username = prompt("Please Enter your name")
        setUsername(username)
    },[]);

    useEffect( ()=>{

       db.collection("message")
           .onSnapshot(snapshot=>{
          setMessages(snapshot.docs.map(document=>document.data()));
       });
    },[]);
    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, {username:username,message:input}]);
        setInput('');
    }
    console.log(`the length is ${messages.length}`);
    return (
        <div className="app">
            <form>
                <FormControl>
                    <InputLabel>Enter a message </InputLabel>
                    <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
                    <Button disabled={!input} variant={"contained"} type={"submit"} color={"primary"} onClick={sendMessage}>send
                        Message</Button>
                </FormControl>

                {
                    messages.map(message => (
                        <Message message={message} username={username}/>

                    ))
                }

            </form>
        </div>

    );
}

export default App;
