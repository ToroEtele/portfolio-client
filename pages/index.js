import Head from 'next/head'

import { Social } from '../components'
import Animation from '../components/Animation'

const styles = {
  background: 'w-screen h-screen px-[10%] bg-gray-600 flex items-center justify-between',
  card: 'h-[70%] lg:h-[75%] w-[100%] rounded-3xl py-8 md:pt-0 px-4 lg:py-10 lg:px-10 2xl:p-12 desktop:px-20 border-solid border-8 border-white/50 card flex flex-col lg:flex-row justify-between lg:items-center',
  text: 'h-[35%] md:h-[40%] md:w-[80%] lg:w-[50%] xl:h-[60%] xl:w-[70%] 2xl:h-[80%] desktop:h-full desktop:w-[65%] mb-2 lg:mb-0',
  image: 'h-[60%] w-auto lg:h-full lg:w-[50%] xl:w-[40%] 2xl:w-[30%] desktop:w-[30%] z-10 bg-black imgcont',
  svg1: 'absolute top-20 left-0 z-0 decoration hidden md:block',
  svg2: 'absolute top-20 right-48 z-0 decoration hidden md:block'
}

export default function Home() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name='description: Profile portfolio page of Toró Etele React Frontend Developer' />
      </Head>
      {/* //!Background */}
      <div className={styles.background}>

        {/* //!Card */}
        <div className={styles.card}>

          {/* //!Logo text */}
          <div className={styles.text}>
            <Animation />
          </div>

          {/* //!Image */}
          <div className={styles.image} />
        </div>
      </div>

      {/* //!Background SVG */}
      <svg className={styles.svg1} height="763" width="945">
        <path d="m81 1h25v25h-25zm-25 0h25v25h-25zm52 50h25v25h-25zm-52-25h25v25h-25zm152 25h25v25h-25zm51-25h25v25h-25zm-76 25h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25 25h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm379 103h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm102-51h25v25h-25zm0 25h25v25h-25zm-127 26h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-103 50h25v25h-25zm-76-25h25v25h-25zm51 25h25v25h-25zm0 25h25v25h-25zm103-100h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-256-127h25v25h-25zm1 127h25v25h-25zm-1-102h25v25h-25zm0-75h25v25h-25zm0 25h25v25h-25zm-25 25h25v25h-25zm0-25h25v25h-25zm0 50h25v25h-25zm51 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm49-177h25v25h-25zm1-50h25v25h-25zm-26 50h25v25h-25zm26 51h25v25h-25zm25 0h25v25h-25zm101-507h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm-51 27h25v25h-25zm-25 0h25v25h-25zm457 177h25v25h-25zm-25 75h25v25h-25zm50 0h25v25h-25zm25-25h25v25h-25zm0-25h25v25h-25zm50-25h25v25h-25zm-151-102h25v25h-25zm25 0h25v25h-25zm-25-25h25v25h-25zm176 177h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm1 50h25v25h-25zm-26-50h25v25h-25zm50 0h25v25h-25zm25 25h25v25h-25zm0 0h25v25h-25zm-25-76h25v25h-25z" opacity=".3" stroke="#fff"></path>
      </svg>
      <svg className={styles.svg2} height="763" width="945">
        <path d="m81 1h25v25h-25zm-25 0h25v25h-25zm52 50h25v25h-25zm-52-25h25v25h-25zm152 25h25v25h-25zm51-25h25v25h-25zm-76 25h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25 203h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm379 103h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm102-51h25v25h-25zm0 25h25v25h-25zm-127 26h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-103 50h25v25h-25zm-76-25h25v25h-25zm51 25h25v25h-25zm0 25h25v25h-25zm103-100h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-256-127h25v25h-25zm1 127h25v25h-25zm-1-102h25v25h-25zm0-75h25v25h-25zm0 25h25v25h-25zm-25 25h25v25h-25zm0-25h25v25h-25zm0 50h25v25h-25zm51 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm49-177h25v25h-25zm1-50h25v25h-25zm-26 50h25v25h-25zm26 51h25v25h-25zm25 0h25v25h-25zm101-507h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm-51 27h25v25h-25zm-25 0h25v25h-25zm457 177h25v25h-25zm-25 50h25v25h-25zm-26 51h25v25h-25zm26-151h25v25h-25zm0 75h25v25h-25zm50 0h25v25h-25zm25-25h25v25h-25zm0-25h25v25h-25zm50-25h25v25h-25zm-151-102h25v25h-25zm25 0h25v25h-25zm-25-25h25v25h-25zm176 177h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm1 50h25v25h-25zm-26-50h25v25h-25zm50 0h25v25h-25zm25 0h25v25h-25zm-150-100h25v25h-25zm225 100h25v25h-25zm50 0h25v25h-25zm50 0h25v25h-25zm-150 0h25v25h-25zm-25 51h25v25h-25zm-49 24h25v25h-25zm-76 2h25v25h-25zm0 25h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm75 101h25v25h-25zm-25 0h25v25h-25zm-25-76h25v25h-25z" opacity=".3" stroke="#fff"></path>
      </svg>

      {/* //!Social panel */}
      <Social />
    </>
  )
}
