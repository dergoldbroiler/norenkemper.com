import { Layout} from 'components/Layout';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import '@/styles/Home.module.scss'


import { Header } from 'components/Header/Header'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
     <Layout>
     <Header />
      </Layout>
  )
}
