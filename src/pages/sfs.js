import React from 'react';
import PageLayout from '../components/PageLayout';
import MainLayout from '@/components/MainLayout';
import Head from 'next/head';

function Sfs() {
  return (
    <><Head>
          <title> Eswa | Sfs</title>
      </Head>
        <div>
            <MainLayout>
              <PageLayout />
            </MainLayout>
        </div></>
  );
};

export default Sfs;