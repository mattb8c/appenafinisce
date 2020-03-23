import React from 'react';
import './ShareButton.css';
import { FacebookShareButton } from "react-share";



function ShareButton({ link, message }) {

  //const className = 'Button light';

  return (
    <FacebookShareButton url={link} quote={message} hashtag="#appenafinisce">
      <p className="ShareButton light">Condividi</p>
    </FacebookShareButton>
  );

}//ShareButton

export default ShareButton;
