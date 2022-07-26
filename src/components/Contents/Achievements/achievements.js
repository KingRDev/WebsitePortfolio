import React from 'react'
import { Wrapper, Container, Title, GridContainer, Boxes, Year, Card, Activity } from './achievements_style'
import { items } from './constants/items'

const Achievements = () => {
  return (
    <div id="achievements">
    <Wrapper>
      <Container>
        <Title>Achievements</Title>
        <GridContainer>
            {
              items.map((key, i) => {
                return(
                  <Boxes key={i} >
                      <Year>{key.year}</Year>
                      <Card>{key.card}</Card>
                      <Activity>:{key.activity}</Activity>
                  </Boxes>
                )
              })
            }
        </GridContainer>
      </Container>
    </Wrapper>
    </div>
  )
}

export default Achievements