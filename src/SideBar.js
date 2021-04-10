import {Button, IconButton} from "@material-ui/core";
import React from 'react';
import "./SideBar.css";
import AddIcon from "@material-ui/icons/Add";
import SideBarOption from "./SideBarOption"
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import NearMeIcon from "@material-ui/icons/NearMe"
import NoteIcon from "@material-ui/icons/Note"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import PhoneIcon from "@material-ui/icons/Phone"
import {useDispatch} from "react-redux"
import {openSendMessage} from "./features/mailSlice"

function SideBar() {
    const dispatch = useDispatch();
    return (
       
            <div className="sidebar">
                <Button className="sidebar_compose" 
                startIcon={<AddIcon fontSize="large"/>}
                onClick={() => dispatch(openSendMessage())}
                >Compose
                </Button>
                
                <SideBarOption Icon={InboxIcon} title="Inbox" 
                number="54" selected = {true}/>
                <SideBarOption Icon={StarIcon} title="Starred" number={16} />
                <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={18} />
                <SideBarOption Icon={LabelImportantIcon} title="Important" number={23} />
                <SideBarOption Icon={NearMeIcon} title="Sent" number={7} />
                <SideBarOption Icon={NoteIcon} title="Drafts" number={1} />
                <SideBarOption Icon={ExpandMoreIcon} title="More" number={5} />

                <div class="sidebar_footer">
                    <div class="sidebar_footer_icons">
                        <IconButton>
                            <PersonIcon/>
                        </IconButton>
                        <IconButton>
                            <DuoIcon/>
                        </IconButton>
                        <IconButton>
                            <PhoneIcon/>
                        </IconButton>
                    </div>
                </div>

            </div>
    
    );
}

export default SideBar
