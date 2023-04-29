import * as React from 'react'
import "./layout.module.css";

import HomePage from "./homepage";


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

        <HomePage>
        </HomePage>


    </html>


    )
}

export default Layout