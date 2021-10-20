import React from 'react'
import ReactPlayer from 'react-player'

function Video() {
    return (
        <div className='video'>
            <ReactPlayer width="480px" height="240px" controls url='https://youtu.be/bg82FqrCjcs' />
        </div>
    )
}

export default Video
