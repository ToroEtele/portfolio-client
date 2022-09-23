import { useState, useEffect, useRef, useLayoutEffect } from "react"

import Head from "next/head"

import { FaRegCircle, FaServer } from 'react-icons/fa'
import { FiTerminal } from 'react-icons/fi'
import { RiComputerFill } from 'react-icons/ri'
import { SiHiveBlockchain } from 'react-icons/si'

import { Tablet } from "../components/"

const styles = {
  background: 'w-screen h-3screen px-[10%] flex items-center justify-center bg-gray-700',
  container: 'h-full w-full xl:w-[90%] xl:h-[90%] flex flex-row',
  left_container: 'h-full w-[50%]',
  rigth_container: 'relative h-full w-[80%] pl-[15%]',
  circle: 'mb-2  text-[20px] font-bold text-white flex flex-row items-center',
  introduction_line: 'ml-2 mb-2 border-l-2 border-white bolder-solid w-full h-[10%] px-10 py-10 flex text-xl font-normal text-white',
  merge: 'text-xl mb-2 text-white',
  main_line: 'ml-2 mb-2 border-l-2 border-white bolder-solid w-full h-[90%] flex flex-col text-xl font-bold ',
  splitter: 'h-15 w-full',
  inner_container: 'w-full h-full',
  inner_content: 'ml-10 w-full h-[30%]',
  inner_circle: ' ml-10 text-white mt-2 flex flex-row items-center',
  innercontent_item: 'mt-2 mb-4 ml-2 w-full h-[100%] border-l-2 border-white bolder-solid px-10 py-10 flex text-white text-xl font-normal flex flex-col',
}

