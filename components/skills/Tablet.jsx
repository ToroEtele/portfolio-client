import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Blockchain from './Blockchain'
import Download from './Download'

import { motion } from 'framer-motion'

const styles = {
  tablet: 'tablet fixed left-[2%] bottom-[4%] xl:left-2/4 xl:top-40 w-[85%] h-[30%] md:h-[40%] md:w-[70%] lg:h-[50%] xl:w-[45%] xl:h-[55%] 2xl:h-[60%] 2xl:w-[40%] bg-white rounded-xl flex flex-col items-center p-5',
  header: 'panels w-[90%] md:w-[80%] h-[7%] rounded-xl flex items-center justify-center text-gray-400 cursor-pointer text-xs md:text-base',
  container: 'w-full h-full flex flex-row justify-between pt-5',
  sidebar: 'panels w-[22%] h-full rounded-xl p-1 py-2 md:p-4 text-gray-400 font-semibold text-xs md:text-base',
  content: 'panels w-[75%] h-full rounded-xl',
  selected: 'text-cyan-500 md:text-lg'
}

const Tablet = ({ scrollY, height }) => {
  return (
    <div className={styles.tablet}>
      <div className={styles.header}>
        <p>https://www.linkedin.com/in/etele-tor%C3%B3</p>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <ul>
            <li className={(height / scrollY <= 6.24 && height / scrollY > 1.05) ? styles.selected : ''}> Frontend</li>
            <li className={(height / scrollY <= 1.05 && height / scrollY > 0.58) ? styles.selected : ''} >Backend</li>
            <li className={(height / scrollY <= 0.58) ? styles.selected : ''} >Blockchain</li>
          </ul>
        </div>
        <div className={styles.content}>
          {
            (height / scrollY <= 6.24 && height / scrollY > 1.05) ? <Frontend /> :
              (height / scrollY <= 1.05 && height / scrollY > 0.58) ? <Backend /> :
                (height / scrollY <= 0.58) ? <Blockchain /> : <Download />
          }
        </div>
      </div>
    </div >
  )
}

export default Tablet