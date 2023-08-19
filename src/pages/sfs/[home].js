import React from 'react';
import Head from 'next/head';
import MainLayout from '@/components/MainLayout';
import PageLayout from '@/components/PageLayout';

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