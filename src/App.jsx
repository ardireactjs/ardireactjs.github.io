import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'

const App = () => {
    return (
        <div>
            <Header   className="full"/>
            <Nav  className="full"/>
            <About  className="full"/>
            <Experience  className="full"/>
            <Services  className="full"/>
            <Portfolio  className="full"/>
            {/* <Testimonials  className="full"/> */}
            <Contact  className="full"/>
            {/* <Footer  className="full"/> */}
        </div>
    )
}

export default App