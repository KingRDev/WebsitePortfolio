import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex; 
    width: auto;
    height: 90vh;
    background-color: #111827;
    justify-content: center; 
    align-items: center;

    @media (max-width: 850px) {
        display: block; 
        height: auto;
        width: auto;
        padding-top: 4rem;
    }
`

export const Container = styled.nav`
    display: flex; 
    flex-direction: column;
    gap: 50px;
`

export const Title = styled.h3`
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    color: #CCCCCC; 
    fontWeight: 500;
    font-size: 1.5rem;
    font-family: 'Roboto Mono', monospace;
    align-self: center;
`

export const GridContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    align-self: center;
    width: auto;
    height: auto;

    @media (max-width: 850px) {
        grid-template-columns: auto auto;
    }

    @media (max-width: 790px) {
        grid-template-columns: auto;
    }
`

export const Boxes = styled.div`
    display: grid;
    gap: 20px;
    max-width: 250px;
    margin: 1.25rem; 
    border: solid;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 0.5rem; 
    border-width: 0.3rem; 
    border-color: #1F2937;

    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
    border: 1px solid rgba(255,255,255,0.18);

`

export const Year = styled.div`
    color: #CCCCCC; 
    fontWeight: 500;
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
`

export const Card = styled.div`
    color: #CCCCCC;
    font-size: 1.2rem;
    font-family: 'Roboto Mono', monospace;
    border-bottom: solid; 
    padding-bottom: 10px;
    text-align: left;
    height: 3rem;
`

export const Activity = styled.div`
    color: #CCCCCC;
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    letter-spacing: 1px;
    font-size: 1.1rem;
`

