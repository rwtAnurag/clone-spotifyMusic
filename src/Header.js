import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header(){
    return(
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input
                placeholder="Search for Articts, Songs, or Podcasts"
                type="text"/>
            </div>
            <div className="header__right">
                <Avatar/>
                <h4>Anurag Rawat</h4>
            </div>
        </div>
    );
}

export default Header;