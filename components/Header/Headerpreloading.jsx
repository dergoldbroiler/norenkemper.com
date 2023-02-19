//Bootstrap
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";

import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { Headlines } from "./components/Headlines";


export const Headerpreloading = () => {
    return (
        <header className="header bg-white">
            <Container fluid className="h-100">
                <Row>
                    <Col>
                        <Logo url="/images/logo.png" visible={false}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
            </Container>
            
            <Headlines textColor="#000" classes="animation"/>
        </header>
    )
}