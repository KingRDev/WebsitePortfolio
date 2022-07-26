import React from 'react'
import { MainAndIcons, Wrapper, Container, Name, Main, Title, IconContainer, Iconbox } from './hero_style'
import { AiOutlineGithub, AiOutlineLinkedin, AiFillFileText } from "react-icons/ai";

function Hero() {
  return (
    <div id="hero">
        <Wrapper>
                <Container>
                    <Title>
                        Hello and Welcome!
                    </Title>
                    <Name>
                       King Romeo Albano
                    </Name>
                    <MainAndIcons>
                    <Main>
                          Software Developer
                    </Main>
                    <IconContainer>
                        <Iconbox >
                            <AiFillFileText size={'2rem'} color='#111827'/>
                        </Iconbox>

                        <Iconbox href='https://github.com/KingRDev'>
                            <AiOutlineGithub size={'2rem'} color='#111827'/>
                        </Iconbox>

                        <Iconbox href='https://www.linkedin.com/in/king-romeo-albano-990850223/'>
                            <AiOutlineLinkedin size={'2rem'} color='#111827'/>
                        </Iconbox>
                    </IconContainer>
                    </MainAndIcons>
                </Container>
        </Wrapper>
    </div>
  )
}

export default Hero