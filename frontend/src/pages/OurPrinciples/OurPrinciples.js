import React from 'react'
import './OurPrinciples.css'
import nuttrition from '../../images/nuttition.svg'
import motivation from '../../images/motivation.webp'
import learning from '../../images/learning.svg'

function OurPrinciples() {
  return (
    
    
    <>
    <div className="header">
      <h1>Our mission is to help people fall in love with a healthy lifestyle!</h1>
       
    </div>
    <div className="row1-container">
      <div className="box box-down cyan">
        <h2>Motivation</h2>
        <p>
        The healthline website inspires you with fun & result.
         Set your goals, share your achievements with friends, 
         explore the entertaining feed and get your personal interactive reports.
          Our 24/7 customer support line is ready to keep you motivated!
        </p>
        <img src={motivation} alt="motivation" />
      </div>
      <div className="box red">
        <h2>Nutrition</h2>
        <p>
        The healthline website is not a diet.
         You get a personalized meal plan that breaks barriers.
          It includes a tasty meal per day menu with simple step-by-step recipes,
           essential ingredients needed, preparation time, and a shopping list.
        </p>
        <img
          src={nuttrition}
          alt="nuttrition"
        />
      </div>
      <div className="box box-down blue">
        <h2>Learning</h2>
        <p>Fill your actions with meaning.
             Simple and interactive articles, audio lessons,
              and courses are here to help you better understand your body.</p>
        <img src={learning} alt="learning" />
      </div>
   
    
    </div>
    
 
    </>


  )
}

export default OurPrinciples