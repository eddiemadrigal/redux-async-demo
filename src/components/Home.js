import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import '../index.css';


export default function Home() {

    const [advice, setAdvice] = useState('')

    useEffect(() => {
        axios
            .get(`https://api.adviceslip.com/advice`)
            .then( res => {
                console.log(res.data.slip.advice); 
                setAdvice(res.data.slip.advice)               
            })
            .catch(err => console.log(err)) 
      }, [setAdvice])

    return(
        <div>
            <Container className="container">
                <Row className="row">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <h1>Home Page</h1>
                        <h2>{ advice }</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
