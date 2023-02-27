import { useEffect, useRef, useState } from 'react';
import { Layout} from 'components/Layout';

import { Header } from 'components/Header/Header';
import { Videolayer} from 'components/Videolayer';
import { Contentlayer } from 'components/Contentlayer';

import { Unternehmen } from 'components/Pages/Unternehmen';
import { NGO } from 'components/Pages/NGO';
import { Headerpreloading } from "components/Header/components/Headerpreloading";

import { effects } from 'public/js/effects';


export default function Home() {


 
  const [header, setHeader] = useState(<Headerpreloading />);


 


  /* load headline after 1200ms */
  useEffect(() => {
    effects.imageFadeIn();
    setTimeout(()=> {
        setHeader(<Header />);
    }, 1200)
  },[header]);


  return (
      
    <Layout>
      <Videolayer />
     
      <Contentlayer>
        {header}
        <Unternehmen />
        <NGO />
      </Contentlayer>
   
    </Layout>
  )
}
