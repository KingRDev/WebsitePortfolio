import React from 'react'
import { Wrapper, Page, Menu} from '../Header/header_style'
import { Link } from 'react-scroll'
import { ScrollLinks } from './NavLinks/navlinks'
import { SiJavascript } from 'react-icons/si'

const Header = () => {
  return (
    <Wrapper>
        <Menu>
        <Link smooth={true} to={"hero"}>
           <Page><SiJavascript color='#FFFF00'/>KRDev</Page>
        </Link>
        </Menu>
        <Menu>
            {
                ScrollLinks.map((link, i) => (                            
                    <Link key={i} activeClass={true} spy={true} smooth={true} to={link.pageLink}>
                        <Page>{link.name}</Page>
                    </Link>
                ))
            }
        </Menu>
    </Wrapper>
  )
}

export default Header