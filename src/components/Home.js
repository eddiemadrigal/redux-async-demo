import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../index.css';


export default function Home() {
    return(
        <div>
            <Container className="container">
                <Row className="row">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <h1>Home Page</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}