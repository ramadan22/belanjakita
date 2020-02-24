import React, { Component } from 'react';
import '../../assets/css/NavStyle.css';
import { Container, Row, Col, Form, FormGroup, FormControl, Button, Badge } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import LogoWeb from '../../assets/images/logotulisan.png';
import SearcLogo from '../../assets/images/search.png';
import UserLogo from '../../assets/images/user.png';
import HeartLogo from '../../assets/images/heart.png';
import ShoppingCartLogo from '../../assets/images/shoppingcart.png';
import BtnCategory from '../../assets/images/btncategory.png';

class NavComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descWeb: 'Description of your online store',
            placeHolder: 'Search ...',
            CategoryTitle: 'Category',
        }
    }

    render() {
        const { descWeb, placeHolder, CategoryTitle } = this.state;

        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            variableWidth: true,
            swipeToSlide: true,
        };

        return (
            <div className="nav-header">
                <Container>
                    <Row className="row">
                        <Col xs="2" className="column">
                            <img src={LogoWeb} alt="Belanja Kita" />
                        </Col>
                        <Col xs="2" className="column">
                            <p>{descWeb}</p>
                        </Col>
                        <Col xs="4" className="column">
                            <Form>
                                <FormGroup>
                                    <FormControl placeholder={placeHolder} />
                                    <Button className="button-logo-search">
                                        <img src={SearcLogo} alt="search" />
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col className="column">
                            <img src={UserLogo} alt="User Logo" />
                            <p>
                                <span>Login</span><br />
                                <span>Register</span>
                            </p>
                        </Col>
                        <Col className="column use-badge">
                            <img src={HeartLogo} alt="Heart Logo" />
                            <Badge pill variant="success">
                                10
                            </Badge>
                        </Col>
                        <Col className="column use-badge">
                            <img src={ShoppingCartLogo} alt="Shopping Cart Logo" />
                            <Badge pill variant="success">
                                10
                            </Badge>
                            <p>
                                <span>Shopping</span><br />
                                <span>Cart</span>
                            </p>
                        </Col>
                    </Row>
                    <Row className="category-wrap">
                        <Col className="btn-category-wrap" xs="3">
                            <Button variant="success"><img src={BtnCategory} alt="category button logo" /> {CategoryTitle}</Button>
                        </Col>
                        <Col className="list-category-wrap" xs="9">
                            <Slider {...settings}>
                                <div className="list-categroy">
                                    <a href="#">Category 1</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 2</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 3</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 4</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 5</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 6</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 7</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 8</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 9</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 20</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 21</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 22</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 23</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 24</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 25</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 26</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 27</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 28</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 29</a>
                                </div>
                                <div className="list-categroy">
                                    <a href="#">Category 30</a>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default NavComponent;