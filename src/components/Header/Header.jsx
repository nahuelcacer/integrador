import { AppBar, Typography } from "@mui/material"


const Header =()=>{
    return (
        <AppBar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, m:1 }}>
                News
            </Typography>
        </AppBar>
    )
}
export default Header
