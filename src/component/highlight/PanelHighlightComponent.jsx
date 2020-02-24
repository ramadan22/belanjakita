import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/PanelHighlightStyle.css';

// images
import Maskgrouplogo1 from '../../assets/images/maskgroup1.png';
import Maskgrouplogo2 from '../../assets/images/maskgroup2.png';
import Maskgrouplogo3 from '../../assets/images/maskgroup3.png';
import Maskgrouplogo4 from '../../assets/images/maskgroup4.png';

class PanelHighlightComponent extends Component {
    render() {
        return(
            <div className="panel-hightlight">
                <Container>
                    <Row>
                        <Col className="panel-list">
                            <img src={ Maskgrouplogo1 } alt="mask logo 1" />
                            <p>
                                <span>Free Shipping</span><br />
                                <span>Free shipping all order</span>
                            </p>
                        </Col>
                        <Col className="panel-list">
                            <img src={ Maskgrouplogo2 } alt="mask logo 2" />
                            <p>
                                <span>100% Money Guarantee</span><br />
                                <span>30 days money back</span>
                            </p>
                        </Col>
                        <Col className="panel-list">
                            <img src={ Maskgrouplogo3 } alt="mask logo 3" />
                            <p>
                                <span>Help Center</span><br />
                                <span>24/7 support system</span>
                            </p>
                        </Col>
                        <Col className="panel-list">
                            <img src={ Maskgrouplogo4 } alt="mask logo 4" />
                            <p>
                                <span>Payment Method</span><br />
                                <span>Secure Payment</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PanelHighlightComponent;