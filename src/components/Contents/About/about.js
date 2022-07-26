import React from 'react'
import { Wrapper, Container, Title, Name, Section, Main} from './about_style'


const About = () => {
  return (
    <div id="about">
    <Wrapper>
        <Container> 
            <Title>
                About Me
            </Title>
            <Name> 
                I'm King Romeo Albano,
            </Name>
            <Section>
                <Main>
                    "Commencing my journey in the industry of Information Technology,
                    I'm looking forward be in an organization that will utilize and empower my greatest potential
                    with anticipation to exhibit a contribution while filling my venture professionally."  
                </Main>
            </Section>
        </Container>
    </Wrapper>
    </div>
  )
}

export default About