import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from '@mui/system';
import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, TextFields, VideoCameraBack } from '@mui/icons-material';

const StyledModal=styled(Modal)({
    display:"flex",alignItems:"center",
    justifyContent:"center"
})

const UserBox=styled(Box)({
    display:"flex",alignItems:"center"
})




const Add = () => {
    const [open,setOpen]=useState(false);
  return (
    <>
    <Tooltip title="Add" sx={{position:"fixed", bottom:20,left:{xs:"calc(50%-25px)" ,md:30}}} onClick={(e)=>setOpen(true)}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  
</Tooltip>
<StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={200} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>

    <Typography variant="h6" color="grey" textAlign={"center"}>

        Create Post
    </Typography>
    <UserBox>
        <Avatar src="https://media.licdn.com/dms/image/C5603AQE2zMtNtr6eFA/profile-displayphoto-shrink_800_800/0/1623492054611?e=1685577600&v=beta&t=TyBxOQMmEvnmSm7Xk1tnnwCv9-u63EKxUD0UiRCQR8k" sx={{width:30,height:30}}/>
        <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
    </UserBox>
    <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
   
  </Box>
  </StyledModal>
    
    </>
  )
}


export default Add;