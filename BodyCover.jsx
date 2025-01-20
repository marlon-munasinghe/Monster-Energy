import React from 'react';
import './BodyCover.css';

function BodyCover() {
  return (
    <div className="image-container">
  <img 
    src="/Images/CoverImg.jpg" 
    alt="Monster Energy CoverImg" 
    className="Coverimage"  
  />
  <p className="overlay-text"><u>Monster Energy Drinks </u><br></br></p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <div className="rectangle">
  The Original Green Monster
  <div className="coverCan-image">
          <img 
            src="/Images/CoverCan.png" 
            alt="Monster Can" 
            className="can-image" 
          />
        </div>
  </div>
</div>

  )
}

export default BodyCover;
