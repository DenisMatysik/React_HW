import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from './Reviews';

export default function Review() {
    const {userId} = useParams();
    let reviewsInf = users.find(item => item.id == userId);
  return (
    <div>
        <Link to="/reviews">Bach to reviews</Link>
        <h2>Review №{userId} from {reviewsInf.fullName}</h2>
        <h3>{reviewsInf.review}</h3>
    </div>
  )
}
