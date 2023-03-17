import Head from 'next/head'
import { Layout} from 'components/Layout';

import { Unternehmen } from 'components/Pages/Unternehmen';
import { NGO } from 'components/Pages/NGO';
import { Homepage } from 'components/Pages/Homepage';



export default function Home() {

  

  return (
      
    <Layout>
      <Head>
        <title>Sven Norenkemper</title>
      </Head>

        <Homepage image={true} video={false} /> 
        <Unternehmen />

        <NGO />
   
    </Layout>
  )
}
