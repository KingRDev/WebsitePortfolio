import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex; 
    padding: 2.5rem;
    width: auto;
    height: 90vh;
    background-color: #111827;
    justify-content: center; 
    align-items: center;

    @media (max-width: 790px) {
        display: block;
        width:auto;
        height: auto;
    }
`

export const Container = styled.nav`
    display: flex; 
    margin: 1.25rem; 
    flex-direction: column;
`

export const Title = styled.h3`
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    color: #CCCCCC; 
    fontWeight: 500;
    font-size: 1.1rem;
    font-family: 'Roboto Mono', monospace;
`

export const Name = styled.h2`
    color: #FFFFFF;
    font-family: 'Roboto Mono', monospace;
`

export const Section = styled.nav`
    border-bottom: solid;
    border-color: #DDDDDD;
    margin-top: 0;
`

export const Main = styled.h3`
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: #DDDDDD;
    max-width: 968px;
    font-family: 'Roboto Mono', monospace;
`
