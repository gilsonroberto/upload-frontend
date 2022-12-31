import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: 40rem;
    max-height: 22rem;
    margin: 18.75rem;
    overflow-y: auto;
    background: #fff;
    border-radius: 0.25rem;
    padding: 1.25rem;
    ::-webkit-scrollbar {
        background: #fff;
    }
`;