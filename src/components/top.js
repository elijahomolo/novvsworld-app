import React, { useState } from 'react';
import  './top.css'
import {
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';

function Top() {

    return(
        <div className="top-content background">
            <div className="container">

                <div className="row">
                    <div className="col-md-8 offset-md-2 text">
                        <h1 className="wow fadeInLeftBig">Just.That.Type</h1>
                        <div className="description wow fadeInLeftBig">

                        </div>
                        <div className="top-big-link wow fadeInUp">
                            <a className="btn-link-1"
                               href="https://soundcloud.com/user-283089571/just-that-type"
                               target="_blank" rel="noopener noreferrer">
                                Listen Here
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Top