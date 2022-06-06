import styled from "@emotion/styled";

interface IContainerProps {
    darkTheme: boolean

  }

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props => (props.darkTheme ? '#222' : '#fff')};
    color: ${props => (props.darkTheme ? '#fff' : '#222')};
    font-family: 'Poppins', sans-serif;
`;