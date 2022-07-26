import styled from "styled-components";

export const Wrapper = styled.div`
    width: auto; 
    background: #AAAAAA;
    width: auto;
    height: 100vh;
    padding-top: 4rem;

    @media (max-width: 790px) {
        display: block; 
        height: auto;
        width: auto;
        padding-bottom: 2rem;
        padding-top: 4rem;
    }
`

export const Container = styled.div`
    display: flex; 
    position: relative; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

export const Title = styled.h5`
    margin-bottom: 1.25rem; 
    text-decoration: underline;
    text-underline-offset: 0.7rem;
    color: #111827;
    font-size: 1.5rem;
    line-height: 2rem; 
    fontWeight: 500; 
    align-self: center;
    font-family: 'Roboto Mono', monospace;
`

export const GridContainer = styled.div`
    background-color: #111827; 
    border-radius: 0.3rem;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    
    @media (max-width: 960px) { 
        grid-template-columns: auto auto auto;
    }

    @media (max-width: 760px) { 
        grid-template-columns: auto auto;
    }
    
    @media (max-width: 480px) { 
        grid-template-columns: auto;
    }
`

export const Boxes = styled.div`
    background-color: #111827; 

    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
    border: 1px solid rgba(255,255,255,0.18);

    width: 200px;
    margin: 1.25rem; 
    border-radius: 0.5rem; 
    border-width: 1px; 
    border-color: #1F2937; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    div:hover {
        cursor: pointer;
    }
`

export const ImageContainer = styled.div`
    display: flex; 
    padding: 1.25rem; 
    justify-content: center; 
`

export const Name = styled.h3`
    margin-bottom: 0.75rem; 
    color: #ffffff; 
    text-align: center;
    font-family: 'Roboto Mono', monospace; 
`