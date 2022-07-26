import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #111827;

    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37);
    border: 1px solid rgba(255,255,255,0.18);
    
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    padding-right: 2rem;
    padding-left: 3rem;
    position: sticky;
    top: 0;

    @media screen and (max-width: 768px) {
        padding-right: 0.3rem;
        padding-left: 0.3rem;
        
        justify-content: center;
    }
`

export const Page = styled.h4`
    color: #FFFFFF;
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 15px;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 768px) { 
        font-size: 0.75rem;
    }

    &.activeClass {
        color: #000;
        border-bottom: solid;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    text-shadow: -1px -1px 0 #111827, 1px -1px 0 #111827, -1px 1px 0 #000, 1px 1px 0 #111827;
     
    @media screen and (max-width: 768px) {
        //*display: none;
    }

    h4:hover {
        color: #FFF;
        border-bottom: solid;
    }
`

export const BarDiv = styled.div`
    display: none;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        display:block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(100%, 75%);
        cursor: pointer;
        align-self: center;
        justify-self: center;
    }

`