const Skills = () => {
  const [scrollY, setscrollY] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      setscrollY(window.scrollY)
      setHeight(window.innerHeight)
    })

    window.addEventListener('resize', (event) => {
      setHeight(window.innerHeight)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>

      <div className={styles.background} >

        <div className={styles.container} ref={ref}>
          {/* //! Left Container */}
          <div className={styles.left_container}>

            {/* //!Circle */}
            <div className={styles.circle}>
              <FaRegCircle className="mr-10" />

              <div className="text-sm py-2 px-4 border-2 border-white border-solid rounded-3xl">
                <p>npm install my-resume</p>
              </div>
            </div>

            {/* //! Line */}
            <div className={styles.introduction_line}>
              Hi! My name is Etele. I'm an business IT student in Romania. On this page you can read about my skills and learnings. You can also download my short resume.
            </div>

            {/* //! Merge */}
            <div className={styles.merge}>
              <FiTerminal />
            </div>

            {/* //! Main Line */}
            <div className={styles.main_line}>

              {/* //! Splitter svg */}
              <div className={styles.splitter}>
                <svg width="50" height="64" viewBox="0 0 50 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0C1 17 9 20 23.5 29.5C38 39 49 43.5 49 63.5" stroke="#ffffff" strokeWidth='2px' strokeDashoffset="0px" strokeDasharray="84.78448486328125px 84.78448486328125px"></path></svg>
              </div>

              {/*//! Inner container  */}
              <div className={styles.inner_container}>

                {/* //! Inner circle */}
                <div className={styles.inner_circle}>
                  <RiComputerFill />
                  <div className="text-sm py-2 px-4 border-2 border-white border-solid rounded-3xl ml-10">
                    <p>render(&lt;h1&gt;Frontend skills&lt;/h1&gt;)</p>
                  </div>
                </div>

                {/*//! Inner content  */}
                <div className={styles.inner_content}>
                  <div className={styles.innercontent_item}>
                    As everyone, I started my journey with HTML and CSS. A learned a lot about forms, semantics and SEO in case of HTML, then I mastered the concept of box models, flexboxes, grids, animations and media queries for responsapiblity. It was time to sink into Javascript: DOM, fetching, async await, listeners, promises, scoping and hoisting. When I felt confident, I choosed CSS frameworks: Bootstrap and Tailwind, and also a preprocessor: SASS. Picking a JS framework was a bigger challange: it was time to learn React, with every little detail of it. Creating UI's from scratch is difficult, so I practiced using Material UI, Styled Components and Framer-Motion. Also I used other popular packages like: React-Router and Query, Axios so on... It was time to dig into some more advanced topics like Redux and Next JS. Now my toolset includes advanced state management, SSG, SSR, ISR and dynamic pages.
                  </div>
                </div>

                {/* //! Inner circle */}
                <div className={styles.inner_circle}>
                  <FaServer />

                  <div className="text-sm py-2 px-4 border-2 border-white bolder-solid rounded-3xl ml-10">
                    <p>console.log('Backend skills')</p>
                  </div>
                </div>

                {/*//! Inner content  */}
                <div className={styles.inner_content}>
                  <div className={styles.innercontent_item}>
                    <p className="mb-4">I am also learning back-end technologies, since 9-th grade. I started to learn coding in C++, now my toolset includes
                      Java, JavaScript and Python. I studied object-oriented programming in Java language. And I also have a solid knowledge about data structures, and algorithms. Since I graduated in an intensive mathematics class, math can be also mentioned as my hard skill.</p>
                    <p className="mb-4">I learned SQL at university in MS SQL, but I have Postgres SQL also in my bag. My favourite content management system is Sanity, but I also used Joomla! during my internship</p>
                    <p>During my training I was involved into the world of Linux. I am familiar with the OS, and also with the basic, and some more advanced topcis of it: UNIX commands, shell scripting, process management, pipe, popen, fifo, C functions in Linux like fork, wait, abort etc..</p>
                  </div>
                </div>

                {/* //! Inner circle */}
                <div className={styles.inner_circle}>
                  <SiHiveBlockchain />

                  <button className="text-sm py-2 px-4 border-2 border-white bolder-solid rounded-3xl ml-10 text-cyan-500">Connect to Ethereum mainnet</button>
                </div>

                {/*//! Inner content  */}
                <div className={styles.inner_content}>
                  <div className={styles.innercontent_item}>
                    <p className="mb-4">I am a crypto enthusiastic. In my free time I'm learning blockchain software developement and web3 developement.</p>
                    <p className="mb-4">Learning blockchain developement on my own was a little bit challanging so I took some online courses where I learned the basics of writing safe and gas-optimized smart contracts using solidity and Truffle framework,
                      and migrate them to the blockchain. First of all I rolled up to courses where I got the basics of decentralization, blockchains and the financial world about them. One of my first courses was Blockchain A-Z on Udemy, where I created my first basic blockchain. Afterwards I discovered Moralis Academy. I rolled up for their courses and completed ther courses about Smart Contract Programming and Security, Chainlink Programming, React Web3 Developement, Unity Blockchain Game Developement so on..  </p>
                  </div>
                </div>

                {/* //! Splitter svg */}
                <div className={styles.splitter}>
                  <svg width="51" height="83" viewBox="0 10 47 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="curve"><path d="M1 0C1 17 9 20 23.5 29.5C38 39 49 43.5 49 63.5" stroke="#ffffff" strokeWidth='2px' strokeDashoffset="0px" strokeDasharray="84.78448486328125px 84.78448486328125px"></path></svg>
                </div>

              </div>

            </div>

          </div>

          {/* //! Rith Container */}
          <div className={styles.rigth_container}>
            <svg class="absolute top-40 rigth-0" fill="none" height="763" width="945">
              <path d="m81 1h25v25h-25zm-25 0h25v25h-25zm52 50h25v25h-25zm-52-25h25v25h-25zm152 25h25v25h-25zm51-25h25v25h-25zm-76 25h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25 203h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm379 103h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm102-51h25v25h-25zm0 25h25v25h-25zm-127 26h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-103 50h25v25h-25zm-76-25h25v25h-25zm51 25h25v25h-25zm0 25h25v25h-25zm103-100h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-256-127h25v25h-25zm1 127h25v25h-25zm-1-102h25v25h-25zm0-75h25v25h-25zm0 25h25v25h-25zm-25 25h25v25h-25zm0-25h25v25h-25zm0 50h25v25h-25zm51 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm49-177h25v25h-25zm1-50h25v25h-25zm-26 50h25v25h-25zm26 51h25v25h-25zm25 0h25v25h-25zm101-507h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm-51 27h25v25h-25zm-25 0h25v25h-25zm457 177h25v25h-25zm-25 50h25v25h-25zm-26 51h25v25h-25zm26-151h25v25h-25zm0 75h25v25h-25zm50 0h25v25h-25zm25-25h25v25h-25zm0-25h25v25h-25zm50-25h25v25h-25zm-151-102h25v25h-25zm25 0h25v25h-25zm-25-25h25v25h-25zm176 177h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm1 50h25v25h-25zm-26-50h25v25h-25zm50 0h25v25h-25zm25 0h25v25h-25zm-150-100h25v25h-25zm225 100h25v25h-25zm50 0h25v25h-25zm50 0h25v25h-25zm-150 0h25v25h-25zm-25 51h25v25h-25zm-49 24h25v25h-25zm-76 2h25v25h-25zm0 25h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm75 101h25v25h-25zm-25 0h25v25h-25zm-25-76h25v25h-25z" opacity=".3" stroke="#fff"></path>
              <g ><path d="m839 330h25v25h-25z"></path><path d="m839 330h25v25h-25z" stroke="#fff"></path></g>
            </svg>
            <svg class="absolute bottom-0 rigth-0" fill="none" height="763" width="945">
              <path d="m81 1h25v25h-25zm-25 0h25v25h-25zm52 50h25v25h-25zm-52-25h25v25h-25zm152 25h25v25h-25zm51-25h25v25h-25zm-76 25h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25 203h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm379 103h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm102-51h25v25h-25zm0 25h25v25h-25zm-127 26h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-103 50h25v25h-25zm-76-25h25v25h-25zm51 25h25v25h-25zm0 25h25v25h-25zm103-100h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-256-127h25v25h-25zm1 127h25v25h-25zm-1-102h25v25h-25zm0-75h25v25h-25zm0 25h25v25h-25zm-25 25h25v25h-25zm0-25h25v25h-25zm0 50h25v25h-25zm51 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm49-177h25v25h-25zm1-50h25v25h-25zm-26 50h25v25h-25zm26 51h25v25h-25zm25 0h25v25h-25zm101-507h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm-51 27h25v25h-25zm-25 0h25v25h-25zm457 177h25v25h-25zm-25 50h25v25h-25zm-26 51h25v25h-25zm26-151h25v25h-25zm0 75h25v25h-25zm50 0h25v25h-25zm25-25h25v25h-25zm0-25h25v25h-25zm50-25h25v25h-25zm-151-102h25v25h-25zm25 0h25v25h-25zm-25-25h25v25h-25zm176 177h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm1 50h25v25h-25zm-26-50h25v25h-25zm50 0h25v25h-25zm25 0h25v25h-25zm-150-100h25v25h-25zm225 100h25v25h-25zm50 0h25v25h-25zm50 0h25v25h-25zm-150 0h25v25h-25zm-25 51h25v25h-25zm-49 24h25v25h-25zm-76 2h25v25h-25zm0 25h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm75 101h25v25h-25zm-25 0h25v25h-25zm-25-76h25v25h-25z" opacity=".3" stroke="#fff"></path>
              <g ><path d="m839 330h25v25h-25z" fill="#ffffff"></path><path d="m839 330h25v25h-25z" stroke="#fff"></path></g>
            </svg>
            <Tablet scrollY={scrollY} height={height} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills