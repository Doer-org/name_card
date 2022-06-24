import './App.css'
import { Header } from './components/Layouts/Header'
import { Footer } from './components/Layouts/Footer'
import { Main } from './components/Main'

function App() {
  return (
    <div className="App content">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
