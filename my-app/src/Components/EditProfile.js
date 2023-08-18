import React, {useState, useEffect} from "react"
import { Link, Box, TextField, Button, Container, Grid, Typography, Alert, Paper } from "@mui/material"

function EditProfile(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [nric, setNRIC] = useState("")
    const [address, setAddress] = useState("")
    const [dob, setDOB] = useState("")
    const [contactNumber, setContactNumber] = useState("")

    const [updateStatus, setUpdateStatus] = useState(false)

    useEffect(()=>{
        let currUser = localStorage.getItem("Current User")
        let userInfo = JSON.parse(localStorage.getItem(currUser))
        setEmail(userInfo.email)
        setPassword(userInfo.password)
        setFirstName(userInfo.firstName)
        setLastName(userInfo.lastName)
        setNRIC(userInfo.nric)
        setAddress(userInfo.address)
        setDOB(userInfo.dob)
        setContactNumber(userInfo.contactNumber)
    }, [])

    const handleRegister = (e) => {
        e.preventDefault();
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
        setUpdateStatus(true)
    }

    return(
        <>
         <Container>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection = "column"
            >
                <Paper elevation={24} variant="elevation" sx={{ mt:3, my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            
                <Typography component="h1" variant="h4" sx={{ mb: 5, mt:3 }} >
                    Edit Profile
                </Typography>

                {updateStatus && <Alert sx={{ mb: 5, width:"100%" }} onClose={() => {setUpdateStatus(false)}}>Profile Updated!</Alert>}
                {/* <Box
                    component="img"
                    sx={{
                        maxHeight: { xs: 150, sm: 180, md: 200, lg: 230, xl: 300 },
                        maxWidth: { xs: 150, sm: 180, md: 200, lg: 230, xl: 300 }
                    }}
                    alt="logo"
                    src={ logo }
                /> */}
                <form onSubmit={handleRegister}>
                    <Grid container spacing={2}>
                       
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
                        <Grid item xs={6}>              
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
                        <Grid item xs={6}>              
                        <TextField
                       
                                id="dob "
                                name="dob"
                                label = "Date of Birth"
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
                    </Grid>           
                    <Button type="submit" id="loginBtn" variant="contained" fullWidth={true} sx={{mb: 3 }}>Update Profile</Button>            
                </form> 
                </Paper>
            </Box>
            </Container>
            
        </>
    )

}
export default EditProfile;