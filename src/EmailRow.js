import React from 'react'
import {IconButton, Checkbox} from "@material-ui/core";
import "./EmailRow.css"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {selectMail} from "./features/mailSlice";


function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail= ()=>{
        dispatch(
            selectMail({
                id, 
                title, 
                subject, 
                description, 
                time
            })
        );
        history.push("/mail")                                                                          }                                                                       
    return (
        <div onClick={openMail} className="emailRow">
            <div class="emailRow_option">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>

            </div>

            <h3 class="emailRow_title">
                {title}
            </h3>
            <div class="emailRow_message">
                <h4>{subject}{" "}
                <span class="emailRow_description">- 
                    {description} </span>
                </h4>
            </div>

            <div class="emailRow_time">
                {time}
            </div>
        </div>
    )
}



export default EmailRow;
