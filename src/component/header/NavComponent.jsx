import React, { Component } from 'react';
import '../../assets/css/NavStyle.css';
import { Container, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

// images
import LogoWeb from '../../assets/images/logotulisan.png';

class NavComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            descWeb: 'Description of your online store',
            placeHolder: 'Search ...',
        }
    }

    render() {
        const { descWeb, placeHolder } = this.state;

        return(
            <div className="nav-header">
                <Container>
                    <Row className="row">
                        <Col xs="2" className="column">
                            <img src={ LogoWeb } alt="Belanja Kita" />
                        </Col>
                        <Col xs="2" className="column">
                            <p>{ descWeb }</p>
                        </Col>
                        <Col xs="5" className="column">
                            <Form>
                                <FormGroup>
                                    <FormControl placeholder={ placeHolder } />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col className="column"></Col>
                        <Col className="column"></Col>
                        <Col className="column"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NavComponent;