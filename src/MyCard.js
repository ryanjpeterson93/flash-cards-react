import React from "react";
import { Card, Button } from "semantic-ui-react";

const MyCard = ({ id, front, back, remove }) => ( 
  <Card >
    <Card.Content textAlign='center' header='Flash Card' />
    <Card.Content textAlign='center'> {front} </Card.Content>
    <Card.Content textAlign='center'> {back} </Card.Content>
    <Button primary  >Flip</Button>
    <Button secondary onClick={() => remove(id)} >Delete</Button>
  </Card>
)

export default MyCard