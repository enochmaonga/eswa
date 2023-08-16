import React from 'react'
import { useRouter } from 'next/router';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';
import Accounts from '@/components/Accounts';


const sampleData = [
  {
    loanNumber: "001R",
    firstName: 'Enoch',
    middleName: 'Maonga',
    lastName: 'Mokua',
    id: '2366772',
    email: 'enoch.maong@gmail.com',
    phone: '0722737989',
    address: '45, Kaununda City',
    loanAmount: 'Kshs 100,000',
    repaymentPeriod: '3 months',
    loanDate: "05, July 2023",
    interestDueDate: "05 Aug 2023",
    interestAmount: "Kshs 10,000"

  },
    {
    loanNumber: "002R",
    firstName: 'Stephen',
    middleName: 'Karanga',
    lastName: 'Maganga',
    id: '2866772',
    email: 'skmaganga@gmail.com',
    phone: '0725750875',
    address: '98, Mosocho City',
    loanAmount: 'Kshs 10,000',
    repaymentPeriod: '3 months',
    loanDate: "17, June 2023",
    interestDueDate: "17 July, 2023",
    interestAmount: "Kshs 1,000"},

    {
      loanNumber: "003R",
      firstName: 'Joseph',
      middleName: 'Kamau',
      lastName: 'Mkenya',
      id: '553945',
      email: 'jkamagu@gmail.com',
      phone: '0725750875',
      address: 'Nyanchwa',
      loanAmount: 'Kshs 50,000',
      repaymentPeriod: '3 months',
      loanDate: "14, Aug 2023",
      interestDueDate: "14 Sep, 2023",
      interestAmount: "Kshs 5,000"}

];

function Account() {
const router = useRouter();
  return (
    <>
    <Head>
        <title> Eswa | Accounts</title>
    </Head>
        <MainLayout>
        <Accounts data={sampleData} />
        </MainLayout>
    </>
  )
}

export default Account;