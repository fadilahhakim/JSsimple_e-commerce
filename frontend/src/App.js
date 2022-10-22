import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomePages from './pages/HomePages';

function App() {
  return (
    
    <>
      <Header></Header>
      <main>
          <Container>
          <HomePages></HomePages>
          </Container>
      </main>
      <Footer></Footer>
    </>

  )
}

export default App;
