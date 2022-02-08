import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Review() {
    const {userId} = useParams();
  return (
    <div>
        <Link to="/reviews">Bach to reviews</Link>
        <h2>Review №{userId}</h2>
        {/* <h2> Review №{userId} from {fullName}
            <h3>{review}</h3>
        </h2> */}
    </div>
  )
}
