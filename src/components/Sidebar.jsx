import {
    Box,
    Switch,
    List, ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import {
    Home,
    Group,
    SettingsRounded,
    StorefrontRounded,
    AccountBoxRounded,
    ArticleRounded,
    PersonRounded,
    ModeNightRounded,
} from '@mui/icons-material';

import * as React from 'react';

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box
            flex={1}
            p={2}
            sx={{
                display: {
                    xs: "none",
                    sm: "block",
                }
            }}>
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <ArticleRounded />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <StorefrontRounded />
                            </ListItemIcon>
                            <ListItemText primary="Marketplace" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <PersonRounded />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <SettingsRounded />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <AccountBoxRounded />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component="a" href='#simple-list'>
                            <ListItemIcon>
                                <ModeNightRounded />
                            </ListItemIcon>
                            <Switch onChange={
                                e => setMode(mode === "light" ? "dark" : "light")
                            } />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box >
    )
}


export default Sidebar