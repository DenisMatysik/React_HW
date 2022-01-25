import React from "react";

const sidebar = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "grey",
    fontSize: "20px",
    color: "white",
}

const sidebarLinks = {
    margin: "5px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
}

const Sidebar = () =>{
    return <div style={sidebar}>
        <a href="" style={sidebarLinks} >Docs</a>
        <a href="" style={sidebarLinks} >Tutorial</a>
        <a href="" style={sidebarLinks} >Blog</a>
        <a href="" style={sidebarLinks} >Community</a>
    </div>


}

export default Sidebar