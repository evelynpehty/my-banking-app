import React, {useState} from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { Link, Box, TextField, Button, Container, Grid, Typography, Paper } from "@mui/material"
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Bank.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function Checkout() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [reEnterPassword, setReEnterPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nric, setNRIC] = useState("")
    const [address, setAddress] = useState("")
    const [dob, setDOB] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [errorM, setErrorM] = useState([]);
    const [errorStatus, setErrorStatus] = useState(false)
    


    const handleRegister = () => {
       
        const validationError = []

        if(localStorage.getItem(email) !== null){
            setErrorStatus(true)
            validationError.push("email existed")
        }

        if(password !== reEnterPassword){  
            setErrorStatus(true)
            validationError.push("password does not match")
        }

        setErrorM(validationError)
        
        if(validationError.length === 0){    
            let value = {
                "email": email,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "nric": nric, 
                "address": address,
                "dob": dob,
                "contactNumber": contactNumber
            }    
            localStorage.setItem(email, JSON.stringify(value))
            navigate("/Login")
        } 
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection = "column"
            >
        <Paper elevation={24} variant="elevation" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" sx={{ mb: 3, color:"#00237B", fontWeight: "bold" }}>
                    Register
            </Typography>

          <form> 
                {errorM.length > 0 && (
                <Box  sx={{ mb: 5, color: "red" }}>
                    <h2>Error:</h2>
                    <ul >
                    {errorM.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                    </ul>
                </Box>
                )}
                
                    <Grid container spacing={2}>
                        <Grid item xs={12}>             
                            <TextField
                                required
                                id="email"
                                name='email'
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                                />    
                        </Grid>
                        <Grid item xs={12}>              
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                type="password"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12}>              
                            <TextField
                                required
                                id="reEnterPassword"
                                name="reEnterPassword"
                                label="Re-Enter Password"
                                value={reEnterPassword}
                                onChange={(e)=>setReEnterPassword(e.target.value)}
                                type="password"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={6}>              
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                type="text"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={6}>              
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                type="text"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={6}>              
                        <TextField
                                label = "Date Of Birth"
                                value={dob}
                                onChange={(e)=>setDOB(e.target.value)}
                                type="date"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />

                        </Grid>
                        <Grid item xs={6}>              
                            <TextField
                                id="contactNumber"
                                name="contactNumber"
                                label="Contact Number"
                                value={contactNumber}
                                onChange={(e)=>setContactNumber(e.target.value)}
                                type="number"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12}>              
                            <TextField
                                id="nric"
                                name="nric"
                                label="NRIC"
                                value={nric}
                                onChange={(e)=>setNRIC(e.target.value)}
                                type="text"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                        <Grid item xs={12}>              
                            <TextField
                                id="address"
                                name="address"
                                label="Address"
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                type="text"
                                fullWidth={ true }
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                    
                    </Grid>           
                    <Button type="button" id="register" onClick={handleRegister} variant="contained" fullWidth={true} sx={{mb: 3 }}>Register</Button>   
                          
                </form> 
            
        </Paper>
        <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}