import React from 'react'
import {Wrapper, Container, Title, GridContainer, Boxes, ImageContainer, Name } from './skills_style'
import { items } from './constants/items'

const Skills = () => {
  return (
    <div id="skills">
    <Wrapper>
        <Container>
          <Title>Skills</Title>
          <GridContainer>
          {
            items.map((key, i) => {
              return (
                <Boxes key={i}>
                      <ImageContainer>
                        <img src={key.image} style={{
                          maxHeight: '100px',
                          maxWidth: '100px'
                        }} alt=""/>
                      </ImageContainer>
                    <Name>{key.name}</Name>    
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

export default Skills