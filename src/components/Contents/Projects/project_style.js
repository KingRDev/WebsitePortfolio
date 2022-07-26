import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: auto;
    background: #AAAAAA;
    justify-content: center; 
    align-items: center;
    padding-top: 1rem;

    @media (max-width: 768px) {
        display: block; 
        width: auto;
    }
`

export const Container = styled.div`
    display: flex; 
    position: relative; 
    margin: 1.25rem; 
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
    display: inline-grid;
    grid-template-columns: auto auto auto auto;

    @media (max-width: 960px) { 
        grid-template-columns: auto auto;
    }

    @media (max-width: 680px) { 
        grid-template-columns: auto;
    }
`

export const Boxes = styled.div`
    background-color: #111827; 
    width: 300px;
    margin: 1.25rem; 
    border-radius: 0.5rem; 
    border-width: 1px; 
    border-color: #1F2937; 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    div:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const Name = styled.h3`
    margin-bottom: 0.75rem; 
    color: #ffffff; 
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    text-decoration: underline;
    text-underline-offset: 0.5rem; 
`

export const ImageContainer = styled.div`
    display: flex;
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    justify-content: center; 

`
export const Status = styled.h5`
    color: #ffffff; 
    text-align: center;
    font-family: 'Roboto Mono', monospace; 
`
export const Type = styled.h5`
    color: #ffffff; 
    text-align: center;
    font-family: 'Roboto Mono', monospace; 
`