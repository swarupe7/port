import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Feed = () => {
  return (
    <Box  flex={4} p={2}>

<Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://i2-prod.kentlive.news/incoming/article7310703.ece/ALTERNATES/s1200c/0_Johnny-Depp-spent-90-minutes-at-a-wildlife-centre-in-Tunbridge-Wells-and-now-the-details-of-his-visit-have-been.jpg'>
            R
          </Avatar>
        }
       
        title="Johnyy Depp"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2000%2F05%2F01%2F0867_180612_DuPree_MyRecipe_Traditional20Spanish20Paella_699620copy-2000.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src=''>
            K
          </Avatar>
        }
       
        title="kumar senthil"
        subheader="December 24, 2018"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://www.michaelgroupltd.com/wp-content/uploads/2017/07/film-directing.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        When someone mentions a film unit, most people think of location shooting—depending on their generation it’s either Robert Shaw duelling the shark off Martha’s Vineyard or John Wayne and the U.S. cavalry charging through Death Valley! But, in fact, most major films are made in a series of predictable phases, of which shooting is only one.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmUOnIWei21lszkUqizULUCle57RK2mN1mA&usqp=CAU'>
            R
          </Avatar>
        }
       
        title="Miss Mia"
        subheader="November 14, 2013"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://hips.hearstapps.com/hmg-prod/images/beach-quotes-1559667853.jpg?crop=1.00xw:0.753xh;0,0.201xh&resize=1200:*"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        When summertime rolls in and the days get hot enough that you need to cool off from the blazing heat, nothing beats packing up and heading to the beach for a day spent along the ocean shore. It’s a summer adventure that never fails to yield tons of fun
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8mHp7li8rIz6kWDKvvgEa88M3NsjZ6Rk5g&usqp=CAU'>
            R
          </Avatar>
        }
       
        title="Rashid Bhai"
        subheader="January 4, 2021"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://www.holidify.com/images/cmsuploads/articles/319.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Habibbi , Come To Dubai 🥳🥳🥳
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/vgm3jn4xf6mmsanreyjc.webp'>
            R
          </Avatar>
        }
       
        title="Rome Tourism"
        subheader="September 15, 2021"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://images.pexels.com/photos/14700009/pexels-photo-14700009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named .. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://material-ui.com/static/images/avatar/3.jpg'>
            R
          </Avatar>
        }
       
        title="Jessica linen"
        subheader="November 29, 2019"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://www.godominicanrepublic.com/wp-content/uploads/2019/11/coco-bongo-last-party-of-the-year.jpg?x41638"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Get ready for a different and unique party at Coco Bongo Punta Cana on December 28th. The last but not least party of the year. This party is the perfect warm up for New Year’s Eve with incredible light bracelets, so you can dance the night away
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://material-ui.com/static/images/avatar/2.jpg'>
            R
          </Avatar>
        }
       
        title="Neel Karlson"
        subheader="October 1, 2012"
      />
      <CardMedia
        component="img"
        height="52%"
        image="https://cdn.mos.cms.futurecdn.net/D9ivxrBX6SGyVFgPq5hSXm-970-80.jpg.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Hiking is a shorter, easier journey, commonly walked on looped marked trails, to-and-back, or even destination hikes. Trekking always involves a specific destination. A trekking path goes through different
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>

    </Card>



    </Box>
  )
}

export default Feed