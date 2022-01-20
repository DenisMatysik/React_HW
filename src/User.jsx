import React from "react";
const someLater = 'e';

const User = ({name}) => {

    // пункт1
    if (name.search(someLater) != -1) 
    return <span> It's Premium user! Welcome {name}... </span>
    else { return <span> It's user {name}</span> }

    // пункт2
    // if (name.length>5 ) 
    // return <span> It's user {name.slice(0,4)}... </span>
    // else { return <span> It's user {name}</span> }

    // пункт3
    // let nameLow = name.toLowerCase();
    // let nameRev = nameLow.split('').reverse().join('');
    // if (nameRev == nameLow)
    // return (<span > It's user <span className="highlighted"> {name}</span> </span>)
    // else { return <span> It's user {name}  </span>}

}

export default User;