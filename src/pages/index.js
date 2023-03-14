import { Layout} from 'components/Layout';

import { Unternehmen } from 'components/Pages/Unternehmen';
import { NGO } from 'components/Pages/NGO';
import { Homepage } from 'components/Pages/Homepage';



export default function Home() {

  

  return (
      
    <Layout>

        <Homepage />

        <Unternehmen />

        <NGO />
   
    </Layout>
  )
}
