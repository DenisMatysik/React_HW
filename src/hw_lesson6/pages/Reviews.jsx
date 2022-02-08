import React from 'react';
import { Link } from 'react-router-dom';
// import Review from './Review';

export const users = [
    {id:"1", fullName:"Asd Dsa", review:"aaasdsasdasdddsaasd asdas da sd as dasdas as das d"},
    {id:"2", fullName:"Wsd AASD", review:"zzxczxc zxc da cxzxczsd as dasdxczxas asczxc das d"},
    {id:"3", fullName:"ZXC Dsssdasa", review:"'l;';l'';'dsasdashjkhj;kl;dddsaasd asdas da sd as dasdas as das d"},
    {id:"4", fullName:"BNM 2123", review:"ghjkhjk asdas da sd hjkhjk dasdas as das d"},
]

export default function Reviews() {
  return <div> Reviews page,click on review, which you want to check
    <h1>All reviews:</h1>
    { users.map(item => <Link key={item.id} fullName={item.fullName} id={item.id} review={item.review} to={`/reviews/${item.id}`}>
        <h3> Reviews №{item.id} from {item.fullName}
        </h3>
    </Link>)}
  </div>;
}
