import React from 'react'
import Head from "next/head"
import { AppBar, Toolbar, Typography, Container } from "@mui/material"

function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Shop Swift</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography >ShopSwift
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    @All Rights Reserved. Shop Swift 2022 
                </Typography>
            </footer>
        </div>

    )
}

export default Layout
