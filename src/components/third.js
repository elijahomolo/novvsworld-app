import React, { useState } from 'react';
import  './third.css'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    CardGroup,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ListGroup,
    ListGroupItem,
    CardHeader,
    CardLink,
    Collapse,
    CardFooter, Container,
} from 'reactstrap';
import {text} from "@fortawesome/fontawesome-svg-core";

function Third( ...args) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };



    return(
        <div className="top-content third-background" id={"music"}>
                        <h1 tag="h1" className={"text"}>Music</h1>
                        <CardGroup>
                            <Card className="border-3 music-card" >
                                <CardImg
                                    alt="Card image cap"
                                    src="https://novvsworld.s3.amazonaws.com/images/Just+that+type+cover.jpg"
                                    top
                                    width="60%"
                                    height="60%"
                                />
                                <CardBody className="link">

                                    <CardTitle className="link" tag="h5">
                                        Just.That.Type
                                    </CardTitle>
                                </CardBody>
                                <CardBody className="link">
                                <Accordion tag="div" flush open={open} toggle={toggle}>

                                            <AccordionItem tag="div" className="link" >
                                                <AccordionHeader className="link"  targetId="1">Listen</AccordionHeader>
                                                <AccordionBody className="link"  accordionId="1">
                                                    <ListGroup flush>
                                                        <ListGroupItem className={"listen soundcloud"}
                                                            action
                                                            href="https://soundcloud.com/user-283089571/just-that-type"
                                                            tag="a"
                                                            target="_blank" rel="noopener noreferrer"
                                                        >
                                                        </ListGroupItem>
                                                        <ListGroupItem className={"listen bandcamp"}
                                                                       action
                                                                       href="https://novv.bandcamp.com/track/just-that-type"
                                                                       tag="a"
                                                                       target="_blank" rel="noopener noreferrer"
                                                        >
                                                        </ListGroupItem>
                                                    </ListGroup>

                                            </AccordionBody>

                                            </AccordionItem>

                                        </Accordion>
                                </CardBody>
                            </Card>




                            <Card className="border-3 music-card ">
                                <CardImg
                                    alt="Card image cap"
                                    src="https://novvsworld.s3.amazonaws.com/images/beforeweproceed.png"
                                    top
                                    width="100%"
                                    height="100%"
                                />
                                <CardBody className="link">

                                    <CardTitle className={"text"} tag="h5">
                                        Before We Proceed
                                    </CardTitle>
                                </CardBody>
                                <CardBody className="link" >
                                    <Accordion tag="div" flush open={open} toggle={toggle} >

                                        <AccordionItem >
                                            <AccordionHeader   targetId="2">Listen</AccordionHeader>
                                            <AccordionBody  accordionId="2">
                                                <ListGroup flush className="card2">
                                                    <ListGroupItem className={"listen soundcloud "}
                                                                   action
                                                                   href="https://soundcloud.com/ayenovv/sets/before-we-proceed"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer"
                                                    >
                                                    </ListGroupItem>
                                                    <ListGroupItem className={"listen bandcamp"}
                                                                   action
                                                                   href="https://novv.bandcamp.com/album/before-we-proceed"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer">
                                                    </ListGroupItem>
                                                </ListGroup>

                                            </AccordionBody>

                                        </AccordionItem>

                                    </Accordion>
                                </CardBody>

                            </Card>

                            <Card className=" border-3 music-card">
                                <CardImg
                                    alt="Card image cap"
                                    src="https://novvsworld.s3.amazonaws.com/images/original+kaymist+cropped+revised+22-min.png"
                                    top
                                    width="100%"
                                    height="100%"
                                />
                                <CardBody className="link">

                                    <CardTitle className={"text"} tag="h5">
                                        The Pregame
                                    </CardTitle>
                                </CardBody>
                                <CardBody className="link">

                                    <Accordion  flush open={open} toggle={toggle}>
                                        <AccordionItem  >
                                            <AccordionHeader targetId="3">Listen</AccordionHeader>
                                            <AccordionBody  accordionId="3">
                                                <ListGroup flush>
                                                    <ListGroupItem className={"listen spotify"}
                                                        action
                                                        href="https://soundcloud.com/user-283089571/just-that-type"
                                                        tag="a"
                                                        target="_blank" rel="noopener noreferrer"
                                                    >
                                                    </ListGroupItem>
                                                    <ListGroupItem className={"listen apple"}
                                                                   action
                                                                   href="https://music.apple.com/us/album/the-pregame/1572006219"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer">

                                                    </ListGroupItem>
                                                    <ListGroupItem className={"listen amazon"}
                                                                   action
                                                                   href="https://music.amazon.com/albums/B0973N3W8V"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer">

                                                    </ListGroupItem>
                                                    <ListGroupItem className={"listen tidal"}
                                                                   action
                                                                   href="https://tidal.com/"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer">

                                                    </ListGroupItem>

                                                    <ListGroupItem className={"listen soundcloud"}
                                                                   action
                                                                   href="https://soundcloud.com/ayenovv/sets/the-pregame"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer">
                                                    </ListGroupItem>

                                                    <ListGroupItem className={"listen bandcamp"}
                                                                   action
                                                                   href="https://novv.bandcamp.com/album/the-pregame"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer"
                                                    >
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>


                                    <Accordion tag="div" flush open={open} toggle={toggle}>
                                        <AccordionItem tag="div" className="link" >
                                            <AccordionHeader className="link"  targetId="4">Purchase</AccordionHeader>
                                            <AccordionBody className="link"  accordionId="4">
                                                <ListGroup flush>
                                                    <ListGroupItem className={"listen apple"}
                                                                   action
                                                                   href="https://music.apple.com/us/album/the-pregame/1572006219"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer"
                                                    >
                                                    </ListGroupItem>
                                                    <ListGroupItem className={"listen amazon"}
                                                                   action
                                                                   href="https://www.amazon.com/music/player/albums/B0973N3W8V"
                                                                   tag="a"
                                                                   target="_blank" rel="noopener noreferrer"
                                                    >
                                                    </ListGroupItem>
                                                </ListGroup>
                                            </AccordionBody>
                                        </AccordionItem>
                                    </Accordion>

                                </CardBody>

                            </Card>
                        </CardGroup>


        </div>
    );
}

export default Third