import { useState, useEffect } from "react"
import Image from "next/image";

import { Tooltip } from '@nextui-org/react';

import { urlFor } from '../lib/client'

import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'

const styles = {
  container: 'w-full h-auto lg:h-100 mb-5 flex flex-col lg:flex-row',
  desc: 'lg:w-[51%] flex flex-col items-center text-white text-base 2xl:text-xl font-bold py-5 px-2 lg:p-10 ',
  image_card: 'lg:w-[49%] lg:h-[90%] 2xl:h-[100%] relative flex flex-col items-center lg:flex-row justify-center text-blue-700 lg:text-transparent lg:hover:text-blue-700 group',
  text_card: ' w-full h-[100%] px-5 py-6 flex flex-col items-center border-4 border-white/50 rounded-3xl card',
  image: 'w-full bg-cover z-0 lg:group-hover:blur-sm',
  title: 'pb-6',
  icon_cont: 'flex flex-row lg:absolute top-[40%] xl:top-[45%] lg:left-[35%] xl:left-[40%] 2xl:left-[45%] pt-4 lg:pt-0',
  icon: 'text-6xl z-0 mr-5 blur-0'
}

const TextCard = ({ name, description }) => {

  return (
    <div className={styles.desc}>
      <div className={styles.text_card}>
        <h1 className={styles.title}>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

const ImageCard = ({ img, codeLink, projectLink }) => {

  return (
    <div className={styles.image_card}>
      <Image src={urlFor(img).url()} alt='screenshot of website' className={styles.image} width="700%" height="400%" unoptimized={true} />
      <div className={styles.icon_cont}>
        <div className={styles.icon}><a href={codeLink}><Tooltip content={"Check the code"}><AiFillGithub /></Tooltip></a></div>
        <div className={styles.icon}><a href={projectLink}><Tooltip content={"Check the project"}><CgWebsite /></Tooltip></a></div>
      </div>
    </div>
  )
}

const WorkCard = ({ work: { imgUrl, name, description, projectLink, codeLink }, index }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      setWidth(window.innerWidth)
    })
  }, [])

  return (
    <div className={styles.container}>
      {
        (width < 1024) ?
          (
            <>
              <ImageCard img={imgUrl} codeLink={codeLink} projectLink={projectLink} />
              <TextCard name={name} description={description} />
            </>
          ) : (
            (index % 2 == 0) ?
              (
                <>
                  <ImageCard img={imgUrl} codeLink={codeLink} projectLink={projectLink} />
                  <TextCard name={name} description={description} />
                </>
              ) : (
                <>
                  <TextCard name={name} description={description} />
                  <ImageCard img={imgUrl} codeLink={codeLink} projectLink={projectLink} />
                </>
              ))}
    </div >
  )
}

export default WorkCard
