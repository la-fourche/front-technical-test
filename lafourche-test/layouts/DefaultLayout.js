import Head from 'next/head'

import '~/custom.global.scss';
import './DefaultLayout.scss';

const DefaultLayout = (props) => (
  <>
    <Head>
      { 
        /*   
          In the next line we inject the chunck of css in the layout
          to solve a common Nextjs problem. (custom styles not
          loading on first load)
          This is not the best solution as it reinjects the css on each page
          & because we ovveride the cache evry time using the epoch.
          Here is a link to the issue :
          https://github.com/zeit/next-plugins/issues/282
        */
      }
      <link rel="stylesheet" href={`/_next/static/css/styles.chunk.css?${new Date().getTime()}`} />
      <title> { props.title } </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      { props.children }
    </main>

    <footer>
    </footer>
  </>
)
 export default DefaultLayout;