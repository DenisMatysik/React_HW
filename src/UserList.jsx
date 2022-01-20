import React from "react";
import User from './User.jsx';
import ComposableUser from './ComposableUser.jsx';

const data = [{id: "uniq1", name:"Paul"}, 
{id: "uniq2", name:"Mary"}, 
{id: "uniq3", name:"Viktor"}, 
{id: "uniq4", name:"Suzanna"}, 
{id: "uniq5", name:"Peter"}, 
{id: "uniq6", name:"Vladislav"}, 
{id: "uniq7", name:"Anna"},
{id: "uniq8", name:"Bob"}];

const UserList = ({name}) => {
    return (<div className="userList">
    { data.map(item => <User key={item.id} name={item.name}></User>)}
    <ComposableUser/>
    </div>)
}

   
export default UserList;