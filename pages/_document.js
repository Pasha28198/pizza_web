import Document, { Html, Head, Main, NextScript } from 'next/document'
import { headers } from '../helpers/headers'

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {headers}    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
