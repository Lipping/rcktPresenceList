import { Card } from "../components/Card"
import { Button, Container, Content, Input, InteractBox, List, RegisterProfileBox, RegisterProfileImg, RegisterProfileTitle, StudentInfoBox, StudentNumberBox, StudentNumberTitle, Title } from "../shared/pages/Home/style"
import { useState, useEffect } from "react"

export default function Home() {

  const [studentName, setStudentName] = useState("")
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleStudent() {
    const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }
  setStudents(prevState => [...prevState, newStudent])
}

useEffect(() => {
  fetch(`https://api.github.com/users/${studentName}`)
  .then(res => res.json())
  .then(data => 
    setUser({name: data.name,
       avatar: data.avatar_url
      }))
}, [students])

  return (
    
    <Container>
      <Content>
      <Title>Lista de presença</Title>
      <InteractBox>
      <Input 
      onChange={e => setStudentName(e.target.value)}
      placeholder='Adicione um aluno'
       />
      <Button onClick={handleStudent}>Criar</Button>
      </InteractBox>
      <List>
        <StudentInfoBox>
          <StudentNumberBox>
            <StudentNumberTitle>Estudantes cadastrados</StudentNumberTitle> {students.length}
          </StudentNumberBox>
          <RegisterProfileBox>
            <RegisterProfileTitle>{user.name}</RegisterProfileTitle>
            <RegisterProfileImg src={user.avatar} />
          </RegisterProfileBox>
        </StudentInfoBox>
        {students.map((student, index) => (<Card key={index} name={student.name} time={student.time}/>))} 
      </List>
      </Content>
    </Container>
  )
}
