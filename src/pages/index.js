import { Layout} from 'components/Layout';

import { Header } from 'components/Header/Header';
import { Videolayer} from 'components/Videolayer';
import { Contentlayer } from 'components/Contentlayer';

import { Company } from 'components/Pages/Company';

export default function Home() {
  return (
      
    <Layout>
      <Videolayer />
     
      <Contentlayer>
        <Header />
        <Company />
      </Contentlayer>

    </Layout>
  )
}
