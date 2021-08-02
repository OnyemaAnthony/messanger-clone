import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import '../css/Message.css';

function Message({message, username}) {
    const isUser = username === message.username;
    return (

        <div className={`message ${isUser && 'message_guest'}`}>
            <Card className={`message ${isUser && 'message__userCard'}`}>
                <CardContent>
                    <Typography color={"white"} variant={"h5"} component={"h2"}/>
                    {username} : {message.text}
                </CardContent>
            </Card>
        </div>


    );
}

export default Message;