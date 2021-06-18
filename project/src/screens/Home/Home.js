import React from 'react';
import "./Home.css";
import MeetLogo from "./MeetLogo.png";
import MeetArrow from "./MeetArrow.png";
import HomePic from "./HomePic.jpg";


const Home = ()  => {
    return (
      <div>
      <hr className="hr" />
      <div className="row">
        <div className="column">
          <img className="" src={MeetArrow} alt="meetLogo" />

          <button >
            Take Class
          </button>

          <button>Join Class</button>
        </div>
        <div className="column1">
          <img className="MeetLogo" src={MeetLogo} alt="meetLogo2" />
        </div>
        <h1 id="Take-class"></h1>
      </div>

      <img className="HomePic" src={HomePic} alt="Home pic" />
      </div>
  
    );
  }
  
  export default Home;