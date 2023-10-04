import React from 'react'

import "../../../assets/styles/feed.css";
import FeedLeft from './feed_left/FeedLeft'
import FeedMid from './feed_mid/FeedMid'
import FeedRight from './feed_right/FeedRight'

const Feed = () => {
  return (
    <div className='feed-section'>
        <FeedLeft/>
        <FeedMid/>
        <FeedRight/>
    </div>
  )
}

export default Feed