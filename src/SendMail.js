import React from 'react'
import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import {Button} from "@material-ui/core"
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux"
import {closeSendMessage} from "./features/mailSlice.js"

function SendMail() {
    const { register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon
                onClick={()=> dispatch(closeSendMessage())} 
                className="sendMail_close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input 
                name="to" 
                placeholder= "To" 
                type="email"

                // ref = {register({required: true})}
                {...register('to',{required:true})}
                />
                

                <input 
                name= 'subject' 
                placeholder="Subject" 
                type="text" 
                // ref = {register({required: true})}
                {...register('subject',{required:true})}
                />
                

                <input 
                name= 'message' 
                className="sendMail_message" 
                placeholder="Message..." 
                type="text" 
                // ref = {register({required: true})}
                {...register('message',{required:true})}
                />

                <div class="sendMail_options">
                    <Button 
                    className="sendMail_send"
                    variant="contained"
                    color="primary"
                    type="submit"
                    >Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail
