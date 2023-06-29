import React from "react";
import iconsearch from "../Images/icon-search.svg";
import mic from "../Images/mic.svg";
import '../styles/SearchPage.css';

export default function SearchPage() {
  return (
    <div className="home">
    <img
        className="GoogleLogo"
        src="https://th.bing.com/th/id/R.a3e13b4839f1f9eb7de7792e868d2793?rik=RCt3FFeRe7y4hA&riu=http%3a%2f%2fravecommunications.com%2fwp-content%2fuploads%2f2018%2f09%2fRave-No-Spam-Icon.jpg&ehk=WzneMT6zD0CdwxW7VzHKGCJyCHqZrUehOL6vtkmiZPo%3d&risl=&pid=ImgRaw&r=0"
        alt="Logo"
      />
    <div className="contain">
      <form action="" className="searchbar">
        
        <input
          className="input"
          autoComplete="aff"
          spellCheck="false"
          // role={"combobox"} 
          placeholder="Type your Query here..."
          aria-live="polite"
        ></input>
        <img className="iconsearch" src={iconsearch} alt="Logo" />
        <img src={mic} alt="mic" />
      </form>
    </div>
    </div>
  );
}
