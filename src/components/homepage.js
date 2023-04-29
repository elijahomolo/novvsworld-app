import * as React from 'react'
import "./layout.module.css";
import Navigation from "./navbar";
import Top from "./top";
import Mid from "./mid"
import Third from "./third";
import Fourth from "./fourth"
import {Container} from "reactstrap";


const HomePage = () => {
    return (

        <body>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossOrigin="anonymous"></script>

        <Navigation></Navigation>
        <Top></Top>
        <Mid></Mid>
        <Third></Third>
        <Fourth></Fourth>



        </body>


    )
}

export default HomePage