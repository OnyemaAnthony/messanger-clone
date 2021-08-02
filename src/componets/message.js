import React from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import '../css/Message.css';

function Message({text,username}) {
    return (

            <Card>
                <CardContent classes={'message__card'}>
                    <Typography color={"white"}variant={"h5"} component={"h2"}/>
                    {username}  : {text}
                </CardContent>
            </Card>


    );
}

export default Message;