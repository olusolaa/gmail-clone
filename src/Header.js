import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector, useDispatch} from "react-redux"
import { auth } from "./firebase";
import {logout, selectUser} from "./features/userSlice"

function Header() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const signOut = () => {
        auth.signOut().then( () => {
            dispatch(logout())
        })
        

    }
    const imgUrl = "https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
    return (
        <div className= "header">
            {/* to create the icon on left */}
            <div class="header_left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img
                src={imgUrl}
                alt="" 
                />
            </div>

            <div class="header_middle">
            <SearchIcon />
            <input placeholder="Search mail" type="text" />
            <ArrowDropDownIcon className="header_inputCaret" />
            </div>
            
            <div class="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src= {user?.photoUrl} />
            </div>        
        </div>
    )
}

export default Header
