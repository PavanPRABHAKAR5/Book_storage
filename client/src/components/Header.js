import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {NavLink} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState()
    return (
        <>
            <AppBar sx={{backgroundColor: "Skyblue"}} position='sticky'>
                <Toolbar>
                    <Typography>
                        <AutoStoriesIcon />
                    </Typography>
                    <Tabs sx={{ml:"auto"}} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" label="Add product" />
                        <Tab LinkComponent={NavLink} to="/books" label ="Books"/>
                        <Tab LinkComponent={NavLink} to="/about" label ="About Us"/>
                        
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header