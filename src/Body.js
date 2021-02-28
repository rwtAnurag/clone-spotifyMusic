import { Description, Favorite, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import './Body.css'
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
 
function Body({ spotify }){
    return (
       <div className="body">
           <Header spotify={spotify}/>
           <div className="body__info">
               <img src="https://i2.wp.com/www.thrace-music.com/wp-content/uploads/2020/02/AUGUST_DIARIES.jpg?fit=1800%2C1800&ssl=1" alt="" />
               <div className="body__infoText">
                   <strong>PLAYLIST</strong>
                   <h2>Discover Weekly</h2>
                   <p>description...</p>
               </div>
           </div>
           <div className="body__songs">
               <div className="body__icons">
                 <PlayCircleFilledIcon className="body__shuffle"/>
                 <FavoriteIcon fontSize="large"/>
                 <MoreHorizIcon />
               </div>
            </div>
       </div>
    );
}
export default Body;
