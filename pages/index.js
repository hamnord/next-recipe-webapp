import Head from 'next/head'
import {Container, Row, Col, Image, Nav, Navbar, NavDropdown, ListGroup, Card} from 'react-bootstrap';
import styles from '../styles/mainPage.module.css';
import searchStyle from '../styles/Search.module.css';
import Logo from "../public/js/Logo";
import FoodCard from "../components/FoodCard/FoodCard";
import MainRecipeFeed from "../components/MainRecipeFeed/MainRecipeFeed";
import React, {useContext, useState} from "react";
import AppContext from "../Context/ContextIndex";
import Search from "./api/Search";
import SearchFunction from "./api/Search";
import HermanProfile from "../public/js/HermanProfile";
import HampusProfile from "../public/js/HampusProfile";

export default function Home() {
  //let {query,results,setResults,setQuery,message,setMessage, cancel} = useContext(AppContext);
  const [loading, setLoading ] = useState(true);
  const [recipes, setRecipes] = useState([]);


  return (
      <div className={styles.indexContainer}>
        <div id="Banner" className={styles.bannerContainer}>
          <div className={styles.bannerImage}>
            <div className={styles.navContainer}>
              <Row className={styles.centerAlignment}><Logo/></Row>
              <Row className={styles.centerAlignment}>
                <Navbar collapseOnSelect expand={"md | lg | xl"}>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link className={styles.navItemText} href="/">HOME</Nav.Link>
                    <Nav.Link className={styles.navItemText} href="/">ABOUT</Nav.Link>
                    <Nav.Link className={styles.navItemText} href="#CONTACTS">CONTACTS</Nav.Link>
                  </Navbar.Collapse>
                </Navbar>
              </Row>
              <Row className={styles.centerAlignment}>
                <div className={searchStyle.container}>
                  <SearchFunction/>
                 {/* <label className={searchStyle.searchLabel} htmlFor={"search-input"}>
                    <input id={"search-input"} value={''} onChange={queryHandler} type="text" placeholder=" Search..."/>
                    <i className={"fa fa-search search-icon"}/>
                  </label>*/}
                </div>
              </Row>
            </div>
          </div>
        </div>

        <div>
          <Row>
            <Col>

            </Col>
            <Col md={"auto"}>
              <ListGroup>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
                <ListGroup.Item><MainRecipeFeed/></ListGroup.Item>
              </ListGroup>

              <Card class={"mx-auto p-3 border "}>
                <footer id={"CONTACTS"}>
                  <div>
                    <Row className={styles.centerAlignment}>
                      <h2 className={` p-3 ${styles.FooterHeader}`}>CONTACTS</h2>
                    </Row>

                    <Container>
                      <Row >
                        <Col className={styles.card}>
                          <Card class="mx-auto border p-3 " className={styles.hermanCard}>
                            <Nav fill>
                              <div className={"mr-auto"}>
                                <Nav.Item><Nav.Link className={styles.navFooterText} href="https://github.com/HeSingh93">Herman Singh</Nav.Link></Nav.Item>
                              </div>
                            </Nav>
                            <Row className={`mr-auto ${styles.card}`}><HermanProfile/></Row>
                            <Card className={"mx-auto p-2"}>
                              <h5 className={`mr-auto ${styles.FooterText}`}> About: </h5>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                                Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
                              </Card.Text>
                            </Card>
                          </Card>
                        </Col>
                        <Col className={styles.card}>
                          <Card class="mx-auto border p-3" className={styles.hampusCard}>
                            <Nav fill>
                              <div className={styles.centerAlignment}>
                                <Nav.Item><Nav.Link className={styles.navFooterText} href="https://github.com/hamnord">Hampus Nordenstein</Nav.Link></Nav.Item>
                              </div>
                            </Nav>
                            <Row className={`mr-auto ${styles.card}`}><HampusProfile/></Row>
                            <Card className={"mx-auto p-2"}>
                              <h5 className={`mr-auto ${styles.FooterText}`}> About: </h5>
                              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur debitis dignissimos ipsam nemo odit optio quod tenetur vero!
                                Assumenda consectetur dolores ipsum laborum nisi quae repudiandae sed sit temporibus
                              </Card.Text>
                            </Card>
                          </Card>
                        </Col>
                      </Row>
                    </Container>

                    <Row className={styles.centerAlignment}>
                      <Nav fill>
                        <Nav.Item><Nav.Link className={styles.navFooterText} href="#Banner">Go to top</Nav.Link></Nav.Item>
                      </Nav>

                    </Row>
                  </div>
                </footer>
              </Card>
            </Col>
            <Col>
            </Col>

          </Row>
        </div>
        <footer className={styles.footer}/>
      </div>
  )
}
