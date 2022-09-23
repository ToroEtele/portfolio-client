import React from 'react'

import chain from '../../public/chain.svg'
import Image from 'next/image'

import { motion } from 'framer-motion'

const styles = {
  container: 'w-full h-full p-3 lg:p-4 flex flex-col justify-between text-usm md:text-base 2xl:text-lg desktop:text-xl',
  card: 'h-[30%] w-[100%] bg-slate-200 rounded-xl p-1 lg:p-3 desktop:p-5',
  title: 'font-bold text-slate-500 desktop:pb-2',
  desc: 'font-semibold text-slate-400'
}

const Blockchain = () => {
  return (
    <div className={styles.container}>
      <motion.div className={styles.card} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
        <h1 className={styles.title}>Writing Smart Contracts:</h1>
        <p className={styles.desc}>Mainly to Ethereum or Binance Smart Chain</p>
        <p className={styles.desc}>Testing on Rinkeby or other test chains</p>
      </motion.div>
      <motion.div className={styles.card} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
        <h1 className={styles.title}>Using frameworks:</h1>
        <p className={styles.desc}>Truffle Suite as developement envoriment</p>
        <p className={styles.desc}>Ganache to create a personal ETH chain</p>
      </motion.div>
      <motion.div className={styles.card} whileInView={{ x: [35, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }}>
        <h1 className={styles.title}>Connecting to the web:</h1>
        <p className={styles.desc}>Using Moralis SDK</p>
        <p className={styles.desc}>Npm packages like web3.js or ethers.js</p>
      </motion.div>
    </div>
  )
}

export default Blockchain