import React from 'react'
import { Grid, Button, Box, Typography, Card, CardContent,CardActions, CardMedia, Container, Link, Chip } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';
import myteam from '../images/image2.png';
import NationalSavings from '../images/national-savings.jpg';
import MightyFX from '../images/mighty-fx.jpg';
import NDP from '../images/ndp.png';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import { ReactComponent as Facebook } from "../images/facebook.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Youtube } from "../images/youtube.svg";

function HomePage(){
    const styles = {
       
        maincolor: {
            color: "#00237B"
        },
        chip:{
            border: "2px solid #00237B",
            padding: '8px', // Adjust the padding to change the badge size
            fontSize: "16px",
            cursor: 'pointer',
        },
    }

    return(
        
        <>
        {/* top     */}
        <Box >
            <Grid container>
                <Grid item xs={7}>
                    <Box sx={{p:10}}>
                        <Typography variant="h2" sx={{fontWeight:"bold"}} style={styles.maincolor}>
                        Transaction anytime anywhere
                        </Typography>
                        <Typography variant="h6">
                        Experience the power of modern banking, where technology meets financial management, all within the convenience of our website's digital framework.
                        </Typography>
                        <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: '200px', fontSize: '16px', mt:2 }}
                        >
                        JOIN US
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={5} >
                    <img src={myteam} alt="Mobile" width={500} height={500}/>
                </Grid>
            </Grid>
        </Box>
        
        {/* promotions */}
        <Box sx={{m:4}}>
            <Typography variant="h4" sx={{mb:2}} style={styles.maincolor} align="Center">Promotions</Typography>
            <Grid container spacing={3} >
                {/* First Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={NationalSavings}
                    />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>National Savings Promotion</Typography>
                            <Typography>Celebrate the nation’s 58th birthday with us! Power up your savings with up to S$1,558 guaranteed cash. Simply top up an eligible UOB savings account and participate now. Plus, you could be one of 58 to win a BreadTalk Rewards Card with stored value of S$200 to pay for your purchases at BreadTalk and Toast Box to fuel your mornings throughout the year! </Typography>
                            {/* Other content */}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid>
                
                {/* Second Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                        <CardMedia
                                component="img"
                                height="400"
                                image={MightyFX}
                            />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>Ready, Get Set, Convert!</Typography>
                            {/* Other content */}
                    
                            <Typography>
                            From now until 31 August 2023, enjoy zero conversion fee on all currencies on Mighty FX. Convert from SGD to any of the 10 foreign currencies or between foreign currencies on Mighty FX.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
                {/* Third Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                        <CardMedia
                            component="img"
                            height="400"
                            
                            image={NDP}
                        />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>Celebrate 58 glorious years</Typography>
                            <Typography>Get S$5.80 cashback on ComfortDelGro Taxi rides and S$58 cash when you apply for a UOB savings account online. T&Cs apply.</Typography>
                            {/* Other content */}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{m:4}}>
            <Typography variant="h4" sx={{mb:2}} style={styles.maincolor} align="Center">Products</Typography>
            <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
                <Chip label="All" sx={{backgroundColor: '#00237B', color:"#fff"}} style={styles.chip}/>
                <Chip label="Cards" style={styles.chip}  sx={{backgroundColor: '#fff', color:"#00237B"}}/>
                <Chip label="Digital Banking" style={styles.chip} sx={{backgroundColor: '#fff', color:"#00237B"}}/>
                <Chip label="Save"style={styles.chip} sx={{backgroundColor: '#fff', color:"#00237B"}}/>
                <Chip label="Invest"  style={styles.chip} sx={{backgroundColor: '#fff', color:"#00237B"}}/>
                <Chip label="Borrow"  style={styles.chip} sx={{backgroundColor: '#fff', color:"#00237B"}}/>
            </Box>

            <Box sx={{m:2}}>
            
            <Grid container spacing={3} >
                {/* First Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={card1}
                    />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>Get S$500 worth of Grab vouchers* with UOB EVOL Card. Apply now.</Typography>
                            <Typography>What’s more, own every evolution with 8% cashback on online and mobile contactless spend.</Typography>
                            {/* Other content */}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card> 
                </Grid>
                
                {/* Second Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                        <CardMedia
                                component="img"
                                height="400"
                                image={card2}
                            />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>Sustainable Investing</Typography>
                            {/* Other content */}
                    
                            <Typography>
                            With sustainable investments, build a portfolio that creates a positive impact on the environment and society
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
                {/* Third Card */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{height: '100%'}}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={card3}
                        />
                        <CardContent>
                            <Typography variant="h5"sx={{fontWeight:"bold"}} style={styles.maincolor}>One Account</Typography>
                            <Typography>Get the highest interest rate ever on your savings with One Account – now up to 7.8% p.a. in just 2 steps.</Typography>
                            {/* Other content */}
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
            
        </Box>

        {/* Footer */}
        <Box sx={{ p: 5, color:"white", background: "#00237B"}}>
       
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
             We are your trusted partner in financial management. Our banking app is designed to simplify your financial journey and empower you with the tools you need to achieve your financial goals. 
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
                Raffles Pl, #01-16 One Raffles Place Tower 1, Singapore 048616
            </Typography>
            <Typography variant="body2" >
              Email: hello@bankX.com
            </Typography>
            <Typography variant="body2">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6"  gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
                <Facebook/>
            </Link>
            <Link href="https://www.linkedin.com/" color="inherit">
                <Linkedin />
            </Link>
            <Link href="https://www.youtube.com/" color="inherit">
                <Youtube/>
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
    
    </Box>
           

        
   
        
    </>
    )

}
export default HomePage;