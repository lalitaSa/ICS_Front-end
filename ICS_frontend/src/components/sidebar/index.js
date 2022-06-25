import {
    ModeNight,

  } from "@mui/icons-material";
  import ListAltIcon from '@mui/icons-material/ListAlt';
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Switch,
  } from "@mui/material";
  import React from "react";
  import './index.css'
  
  export default function Sidebar() {
    return (
      // <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
        <Box position="fixed" sx={{width:"60px", height:"900px", 
        boxShadow:'0px 10px 10px', borderRadius:'0px 50px 50px 0px',top:'10%'}}>
          <List sx={{color:"#0F1E56"}}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon sx={{background:"#0F1E56", color:"#fff", borderRadius:"5px"}}>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Place" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      // </Box>
    );
  };
  
