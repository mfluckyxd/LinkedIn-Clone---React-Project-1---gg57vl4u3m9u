import { Avatar } from '@mui/material'
import React from 'react'

const SingleComments = ({comment}) => {

  return (
    <>
        <div className="post-comment">
          <Avatar/>
            <div className="post-comment-content">
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
            </div>
        </div>
    </>
  )
}

export default SingleComments