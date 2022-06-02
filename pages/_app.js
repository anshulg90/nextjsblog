import '../styles/main.css'
import '../styles/globals.css'
import Header from '../component/Header'
import Footer from '../component/Footer'


function MyApp({ Component, pageProps }) {
  return <>
    <div className="light">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  </>
}

export default MyApp
