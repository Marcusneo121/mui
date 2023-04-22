import { Pets, MailRounded, NotificationsRounded } from '@mui/icons-material'
import { Box, AppBar, Toolbar, Typography, styled, InputBase, Badge, Avatar } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Search = styled("div")(
    ({ theme }) => ({
        backgroundColor: 'white',
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%",
    })
);

const Icons = styled(Box)(
    ({ theme }) => ({
        display: 'none',
        alignItems: 'center',
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        }
    })
);

const Userbox = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: "10px",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    })
);

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    LAMA DEV
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
                <Search><InputBase placeholder='search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailRounded />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsRounded />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <Userbox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <Typography variant='span'>John</Typography>
                </Userbox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar