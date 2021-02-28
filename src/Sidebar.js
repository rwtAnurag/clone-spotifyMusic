import React from "react";
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function Sidebar(){
    const [{playlists},dispatch] = useDataLayerValue();
    return(
      <div className="sidebar">
         <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>  
         <SidebarOption Icon={HomeIcon} title="Home"/>  
         <SidebarOption Icon={SearchIcon} title="Search"/>   
         <SidebarOption Icon={LibraryMusicIcon} title="your Library"/>  
         <br/>
         <strong className="sidebar__title">PLAYLISTS</strong>
         <hr/>
         
         {playlists?.items?.map(playlist =>(
           <SidebarOption title={playlist.name}/>
         ))}
        
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Ae Dil Hai Mushkil"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Tere Sang Yaara"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Galliyan"/> 
         <SidebarOption Icon={PlayCircleOutlineIcon} title="ANADAAN PARINDE"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Tum Hi Ho"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Dhadak"/> 
         <SidebarOption Icon={PlayCircleOutlineIcon} title="AKalank"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Teri Mitti"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Kaun Tujhe"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Bhaag Milkha Bhaag"/>  
         <SidebarOption Icon={PlayCircleOutlineIcon} title="Tum Tak"/>  
      </div>
    );
}

export default Sidebar;
