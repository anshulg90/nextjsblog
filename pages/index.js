import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return <>
    <Head>
      <title>Anshul Gangrade</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <main>
      <article className="hero">
        <header>
          <div className="container">
          <div class="flex-content">
            <div>
              <h1>Hey, I'm Anshul.</h1>
              <p class="subtitle small">
                I'm a software engineer in Pune (India). I love building open-source <Link href="/projects">projects</Link> and <Link href="/blogs">writing</Link> about what I learn. This website is my digital garden—a compendium of the things I've learned and created over the years.
              </p>
            </div>
              <img src="https://pbs.twimg.com/profile_images/462141245872041984/2NVvVJBF_400x400.jpeg" alt="Anshul G." class="main-image" />
              </div>
          </div>
        </header>
        <div className="container">

        </div>
      </article>
      
      
      
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  </>
}
