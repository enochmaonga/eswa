import React from 'react'
import Home from '@/components/Home';
import { useRouter } from 'next/router';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';


function HomePage() {
const router = useRouter();
  return (
    <>
    <Head>
        <title> Eswa</title>
    </Head>
        <MainLayout>
        <Home />
        </MainLayout>
    </>
  )
}

export default HomePage;