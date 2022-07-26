import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: auto;
    height: 100vh;
    background: linear-gradient(-90deg, #AAAAAA  70%, #111827 60%);

    align-items: center;
    justify-content: center;
    align-content: center;


    @media (max-width: 768px) {
        height: 100vh;
        width:auto;

        padding: 0 1rem 0 1rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 10px;

    padding: 5rem;

    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 0.3rem;

    @media (max-width: 768px) {
        padding: 3rem;
    }

`
export const MainAndIcons = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Title = styled.div`
    background-color: #111827;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    @media (max-width: 768px) {
        color: #FFFFFF;
        font-size: 1.5rem;
    }

`

export const Name = styled.div`
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Roboto Mono', monospace;

    color: #111827;
    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }

`

export const Main = styled.div`
    background-color: #111827;
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto Mono', monospace;

    padding-left: 5px;
    padding-right: 5px;

    justify-content: center;
    align-items:center;

    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;

    @media (max-width: 768px) {
        color: #FFFFFF;
        font-size: 1.5rem;
        text-align: center;
    }
`
export const IconContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-end;
        align-items:center;
        align-content: center;
    }
`

export const Iconbox = styled.a`
    padding-left: 1rem;

    @media (max-width: 768px) { 
        padding-top: 1rem;
    }
    
`
