import React from 'react'

import { AiFillCloseCircle } from 'react-icons/ai'

import { motion } from 'framer-motion'

const styles = {
  container: 'w-full h-full p-5 lg:p-10 text-usm xl:text-base',
  terminal: 'w-full h-full bg-gray-500 rounded-2xl border-gray-600 border-solid border panels',
  header: 'w-full h-6 py-2 px-3 rounded-t-2xl bg-gray-400 flex flex-row items-center justify-end  text-cyan-500 panels',
  menu: 'w-full h-5 px-1 flex text-gray-500 font-bold bg-gray-400 panels',
  content: 'w-full h-full py-1 md:py-3 px-2 font-semibold text-gray-200',
}

const Backend = () => {
  return (
    <motion.div className={styles.container} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
      <div className={styles.terminal}>
        <div className={styles.header}>
          <AiFillCloseCircle />
        </div>
        <div className={styles.menu}>
          <p className='mr-2'>File</p>
          <p className='mr-2'>Edit</p>
          <p className='mr-2'>View</p>
          <p className='mr-2'>Search</p>
          <p className='mr-2'>Terminal</p>
          <p className='mr-2'>Help</p>
        </div>
        <div className={styles.content}>
          <h1><span className='text-cyan-500 pb-1 md:pb-3'>toro-etele@linux&gt;</span> ls backend-skills</h1>

          <div>
            <h2 className='lg:pt-4'>Languages: </h2>
            <ul className='grid grid-cols-4 pl-2 lg:pl-5 pb-1 md:py-3'>
              <li><span className='text-cyan-500'>Java</span></li>
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div>
            <h2>Database: </h2>
            <ul className='grid grid-cols-4 pl-2 lg:pl-5 pb-1 md:py-3'>
              <li><span className='text-cyan-500'>Sanity</span></li>
              <li>SQL</li>
              <li>MS SQL</li>
              <li>Postgres</li>
            </ul>
          </div>

          <div>
            <h2>Linux: </h2>
            <ul className='grid grid-cols-2 2xl:grid-cols-3 pl-2 lg:pl-5 md:pt-3'>
              <li><span className='text-cyan-500'>Shell script</span></li>
              <li>UNIX Commands</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Backend