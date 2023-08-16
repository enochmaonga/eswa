import React from 'react'
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import Home from '@/components/Home';
import LoginPage from '@/components/LoginPage';


function Login() {

  return (
    <>
    <Head>
        <title> Eswa | Login</title>
    </Head>
        <MainLayout>
        <LoginPage />
        </MainLayout>
    </>
  )
}

export default Login;