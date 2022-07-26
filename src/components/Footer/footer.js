import React from 'react'
import { Wrapper, Text, Iconcontainer, Iconbox, Emailbox } from './footer_style'
import { AiOutlineGithub, AiOutlineLinkedin, AiFillFileText } from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
        <Emailbox>
            <Text>
                Email me • king.romeoalbano@gmail.com
            </Text>
        </Emailbox>

        <Iconcontainer>
            <Iconbox >
                <AiFillFileText size={'2rem'} color='white'/>
            </Iconbox>

            <Iconbox href='https://github.com/KingRDev'>
                <AiOutlineGithub size={'2rem'} color='white'/>
            </Iconbox>

            <Iconbox href='https://www.linkedin.com/in/king-romeo-albano-990850223/'>
                <AiOutlineLinkedin size={'2rem'} color='white'/>
            </Iconbox>

        </Iconcontainer>

    </Wrapper>
  )
}

export default Footer