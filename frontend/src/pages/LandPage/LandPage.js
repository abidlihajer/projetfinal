import React from 'react'
import { Link } from 'react-router-dom';
import  "./LandPage.css";

function LandPage() {
  return (
    <section className="home" id="home">
    <div className="content">
      <h2>Become The Better Version Of Yourself</h2>
      <p>
        Take our quiz to get a personal meal plan and acheive your weight goals
      </p>
      <Link to="../signup"> <button className="bttn btn-success" > Start your journey </button></Link>
    </div>
  </section>

  )
}

export default LandPage