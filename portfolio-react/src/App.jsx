import NavBar from './components/Navbar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/Mywork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
