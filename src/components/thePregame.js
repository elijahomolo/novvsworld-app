import * as React from 'react'
import "./thepregame.css";
import Navigation from "./navbar";
import {AccordionBody, AccordionItem, Card, CardHeader, Container, ListGroup, ListGroupItem} from "reactstrap";
import {listen, apple, amazon, tidal, spotify}  from "./third.css"



const Layout = () => {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"></link>
        </head>

        <body className="pregame_background">

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"></script>


        <Navigation></Navigation>

        <Card className="pregame-card"
        >
            <ListGroup
                flush
            >
                <ListGroupItem className={"listen spotify"}
                               action
                               href="https://soundcloud.com/user-283089571/just-that-type"
                               tag="a"
                               target="_blank" rel="noopener noreferrer"
                >

                </ListGroupItem>
                <ListGroupItem className={"listen apple"}>

                </ListGroupItem>
                <ListGroupItem className={"listen amazon"}>

                </ListGroupItem>
                <ListGroupItem className={"listen tidal"}>

                </ListGroupItem>
            </ListGroup>
        </Card>

        </body>
        </html>


    )
}

export default Layout