import Layout from '../components/layout'

import '../styles/global.scss'
import '../styles/global.css'
import { AppWrapper } from '../context/mibileMenuCtx'

function MyApp({ Component, pageProps }) {
  return(
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>  
  ) 
}

export default MyApp
