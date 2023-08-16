import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PageContainer from './PageContainer';
import PageSection from './PageSection';
import { Typography } from '@mui/material';
import { SignatureCanvas } from 'react-signature-canvas';
import { useRef } from 'react';
import Image from 'next/image';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  middleName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('This field is required'),
  residentialAddress: Yup.string().required('This field is required'),
  placeOfWork: Yup.string().required('This field is required'),
  loanAmount: Yup.number().min(1, 'Loan amount must be greater than 0').required('This field is required'),
  guarantor: Yup.string().required('This field is required'),
  loanSecurity: Yup.string().required('This field is required'),
  id: Yup.string().required('This field is required'),
  workplace: Yup.string().required('This field is required'),
  purpose: Yup.string().required('This field is required'),
  repaymentPeriod: Yup.number().required('This field is required'),
  guarantorFirstName: Yup.string().required('This field is required'),
  guarantorLastName: Yup.string().required('This field is required'),
  guarantorId: Yup.string().required('This field is required'),
  
});

const LoanForm = () => {
    const signatureRef = useRef();
    const [signature, setSignature] = useState("");
    const [signatureData, setSignatureData] = useState('');
  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      id: '',
      email: '',
      phone: '',
      address: '',
      loanAmount: '',
      repaymentPeriod: '',
      placeOfWork: '',
      loanSecurity: '',
      purpose: '',
      guarantorFirstName: '',
      guarantorLastName: '',
      guarantorId: '',
      attachment: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const signatureImage = signatureRef.current.toDataURL();
      console.log('Signature Image:', signatureImage);
      // You can add your submission logic here
    },
  });
  const handleSignatureChange = (event) => {
    setSignature(event.target.value);
  };
  const handleSignatureBlur = (event) => {
    // You can process the signature data here.
    // For example, you can encode it to base64 and store it in the state.
    const signatureDataURL = event.target.toDataURL();
    setSignatureData(signatureDataURL);
  };

  return (
    <PageSection>
        <PageContainer>
        <Grid container>
        <Grid item>
          <Typography variant='h4'>Loan Application Form</Typography>
        </Grid>
      </Grid>
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} sx={{mt: 4}}>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('firstName')}
            error={formik.touched.firstName && formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('middleName')}
            error={formik.touched.middleName && formik.errors.middleName}
            helperText={formik.touched.middleName && formik.errors.middleName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('lastName')}
            error={formik.touched.lastName && formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Id Number"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('id')}
            error={formik.touched.id && formik.errors.id}
            helperText={formik.touched.id && formik.errors.id}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('phoneNumber')}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Residential Address"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('residentialAddress')}
            error={formik.touched.residentialAddress && formik.errors.residentialAddress}
            helperText={formik.touched.residentialAddress && formik.errors.residentialAddress}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Loan Amount"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('loanAmount')}
            error={formik.touched.loanAmount && formik.errors.loanAmount}
            helperText={formik.touched.loanAmount && formik.errors.loanAmount}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Repayment Period in Months"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('repaymentPeriod')}
            error={formik.touched.repaymentPeriod && formik.errors.repaymentPeriod}
            helperText={formik.touched.repaymentPeriod && formik.errors.repaymentPeriod}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Place of Work"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('placeOfWork')}
            error={formik.touched.placeOfWork && formik.errors.placeOfWork}
            helperText={formik.touched.placeOfWork && formik.errors.placeOfWork}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Purpose"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('purpose')}
            error={formik.touched.purpose && formik.errors.purpose}
            helperText={formik.touched.purpose && formik.errors.purpose}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Loan Security"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('loanSecurity')}
            error={formik.touched.loanSecurity && formik.errors.loanSecurity}
            helperText={formik.touched.loanSecurity && formik.errors.loanSecurity}
          />
        </Grid>
      </Grid>
      <Typography variant='h4' sx={{mt:4}}>Guarantor Details</Typography>
      <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
            label="Guarantor First Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('guarantorFirstName')}
            error={formik.touched.guarantorFirstName && formik.errors.guarantorFirstName}
            helperText={formik.touched.guarantorFirstName && formik.errors.guarantorFirstName}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Guarantor Last Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('guarantorLastName')}
            error={formik.touched.guarantorLastName && formik.errors.guarantorLastName}
            helperText={formik.touched.guarantorLastName && formik.errors.guarantorLastName}
          />
        </Grid>
        <Grid item xs={4}>
        <TextField
            label="Guarantor Id"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps('guarantorId')}
            error={formik.touched.guarantorId && formik.errors.guarantorId}
            helperText={formik.touched.guarantorId && formik.errors.guarantorId}
          />
        </Grid>
        </Grid>
        <Typography variant='h5' sx={{mt:5}}>Kindly attach the following documents:</Typography>
        <Grid container spacing={2} >
        <Grid item xs={4} sx={{mt:4}}>
           
        <input
            type="file"
            onChange={(event) => formik.setFieldValue('attachment', event.currentTarget.files[0])}
            style={{ display: 'none' }}
            id="attachmentInput"
        />
        <label htmlFor="attachmentInput">
            <Button variant="outlined" component="span">
            Applicant Id
            </Button>
        </label>
        </Grid>
        <Grid item xs={4} sx={{mt:4}}>
       
        <input
            type="file"
            onChange={(event) => formik.setFieldValue('attachment', event.currentTarget.files[0])}
            style={{ display: 'none' }}
            id="attachmentInput"
        />
        <label htmlFor="attachmentInput">
            <Button variant="outlined" component="span">
            Guarantor Id
            </Button>
        </label>
        </Grid>
        <Grid item xs={4} sx={{mt:4}}>
       
        <input
            type="file"
            onChange={(event) => formik.setFieldValue('attachment', event.currentTarget.files[0])}
            style={{ display: 'none' }}
            id="attachmentInput"
        />
        <label htmlFor="attachmentInput">
            <Button variant="outlined" component="span">
            Loan Security
            </Button>
        </label>
        </Grid>
        </Grid>
        <Typography variant="h5" sx={{ mt: 5 }}>
        Digital Signature:
      </Typography>
      <div style={{ border: '1px solid #ccc', width: '300px', height: '150px' }}>
        {signatureData ? (
          <Image src={signatureData} alt="Digital Signature" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <TextField
            label="Sign here"
            variant="outlined"
            fullWidth
            multiline
            onBlur={handleSignatureBlur}
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px', marginLeft: "auto" }}>
        Submit
      </Button>
    </form>
    </PageContainer>
    </PageSection>
  );
};

export default LoanForm;