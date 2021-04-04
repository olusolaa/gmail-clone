import React from 'react'
import "./Mail.css"
import {IconButton} from "@material-ui/core"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import {useHistory} from "react-router-dom"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import PrintIcon from "@material-ui/icons/Print"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
function Mail() {
    const history = useHistory()
    return (
        <div className= "mail">
            <div className="mail_tools">
                <div class="mail_toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div class="mail_toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>

                </div>
            </div>
            <div class="mail_body">
                <div class="mail_bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail_important" />
                    <p>Title</p>
                    <p className="mail_time">10pm</p>
                </div>
                <div class="mail_message">
                    <p>This is a message</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
