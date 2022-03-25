import axios from "axios";
import { useEffect, useState } from "react";
import Members from "../components/Members";
import ourTeamPic from "./../assets/pictures/our-team.jpg"
import handiPic from "./../assets/pictures/handy-friendly.jpg"
import selectionPic from "./../assets/pictures/selection.jpg"
import expertPic from "./../assets/pictures/expert.jpg"

const About = () => {
  const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        if(playOnce){
            axios.get(
                "http://localhost:8090/crew"
            )
            .then((res) => {
              setData(res.data);
              setPlayOnce(false);
            });
        }
    })
  return (
    <div className="about"> 
      <div className="about-header">
        <h1>Our Team</h1>
        <img src={ourTeamPic} alt="our team" className="ourTeamPic"></img>
      </div> 
      <div className="crew-members">
        {data.map((members) => (
          <Members  members= {members} key={members.id}/>
        ))}
      </div>
      <div className="our-values">
        <h1>Our values</h1>
        <div className="presentation">
          <div className="text-left">
            <p>A Handi-Friendly company. Indeed, our Managing Director, Tom himself with a disability. We have arranged the store, with access ramps for wheelchair, very friendly staff listening and sensitized to the cause of disability</p>
          </div>
          <div className="pic-container">
            <img src={handiPic} alt="we are handi-friendly" className="pic"></img>
          </div>
        </div>
        <div className="presentation">
          <div className="pic-container">
            <img src={selectionPic} alt="a great selection from the whole world" className="pic"></img>
          </div>
          <div className="text-right">
            <p>A quality selection of vinyls of all kinds from around the world, for your full satisfaction but also to provide you with a product of impeccable quality both musically speaking than the product itself.</p>
          </div>
        </div>
        <div className="presentation">
          <div className="text-left">
            <p>Passion, indeed at Vinhills the passion is at the heart of our Steps. And yes at Vinhills, some of us are musicians, DJs, promoters or just in love with music.</p>
          </div>
          <div className="pic-container">
            <img src={expertPic} alt="a passion about sound" className="pic"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
