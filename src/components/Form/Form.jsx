import React from 'react'
import { FormControl, Input, InputLabel, TextField } from '@mui/material';

const Form = () => {
  return (
    <section>
        <section>
            <h1>OFF THE TOP LOGO</h1>
        </section>
        <FormControl>
            <InputLabel>Company Information</InputLabel>
            <Input placeholder='Company Name'></Input>
            <Input placeholder='BIN/EIN'></Input>
            <Input placeholder='Company Logo URL (optional)'></Input>
            <Input placeholder='Customize web address'></Input>
            <p>Your domain will be seen as <strong>www.off-the-top.io/companyName</strong></p>

            <InputLabel>Company Address</InputLabel>
            <Input placeholder='Company Name'></Input>
            <Input placeholder='BIN/EIN'></Input>
            <Input placeholder='Company Logo URL (optional)'></Input>
            <Input placeholder='Customize web address'></Input>
            <p>Your domain will be seen as <strong>www.off-the-top.io/companyName</strong></p>
        </FormControl>
    </section>
  )
}

export default Form