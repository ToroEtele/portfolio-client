import React from 'react'

import { motion } from 'framer-motion'

const styles = {
  container: 'w-full h-full py-1 px-4 md:p-5',
  title: 'text-xs md:text-base lg:text-lg 2xl:text-xl font-semibold',
  sub: 'md:pt-2 lg:pt-5 text-xs lg:text-base 2xl:text-lg text-gray-500 font-semibold',
  ruler: 'lg:pb-2',
  horizontal_container: 'grid grid-cols-3 grod-rows-2 gap-y-16 text-xs lg:text-base 2xl:text-lg',
  horizontal_container1: 'grid grid-cols-4 grod-rows-2 gap-y-16 text-xs lg:text-base 2xl:text-lg',
  item: 'pr-10 font-semibold text-gray-400'
}

const Frontend = () => {
  return (
    <motion.div className={styles.container} >
      <h1 className={styles.title}>Frontend Skills: </h1>
      <div>
        <motion.ul className={styles.horizontal_container} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
          <li className={styles.item}>HTML</li>
          <li className={styles.item}>CSS</li>
          <li className={styles.item}>JavaScript</li>
        </motion.ul>
      </div>
      <h2 className={styles.sub}>Styling:</h2>
      <hr className={styles.ruler} />
      <div>
        <motion.ul className={styles.horizontal_container} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
          <li className={styles.item}>SASS</li>
          <li className={styles.item}>Bootstrap</li>
          <li className={styles.item}>Tailwind</li>
        </motion.ul>
      </div>
      <h2 className={styles.sub}>Frameworks:</h2>
      <hr className={styles.ruler} />
      <div>
        <motion.ul className={styles.horizontal_container} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
          <li className={styles.item}>React</li>
          <li className={styles.item}>Material</li>
          <li className={styles.item}>Redux</li>
        </motion.ul>
      </div>
      <div>
        <motion.ul className={styles.horizontal_container1} whileInView={{ x: [35, 0], y: [10, 0], scale: [0.9, 1], }} transition={{ duration: 0.4 }}>
          <li className={styles.item}>Next</li>
          <li className={styles.item}>Routing</li>
          <li className={styles.item}>API</li>
          <li className={styles.item}>SSG, SSR </li>
        </motion.ul>
      </div>
      <h2 className={styles.sub}>Packages:</h2>
      <hr className={styles.ruler} />
      <div>
        <motion.ul className={styles.horizontal_container1} whileInView={{ x: [35, 0], y: [10, 0], scale: [0.9, 1], }} transition={{ duration: 0.4 }}>
          <li className={styles.item}>Router</li>
          <li className={styles.item}>Query</li>
          <li className={styles.item}>Axios</li>
          <li className={styles.item}>Framer Motion</li>
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default Frontend