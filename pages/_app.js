import Layout from '../components/layout'

import '../styles/global.scss'
import '../styles/global.css'
import { AppWrapper } from '../context/mibileMenuCtx'
import { ModalWrapper } from '../context/loginModalCtx'

function MyApp({ Component, pageProps }) {
  return(
      <ModalWrapper>
        <AppWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppWrapper>
      </ModalWrapper>  
  ) 
}

export default MyApp
