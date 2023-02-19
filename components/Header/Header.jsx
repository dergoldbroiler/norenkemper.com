import Image from "next/image";

import { useState, useEffect } from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";

import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { Headlines } from "./components/Headlines";
import { Headerpreloading } from "./Headerpreloading";

export const Header = () => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(()=> {
            setLoaded(true);
        }, 1200)
    },[loaded])

    if(!loaded) {
        return <Headerpreloading />
    }

    return (
        <header className="header">
            <Container fluid className="h-100">
                <Row>
                    <Col>
                        <Logo url="/images/logo.png" visible={true}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navigation />
                    </Col>
                </Row>
            </Container>

            <Headlines textColor="#fff" classes="no-animation fadein"/>
        </header>
    )
}