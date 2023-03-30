import { AppBar,Avatar,Badge,Box,InputBase,Menu,MenuItem,styled, Toolbar, Typography } from '@mui/material'
import {Mail, Notifications} from '@mui/icons-material'

import PetsIcon from '@mui/icons-material/Pets';
import React,{useState} from 'react'
const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})

const Search=styled("div")(({theme})=>({backgroundColor:"white",padding:"0 10px",borderRadius:"10px",width:"40%"}))
const Icons=styled(Box)(({theme})=>({display:"none",alignItems:"center",gap:"15px",[theme.breakpoints.up("sm")]:{
  display:"flex"
}}))
const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))
const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (

    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
        Nosebook
        </Typography>
         <PetsIcon sx={{display:{xs:"block",sm:"none"}}}  />
         <Search> <InputBase sx={{color:'black'}} placeholder='Search Here...'/> </Search>
         <Icons>
         <Badge badgeContent={4} color="error">
  <Mail />
</Badge>

<Badge badgeContent={16} color="error">
  <Notifications />
</Badge>

  
<Badge  onClick={(e)=>setOpen(true)}>

<Avatar sx={{height:30, width:30}} src="https://media.licdn.com/dms/image/C5603AQE2zMtNtr6eFA/profile-displayphoto-shrink_800_800/0/1623492054611?e=1685577600&v=beta&t=TyBxOQMmEvnmSm7Xk1tnnwCv9-u63EKxUD0UiRCQR8k" />
</Badge>

         </Icons>

      <UserBox  onClick={(e)=>setOpen(true)}>

      <Avatar sx={{height:30, width:30}} src="https://media.licdn.com/dms/image/C5603AQE2zMtNtr6eFA/profile-displayphoto-shrink_800_800/0/1623492054611?e=1685577600&v=beta&t=TyBxOQMmEvnmSm7Xk1tnnwCv9-u63EKxUD0UiRCQR8k" />
      <Typography>
        John
      </Typography>

      </UserBox>


        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'rightt',
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