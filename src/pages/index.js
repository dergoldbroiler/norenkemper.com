import Head from 'next/head'
import { Layout} from 'components/Layout';

import { Unternehmen } from 'components/Pages/Unternehmen';
import { NGO } from 'components/Pages/NGO';
import { Homepage } from 'components/Pages/Homepage';

import { useRef, forwardRef, useState, useEffect } from "react";

export default function Home() {


  const company_ref = useRef(null);
  
  const handleNavScrollingByRef = (e, type) => {
   
    if(type === "company") {
      console.log(company_ref)
    }
        
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
        }
    );
  }
 

  return (
      
    <Layout>
      <Head>
        <title>Sven Norenkemper</title>
      </Head>

        <Homepage image={false} video={true} navScrolling={handleNavScrollingByRef}/> 
        <Unternehmen reference={company_ref}/>

        <NGO />
   
    </Layout>
  )
}
