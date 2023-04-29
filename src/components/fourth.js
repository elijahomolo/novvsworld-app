import React, { useState } from 'react';
import  './fourth.css'
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';

function Fourth() {

    return(
        <div className="top-content fourth-background" id={"videos"}>
            <div className="col-md-8 offset-md-2 text">
                <h1 className="wow fadeInLeftBig">Videos</h1>
            </div>
            <Container fluid={"sm"}>


                <Row xs={"3"}>

                    <Col className="d-flex flex-row">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/wr-niHRO2II"
                                title="YouTube video player" frameBorder="2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Col>
                    <Col >
                        <iframe width="100%^" height="315" src="https://www.youtube.com/embed/zakKhvVE8oI"
                                title="YouTube video player" frameBorder="2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Col>
                    <Col >
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/8nnTPtTJ4r4"
                                title="YouTube video player" frameBorder="2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Fourth