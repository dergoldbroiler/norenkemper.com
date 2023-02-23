import Image from "next/image";

import { useState, useEffect, useRef } from "react";

//Bootstrap
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";

import { Logo } from "./components/Logo";
import { Navigation } from "./components/Navigation";
import { Headlines } from "./components/Headlines";
 import { effects } from "public/js/effects";

import { useIntersectionobserving } from "hooks/useIntersectionobserving";


export const Header = () => {

    const header_ref = useRef();



    return (
        <header className="header" ref={header_ref}> 
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
     
        </header>
        
    )
}