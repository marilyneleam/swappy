import { Parallax } from '@react-spring/parallax'
import Container from 'react-bootstrap/Container'
import Header from '../Header/Header'
import Items from '../Items/Items'
import Navbar from '../Navbar/Navbar'
import Home from './Home'
import { Fade } from 'react-bootstrap'

function HomePage() {
    return (
        <div>
            <Header />
            <Navbar />
            <Parallax pages={2}>
                <Container className="container-box rounded">
                    <Fade left duration={2000}>
                        <Home />
                    </Fade>
                </Container>
            </Parallax>
            <div>
                <Container className="container-box rounded">
                    <Fade right duration={2000}>
                        <Items />
                    </Fade>
                </Container>
            </div>
        </div>
    )
}

export default HomePage
