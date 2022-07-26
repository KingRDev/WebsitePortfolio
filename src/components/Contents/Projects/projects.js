import React from 'react'
import { Type, Status, ImageContainer, Wrapper, Container, Title, GridContainer, Boxes, Name} from './project_style'
import { projectList } from './project_list/projectList'

const Projects = () => {
  return (
    <div id="projects">
    <Wrapper>
      <Container>
        <Title>Projects</Title>
        <GridContainer>
            {
              projectList.map((key, i) => {
                return(
                  <Boxes key={i}>
                      <Name>{key.name}</Name>
                      <ImageContainer> 
                        <img src={key.image} style={{
                          maxHeight: '300px',
                          maxWidth: '300px'
                        }} alt=""/>
                      </ImageContainer>
                      <Type>"{key.type}"</Type>
                      <Status>Status: {key.status}</Status>
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

export default Projects
