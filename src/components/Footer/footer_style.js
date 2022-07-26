import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #111827;
    
    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    padding-right: 2rem;
    padding-left: 3rem;
    bottom: 0;
`

export const Iconcontainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Iconbox = styled.a`
    padding: 0.5rem;
    justify-content: center;
`
export const Emailbox = styled.div`

`

export const Text = styled.h3`
    color: #FFFFFF;
    align-item: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 1rem;

    @media (max-width: 850px) {
        font-size: 0.8rem;
    }
`

