import {Container} from './layout_style'
import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const Layout = ({children}) => {
  return (
    <Container>
        <Header />
        <main>{children}</main>
        <Footer />
    </Container> 
  )
}

export default Layout
