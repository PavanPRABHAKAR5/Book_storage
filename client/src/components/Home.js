import React from 'react'
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Button
                    LinkComponent={Link}
                    to="/books"
                    sx={{ marginTop: 15, }}
                    variant="contained"
                >
                    <Typography variant="h3">View All products</Typography>
                </Button>
                <Typography sx={{margin: 15}}>
                    <p>Before the electronic era, everyday reading was a ritual that almost everyone who wanted to gain knowledge adapted. The benefits of reading needed not to be reminded all the time.
                        Amongst other things, we have been so preoccupied with social media and the internet that hardly anyone contemplates reading books. While some maybe too busy to read, others merely don’t care to read.</p>
                </Typography>
            </Box>
        </div>
    )
}

export default Home