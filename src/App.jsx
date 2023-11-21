import React, { useState } from 'react';
import './App.css';
import {
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00488A', // Establece el color principal a #00488A
    },
    // Otros colores según sea necesario
  },
});

const App = () => {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    binEin: '',
    companyLogoUrl: '',
    customizeWebAddress: '',
  });
  const [companyAddress, setCompanyAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    country: '',
    stateProvince: '',
    city: '',
    zipcode: '',
  });
  const [emailDomains, setEmailDomains] = useState(['']);
  const [admins, setAdmins] = useState([{ firstName: '', lastName: '', email: '', phoneNumber: '' }]);

  const isValidUrl = (url) => {
    const extensionPattern = /\.[^.]+$/;

    return extensionPattern.test(url);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleCompanyInfoChange = (field, value) => {
    setCompanyInfo({ ...companyInfo, [field]: value });
  };

  const handleCompanyAddressChange = (field, value) => {
    setCompanyAddress({ ...companyAddress, [field]: value });
  };

  const handleEmailDomainChange = (index, value) => {
    const updatedDomains = [...emailDomains];
    updatedDomains[index] = value;
    setEmailDomains(updatedDomains);
  };

  const handleAddDomain = () => {
    setEmailDomains([...emailDomains, '']);
  };

  const handleAdminChange = (index, field, value) => {
    const updatedAdmins = [...admins];
    updatedAdmins[index][field] = value;
    setAdmins(updatedAdmins);
  };

  const handleAddAdmin = () => {
    setAdmins([...admins, { firstName: '', lastName: '', email: '', phoneNumber: '' }]);
  };

  const isValidForm = () => {
    if (!isValidUrl(companyInfo.customizeWebAddress)) {
      return false;
    }
    for (const domain of emailDomains) {
      if (!isValidUrl(domain)) {
        return false;
      }
    }
    for (const admin of admins) {
      if (!isValidEmail(admin.email)) {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      console.log('Datos enviados:', { companyInfo, companyAddress, emailDomains, admins });
      setAdmins([{ firstName: '', lastName: '', email: '', phoneNumber: '' }]);
      setCompanyAddress({
        addressLine1: '',
        addressLine2: '',
        country: '',
        stateProvince: '',
        city: '',
        zipcode: '',
      });
      setCompanyInfo({
        companyName: '',
        binEin: '',
        companyLogoUrl: '',
        customizeWebAddress: '',
      });
      setEmailDomains(['']);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{display: 'flex', flexDirection: 'column', height:'100vh'}}>
        <Grid container sx={{ height: '100vh', alignItems: 'center', alignItems:'stretch' , margin: '0'}}>
          {/* Left Component */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', background: 'linear-gradient(151deg, #012C53 4.14%, #00488A 51.59%, rgba(0, 145, 190, 0.98) 102.85%)', padding:'10px' }}>
            <Typography variant="h3" className='title' sx={{textAlign: 'center', margin: '0 50px', color:'#FFF', fontWeight:'bold'}}>OFF THE TOP LOGO</Typography>
          </Grid>

          {/* Right Component */}
          <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', marginTop:'50px', padding:'0 20px'}}>
            <Typography variant='body2'><Link color="#000">Home</Link> / Create Account</Typography>
            <Grid container sx={{alignItems:'center', justifyContent:"center", flexDirection: 'column', margin:'50px 0'}}>
              <Typography variant="h4" sx={{textAlign: 'center'}}>Create an account</Typography>
              <Typography variant="subtitle1" sx={{textAlign: 'center'}}>Create an account and start making a difference today.</Typography>
              <Grid item md={7}>
                <form onSubmit={handleSubmit} md={6}>
                  <Typography variant="h5" sx={{ mt: 3, fontSize:'22px' }}>
                    Company Information
                  </Typography>
                  <TextField
                    required
                    label="Company Name"
                    variant="outlined"
                    fullWidth
                    value={companyInfo.companyName}
                    onChange={(e) => handleCompanyInfoChange('companyName', e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    required
                    label="BIN/EIN"
                    variant="outlined"
                    fullWidth
                    value={companyInfo.binEin}
                    onChange={(e) => handleCompanyInfoChange('binEin', e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Company Logo URL (optional)"
                    variant="outlined"
                    fullWidth
                    value={companyInfo.companyLogoUrl}
                    onChange={(e) => handleCompanyInfoChange('companyLogoUrl', e.target.value)}
                    error={companyInfo.companyLogoUrl !== '' && !isValidUrl(companyInfo.companyLogoUrl)}
                    helperText={companyInfo.companyLogoUrl !== '' && !isValidUrl(companyInfo.companyLogoUrl) ? "Invalid Logo URL" : ''}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    required
                    label="Customize web address"
                    variant="outlined"
                    fullWidth
                    value={companyInfo.customizeWebAddress}
                    onChange={(e) => handleCompanyInfoChange('customizeWebAddress', e.target.value)}
                    error={companyInfo.customizeWebAddress !== '' && !isValidUrl(companyInfo.customizeWebAddress)}
                    helperText={companyInfo.customizeWebAddress !== '' && !isValidUrl(companyInfo.customizeWebAddress) ? "Invalid Web Address" : ''}
                    sx={{ mt: 2 }}
                  />
                  <Typography variant="p" sx={{ m: 3, fontSize:'12px'  }}>
                    Your Domain will be seen as <strong>www.off-the-top.io/companyname</strong>
                  </Typography>

                  <Typography variant="h5" sx={{ mt: 3, fontSize:'22px'  }}>
                    Company Address
                  </Typography>
                    
                  <TextField
                    required
                    label="Address Line 1"
                    variant="outlined"
                    fullWidth
                    value={companyAddress.addressLine1}
                    onChange={(e) => handleCompanyAddressChange('addressLine1', e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    label="Address Line 2"
                    variant="outlined"
                    fullWidth
                    value={companyAddress.addressLine2}
                    onChange={(e) => handleCompanyAddressChange('addressLine2', e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <FormControl fullWidth sx={{marginTop:'16px'}}>
                    <InputLabel>Country</InputLabel>
                    <Select
                      required
                      label="Country"
                      value={companyAddress.country}
                      onChange={(e) => handleCompanyAddressChange('country', e.target.value)}
                    >
                      <MenuItem value="usa">USA</MenuItem>
                      <MenuItem value="canada">Canada</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{marginTop:'16px'}}>
                    <InputLabel>State/Province</InputLabel>
                    <Select
                      required
                      label="State"
                      value={companyAddress.state}
                      onChange={(e) => handleCompanyAddressChange('stateProvince', e.target.value)}
                    >
                      <MenuItem value="california">California</MenuItem>
                      <MenuItem value="alabama">Alabama</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    label="City"
                    variant="outlined"
                    fullWidth
                    value={companyAddress.city}
                    onChange={(e) => handleCompanyAddressChange('city', e.target.value)}
                    sx={{ mt: 2 }}
                  />
                  <TextField
                    required
                    label="ZipCode"
                    variant="outlined"
                    fullWidth
                    value={companyAddress.zipcode}
                    onChange={(e) => handleCompanyAddressChange('zipcode', e.target.value)}
                    sx={{ mt: 2 }}
                  />

                  <Typography variant="h5" sx={{ mt: 3, fontSize:'22px'  }}>
                    Email Domains
                  </Typography>
                  {emailDomains.map((domain, index) => (
                    <div key={index}>
                      <TextField
                        required
                        label="Domain"
                        variant="outlined"
                        fullWidth
                        value={domain}
                        onChange={(e) => handleEmailDomainChange(index, e.target.value)}
                        error={domain !== '' && !isValidUrl(domain)}
                        helperText={domain !== '' && !isValidUrl(domain) ? "Invalid Domain" : ''}
                        sx={{ mt: 2 }}
                      />
                    </div>
                  ))}
                  <Button variant="outlined" color="primary" onClick={handleAddDomain} sx={{ mt: 2 }}>
                    + Add Domain
                  </Button>

                  <Typography variant="h5" sx={{ mt: 3 }}>
                    Admin Information
                  </Typography>
                  {admins.map((_, index)=>{
                    return(
                  <div key={index}>
                    <TextField
                      required
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      value={admins[index].firstName}
                      onChange={(e) => handleAdminChange(index, 'firstName', e.target.value)}
                      sx={{ mt: 2 }}
                    />
                    <TextField
                      required
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      value={admins[index].lastName}
                      onChange={(e) => handleAdminChange(index, 'lastName', e.target.value)}
                      sx={{ mt: 2 }}
                    />
                    <TextField
                      required
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={admins[index].email}
                      onChange={(e) => handleAdminChange(index, 'email', e.target.value)}
                      error={admins[index].email !== '' && !isValidEmail(admins[index].email)}
                      helperText={admins[index].email !== '' && !isValidEmail(admins[index].email) ? "Invalid Email" : ''}
                      sx={{ mt: 2 }}
                    />
                    <InputLabel sx={{ mt: 2 }}>Phone Number</InputLabel>
                    <MuiTelInput
                      required
                      fullWidth
                      value={admins[index].phoneNumber}
                      onChange={(value) => handleAdminChange(index, 'phoneNumber', value)}
                      defaultCountry='US'
                      placeholder="Enter phone number"
                    />
                  </div>
                    )
                  })
                }
                  <Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={handleAddAdmin}>
                    + Add Admin
                  </Button>


                  <Button variant="contained" color="primary" type="submit" sx={{ mt: 3, display:'block', mx: 'auto'} }>
                    Create Account
                  </Button>
                </form>
              </Grid>
              <Typography variant="body2" color="primary" sx={{ mt: 3, width:'50%', textAlign:'center' }}>
                By creating an account you agree to our <Link color="primary" sx={{fontWeight: 'bold'}}>Terms os Service</Link> and <Link color="primary" sx={{fontWeight: 'bold'}}>Privacy Policy</Link>.
              </Typography>
            </Grid>

          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;