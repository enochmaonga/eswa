import React from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import LoanForm from '@/components/LoanForm';


function Loans() {
const router = useRouter();
  return (
    <>
    <Head>
        <title> Eswa | Loans</title>
    </Head>
        <MainLayout>
      <LoanForm />
        </MainLayout>
    </>
  )
}

export default Loans;