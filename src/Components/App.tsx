import { type FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Container } from 'react-bootstrap'

export const App: FC = () => {
  return (
    <Container>
      <Button>Hello World</Button>
    </Container>
  )
}
