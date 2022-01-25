import React from "react";

const mainStyle = {
    backgroundColor: "#20232a",
    fontSize: "20px",
    color: "white",}

const footerNav = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "baseline"
}

const footerLinks = {
    margin: "5px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
}

const footerBtn = {
    margin: "5px",
    color: "#20232a",
    fontSize: "15px",
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: "37px",
    padding: "15px",
    cursor: "pointer"
}

const Footer=() =>{
    return <div style={mainStyle} >
       <div style={footerNav}>
           <div className="footerBtns">
            <a href="" style={footerLinks} >Docs</a>
            <a href="" style={footerLinks} >Tutorial</a>
            <a href="" style={footerLinks} >Blog</a>
            <a href="" style={footerLinks} >Community</a>
           </div>
           <button style={footerBtn} >GitHub</button>
       </div>
    </div>
}

export default Footer