import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { CgFileDocument } from 'react-icons/cg'
import cv from '../../public/cv_img.jpg'

const Download = () => {
  return (
    <>
      <div className='h-6 mt-2 ml-2 md:mt-5 md:ml-5'>
        <CgFileDocument style={{ fontSize: '2rem' }} className='text-gray-300' />
      </div>
      <motion.div className='h-full w-full flex flex-col items-center' whileInView={{ x: [50, 0], scale: [0.9, 1], y: [10, 0] }} transition={{ duration: 0.4 }} >
        <motion.div className='h-28 w-20 md:h-48 md:w-32 lg:h-64 lg:w-44 xl:h-72 xl:w-48 2xl:h-80 2xl:w-52 tv:h-132 tv:w-80 border-2 border-slate-300 rounded-xl cursor-pointer' whileHover={{ scale: 1.2 }}>
          <Image src={cv} alt="resume" className='rounded-xl' />
        </motion.div>
        <a href='/cv_pdf.pdf' download='toro_etele_resume.pdf'><button type='button' className='px-4 py-2 mt-2 lg:mt-[25%] tv:mt-[37%] bg-cyan-500 rounded-2xl text-white font-bold'>
          Download CV
        </button></a>
      </motion.div>
    </>
  )
}

export default Download