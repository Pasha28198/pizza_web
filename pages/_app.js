import Layout from '../components/layout'

import '../styles/global.scss'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
}

export default MyApp
