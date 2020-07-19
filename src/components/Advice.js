import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchAdvice } from '../actions/adviceActions';
import { Container, Row, Col, Button } from 'reactstrap';
import '../index.css';


const Advice = ({fetchAdvice, isFetching, error, advice}) => {

    const getAdvice = e => {
        e.preventDefault();
        fetchAdvice();
    };

    useEffect(() => {
        fetchAdvice()
    }, [])

    if (isFetching) {
        return <Loader type="Watch" color="#ccc" className="loader" />;
    }

    return(
        <div>
            <Container className="container">
                <Row className="row">
                    <Col sm="12" md={{ size: 6, offset: 3 }}>

                        <h1>Advice Machine</h1>

                        <p>Looking for great advice?  Click on the button and get you some o' that!!</p>
                        
                        { error && <p>{ error }</p> }
                        { advice ? (
                            <h4>{ advice }</h4>
                        ) : (
                            <p></p>
                        ) }
                        <Button 
                            color="primary" 
                            size="lg" 
                            block
                            onClick={ getAdvice }>
                                Get Some GREAT Advice
                        </Button>
                        
                        <p className="github">GitHub URL: <a href="https://github.com/eddiemadrigal/redux-async-demo" target="_blank" rel="noopener noreferrer">https://github.com/eddiemadrigal/redux-async-demo</a></p>

                    </Col>
                </Row>
            </Container>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        error: state.error,
        isFetching: state.isFetching,
        advice: state.advice
    };
};

export default connect(mapStateToProps, { fetchAdvice })(Advice);
