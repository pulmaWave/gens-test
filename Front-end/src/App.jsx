import { Joke } from './components/Joke/Joke'
import { NavBar } from './components/NavBar/NavBar'
import { Slogan } from './components/Slogan/Slogan'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Slogan />
      <Joke />
      <Footer />
    </>
  )
}

export default App
