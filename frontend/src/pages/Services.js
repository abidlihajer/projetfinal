import React from 'react'
import foodimg from '../images/foodimg.jpeg'
import coachimg from '../images/coachimg-transformed.jpeg'
import nutriimg from '../images/nutriimg-transformed.jpeg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Services() {
  return (

    <CardGroup style={{width:'1200px', height:'500px' ,marginTop:'100px' ,marginLeft:'250px' ,marginBottom:'250px'}}>
      <Card >
        <Card.Img variant="top" src={foodimg}/>
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}><h1>Personalized meal plan</h1></Card.Title>
          <Card.Text style={{textAlign:'center',color:'black'}}>
          Сontains ingredients, step-by-step preparation, extra recipes to swap and nutritional value.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={coachimg} />
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}><h1>Fat burning workouts</h1></Card.Title>
          <Card.Text style={{textAlign:'center',color:'black'}}>
          Tell us about yourself so that we can create a personalized meal plan tailored to your needs, preferences, and goals.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={nutriimg} />
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}><h1>Professional support</h1></Card.Title>
          <Card.Text style={{textAlign:'center',color:'black'}}>
          Don’t hesitate to ask your question. We are here to help you solve any kind of difficulty 24/7
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  

  )
}
export default Services