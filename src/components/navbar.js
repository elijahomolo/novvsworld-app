import React, { useState } from 'react';
import * as styles from'./nav.module.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText, Row, Col,
} from 'reactstrap';

function Navigation(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container" fluid>
        <Navbar {...args} className={["fixed-top navbar-expand-md ", styles.navbar, styles.navbarDark, styles.navbarNoBg, styles.navbarExpandMd]} dark >
                    <NavbarBrand href="/" className={["navbar-brand", styles.navbarBrand]}>Novvs World</NavbarBrand>

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar  id={"navbarNav"} className="ms-2">
                        <Nav pills  vertical="sm">
                            <NavItem className={["navbar-nav ml-auto", ]}>
                                <NavLink
                                    className={["nav-link scroll-link", ]}
                                    href="/">
                                    Home
                                </NavLink>
                                <NavLink className={["nav-link scroll-link", ]} href="/#music">
                                    Music
                                </NavLink>
                                <NavLink className={["nav-link scroll-link", ]} href="/#videos" >
                                    Videos
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Collapse isOpen={isOpen} navbar  id={"navbarNav2"} className="position-absolute end-0">
                        <Nav pills>
                            <NavItem className={["navbar-nav ml-auto", styles.navbarNav]}>
                                <NavLink  className={["nav-link scroll-link w-inline-block", styles.navLink]} href="https://www.instagram.com/ayenovv/" target="_blank">
                                    Instagram
                                </NavLink>
                                <NavLink className={["nav-link scroll-link w-inline-block", styles.navLink]} href="https://twitter.com/ayenovv" target="_blank" >
                                    Twitter
                                </NavLink>
                                <NavLink className={["nav-link scroll-link w-inline-block", styles.navLink]} href="https://www.facebook.com/ayenovv" target="_blank">
                                    Facebook
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>





        </Navbar>
        </div>
    );
}

export default Navigation;