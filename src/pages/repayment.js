import React from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import Payment from '@/components/Repayment';


function Repayment() {
const router = useRouter();
  return (
    <>
    <Head>
        <title> Eswa | Repayment</title>
    </Head>
        <MainLayout>
        <Payment />
        </MainLayout>
    </>
  )
}

export default Repayment;