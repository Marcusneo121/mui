import {
    Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem,
    List, ListItem, Divider, ListItemText, ListItemAvatar,
} from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{
            display: {
                xs: "none",
                sm: "block",
            }
        }}>
            <Box position="fixed" width={350}>
                <Typography variant='h6' fontWeight={100} >Online Friends</Typography>
                <AvatarGroup max={8}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3099153/pexels-photo-3099153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/7763201/pexels-photo-7763201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/16022624/pexels-photo-16022624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/13984616/pexels-photo-13984616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/4728655/pexels-photo-4728655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/7763201/pexels-photo-7763201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/16022624/pexels-photo-16022624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} gap={8} variant='mansory'>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/13235422/pexels-photo-13235422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/8551382/pexels-photo-8551382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/1119114/pexels-photo-1119114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={3}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box >
    )
}

export default Rightbar