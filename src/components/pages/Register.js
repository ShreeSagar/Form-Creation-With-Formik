import React from 'react';
import * as Yup from 'yup';
import { Formik,Field } from 'formik';
import {
  Button,
  Checkbox,
  Container,
  Radio,
  TextField,
  Typography
} from '@material-ui/core';

const Register=()=>{
    return(
        <>
        <Container>
            <Formik
            initialValues={{
                fullName: '',
                email: '',
                password:'',
                phoneNo:'',
                address:'',
                birthDate:'',
                gender:'',
                hobbies:[]
              }}
              onSubmit={(values, {setSubmitting})=>{
                setSubmitting(true);
                //make async call
                alert("Data Submitted..");
                setSubmitting(false);
            }}
              validationSchema={
                Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  fullName: Yup.string().max(255).required('Full name is required'),
                  password: Yup.string().max(255).required('Password is required'),
                  birthDate: Yup.date().required('Date Required')
                })
              }
            >
              {({values, handleBlur, handleChange, handleSubmit, isSubmitting, errors, touched}) => (
              <form onSubmit={handleSubmit}>
                  <Typography color="textPrimary" variant="h4" align="center" style={{marginTop:"40px", marginBottom:"40px",fontStyle:"italic"}}>
                    USER REGISTRATION
                  </Typography>
                  <div>
                  <center>
                  <TextField
                  error={Boolean(touched.fullName && errors.fullName)}
                  style={{width:"75%"}}
                  helperText={touched.fullName && errors.fullName}
                  label="Full Name"
                  margin="normal"
                  name="fullName"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fullName}
                  variant="outlined"
                /><br/>
                
                  <TextField
                  error={Boolean(touched.email && errors.email)}
                  style={{width:"75%"}}
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  variant="outlined"
                /><br/>

                 <TextField
                  error={Boolean(touched.password && errors.password)}
                  style={{width:"75%"}}
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  variant="outlined"
                /><br/>

                  <TextField
                  style={{width:"75%"}}
                  label="Phone Number"
                  margin="normal"
                  name="phoneNo"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneno}
                  variant="outlined"
                /><br/>

                  <TextField
                   style={{width:"75%"}}
                  label="Address"
                  margin="normal"
                  name="address"
                  multiline
                  rows={4}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  variant="outlined"
                /><br/>
              
                  <TextField
                  error={Boolean(touched.birthDate && errors.birthDate)}
                  style={{width:"75%"}}
                  helperText={touched.birthDate && errors.birthDate}
                  label="Date Of Birth"
                  margin="normal"
                  name="birthDate"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.birthDate}
                  variant="outlined"
                /><br/><br/>

                <span>
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    as={Radio}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    defaultChecked={values.gender=== "Male"}
                    style={{marginLeft:'10px'}}
                  /><label  style={{marginRight:'20px'}}>Male</label>
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    as={Radio}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    defaultChecked={values.gender=== "Female"}
                  /><label  style={{marginRight:'20px'}}>Female</label>
                </span><br/><br/>

                <sapn>
                  <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Painting"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label style={{marginRight:'120px'}}>Painting</label>
                  <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Dancing"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label  style={{marginRight:'100px'}}>Dancing</label>
                  <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Singing"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label  style={{marginRight:'10px'}}>Singing</label>
                </sapn><br/>
                <span>
                <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Listening to Music"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label  style={{marginRight:'50px'}}>Listening to Music</label>
                  <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Reading Books"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label  style={{marginRight:'50px'}}>Reading Books</label>
                  <Checkbox
                   name="hobbies"
                   type="checkbox"
                   value="Sports"
                   onBlur={handleBlur}
                   onChange={handleChange}
                  /><label  style={{marginRight:'10px'}}>Sports</label>
                </span><br/><br/>

                <Button
                    color="primary"
                    disabled={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Register
                  </Button><br/><br/>
                  </center>
                  </div>
                  <pre>
                     {JSON.stringify(values, null, 2)}
                  </pre>
              </form>
            )}
            </Formik>
        </Container>
        </>
    )
}
export default Register;