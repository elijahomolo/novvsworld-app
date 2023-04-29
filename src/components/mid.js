import React, { useState } from 'react';
import  './mid.css'
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';

function Mid() {

    return(
        <div className="top-content mid-background">
            <div className="container">

                <div className="row">
                    <div className="col-md-8 offset-md-2 text">
                        <h1 className="wow fadeInLeftBig">The Pregame</h1>
                        <div className="description wow fadeInLeftBig">

                        </div>
                        <div className="top-big-link wow fadeInUp">
                            <a className="btn-link-1 scroll-link" href="/the-pregame">Listen Here</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Mid