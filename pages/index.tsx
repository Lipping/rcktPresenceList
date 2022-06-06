import { Container } from "../shared/pages/Home/style"
import { useState } from "react"



export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [title, setTitle] = useState("White")

  function handleClick() {
    setDarkTheme(!darkTheme)
    setTitle(darkTheme ? "White" : "Dark")
  }

  return (
    <Container darkTheme={darkTheme}>
      <h1>{title}</h1>
      <button onClick={handleClick}>Change Theme</button>
    </Container>
  )
}
