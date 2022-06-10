

import { Container, Content, Name, Time } from "./style";

export function Card({name, time}) {
  return (
    <Container>
        <Content>
            <Name>{name}</Name>
            <Time>{time}</Time>
      </Content>
    </Container>
  )
}