import React from 'react';
import "./EmailList.css";
import {IconButton, Checkbox} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide"
import SettingsIcon from "@material-ui/icons/Settings"
import Section from "./Section"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import EmailRow from "./EmailRow"

function EmailList() {
    return (
        <div className="emailList">
            <div class="emailList_settings">
                <div class="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div class="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div class="emailList_sections">
                <Section Icon={InboxIcon} title = "primary" color="red" selected/>
                <Section Icon={PeopleIcon} title = "social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title = "promotions" color="green"/>
            </div>
            <div class="emailList_list">
                <EmailRow title = "Twitch" subject="Hey fellow streamer!!!"
                description = "This is a test" time = "10pm"
                />
                <EmailRow title = "Twitch" subject="Hey fellow streamer!!!"
                description = "This is a test" time = "10pm"
                />
            </div>
        </div>
    );
}

export default EmailList
