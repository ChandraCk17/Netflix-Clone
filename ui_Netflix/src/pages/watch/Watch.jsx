import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'

export default function watch() {
    return (
      <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" 
        autoPlay 
        progress 
        controls 
        src="C:\Users\Ck17\Videos\Painting - 960.mp4"/>
      </div>
    )
  }