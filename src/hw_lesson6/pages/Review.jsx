import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Review() {
    const {userId,fullName,review} = useParams();
  return (
    <div>
      <h3> Reviews №{userId} from {fullName}
        <h4>{review}</h4>
        <Link to="/reviews">Bach to reviews</Link>
    </h3>
    </div>
  )
}
