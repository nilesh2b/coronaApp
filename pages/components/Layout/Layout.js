import styles from './Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({children}) =>{
return(
    <div className={styles.container}>
    <Head>
      <title>CoronavirusApp</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
     {children}
    </main>

    <footer className={styles.footer}>
        @nileshbhalerao
    </footer>
    </div>
)
}

export default Layout