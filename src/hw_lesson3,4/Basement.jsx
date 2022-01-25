import React from "react";

const basement = {
    backgroundColor: "#20232a",
    fontSize: "20px",
    color: "white",
}

const basementLinks = {
    margin: "5px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
}

const Basement = () =>{
    return <div style={basement}>
        <a href="" style={basementLinks} >Docs</a>
        <a href="" style={basementLinks} >Tutorial</a>
        <a href="" style={basementLinks} >Blog</a>
        <a href="" style={basementLinks} >Community</a>
    </div>

}

export default Basement