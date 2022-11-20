import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  console.log(location);
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
        src="https://player.vimeo.com/progressive_redirect/playback/142611994/rendition/240p?loc=external&oauth2_token_id=1027659655&signature=d2b45d6a9d3d42e7a625415742485f00a8586e4f2109373903ae6c6558ee833e"/>
      </div>
    );
  }
