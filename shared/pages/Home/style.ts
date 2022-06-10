import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: #1a1a1a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 56px;
  `;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4EA8DE;
  margin-bottom: 32px;
`;

export const InteractBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width:100%;
  margin-bottom: 64px;
  `;

export const Input = styled.input`
  height: 54px;
  background-color: #262626;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 1rem;
  width:100%;
  color: #f7f7f7;
  &:focus {
    outline: none;
    border:1px solid #5E60CE ;
    padding: 15px;
  }
  `;

  export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  padding: 16px;
  gap:16px;

  background-color: #1E6F9F;
  color: #f7f7f7;

  font-weight: bold;
  font-size: 0.8rem;
  
  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
  
    background-color: #4EA8DE;
  }
  `;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  width: 100%;
  `;

export const StudentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  `;

export const StudentNumberBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  `;

export const StudentNumberTitle = styled.h3`
  font-size: .8rem;
  font-weight: bold;
  color: #4EA8DE;
  `;

export const RegisterProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  `;

  export const RegisterProfileTitle = styled.h3`
  font-size: .8rem;
  font-weight: bold;
  color: #8284FA;
  `;

  export const RegisterProfileImg = styled.img`
  width: 32px;
  clip-path: circle(50% at 50% 50%);
  `;
