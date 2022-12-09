import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Box position="fixed" bottom={0}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}

                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    )
}
export default Footer