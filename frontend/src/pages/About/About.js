import React from 'react'
import  "./About.css";
import Aboutimg from '../../images/Aboutimg.jpeg'
function About() {
  return (
    <section className="about" id="about">
    <div className="row">
      <div className="image">
        <img src={Aboutimg} alt="aboutimg" style={{height:"700px"}} />
      </div>
      <div className="content">
        <h2> We are Healthline</h2>
        <p>Healthline is a website that helps to establish new 
            healthy habits in a comfortable and pleasant way
        Healthline is a website that explains how weight
             management works and helps to establish new 
             healthy habits in a comfortable and pleasant way. 
             Our team applies the experience of professional nutritionists 
             and studies all users' feedback to
              improve the application features.</p>    
        <a href="#" className="btn">
          Learn more
        </a>
      </div>
    </div>
  </section>
  )
}

export default About