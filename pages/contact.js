import { useState, useEffect, useRef, useLayoutEffect } from "react"

import { Social } from '../components'

import { client } from '../lib/client'


import Head from 'next/head'

const styles = {
  background: 'w-screen h-screen h-max-screen px-[10%] lg:px-[22%] pt-[15%] flex flex-col items-center bg-gray-700 overflow-hidden',
  container: 'h-[10%] w-full lg:w-[60%] mt-2 mb-10 flex flex-row items-center justify-between text-sm  xl:text-lg 2xl:text-xl desktop:text-2xl',
  phone: 'px-3 py-3 w-[45%] flex justify-center bg-white text-gray-700 font-semibold rounded-xl',
  email: 'px-5 py-3 w-[45%] flex justify-center bg-blue-700 text-white font-semibold rounded-xl z-20',
  flex: 'w-full flex items-center justify-center ',
  p_text: 'text-2xl text-gray-700 leading-3',
  form: 'flex flex-col items-center w-full h-[60%] z-10',
  input: 'w-[100%] mb-5 p-3 rounded-xl',
  input2: 'w-[100%] mb-16 p-3 rounded-xl h-[100%]',
  button: 'w-[50%] xl:w-[15%] p-3 bg-blue-700 justify-self-center rounded-xl text-white font-bold',
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmited, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        console.log('Success')
      })
  }

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className={styles.background}>

        <div className={styles.container}>
          <div className={styles.phone}>+4(07) 545 964 38</div>
          <div className={styles.email}>toroetele@gmail.com</div>
        </div>

        {!isFormSubmited ?
          <div className={styles.form}>
            <div className={styles.flex}>
              <input className={styles.input} type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className={styles.flex}>
              <input className={styles.input} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <>
              <textarea
                className={styles.input2}
                placeholder='Your Message'
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </>
            <button type="button" className={styles.button} onClick={handleSubmit}>{loading ? 'loading' : 'Send Message'}</button>
          </div>
          :
          <div>
            <h3 className="text-5xl font-bold text-cyan-400">Thank You for getting in touch!</h3>
          </div>
        }

        <svg className="absolute top-0 left-0 md:top-16 md:left-20 z-0 w-full" fill="none" height="763" width="945">
          <path d="m81 1h25v25h-25zm-25 0h25v25h-25zm52 50h25v25h-25zm-52-25h25v25h-25zm152 25h25v25h-25zm51-25h25v25h-25zm-76 25h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25 203h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm379 103h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm0 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm102-51h25v25h-25zm0 25h25v25h-25zm-127 26h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-103 50h25v25h-25zm-76-25h25v25h-25zm51 25h25v25h-25zm0 25h25v25h-25zm103-100h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-256-127h25v25h-25zm1 127h25v25h-25zm-1-102h25v25h-25zm0-75h25v25h-25zm0 25h25v25h-25zm-25 25h25v25h-25zm0-25h25v25h-25zm0 50h25v25h-25zm51 152h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm49-177h25v25h-25zm1-50h25v25h-25zm-26 50h25v25h-25zm26 51h25v25h-25zm25 0h25v25h-25zm101-507h25v25h-25zm-25 0h25v25h-25zm25 25h25v25h-25zm-25 0h25v25h-25zm-25-25h25v25h-25zm-25 0h25v25h-25zm-51 27h25v25h-25zm-25 0h25v25h-25zm457 177h25v25h-25zm-25 50h25v25h-25zm-26 51h25v25h-25zm26-151h25v25h-25zm0 75h25v25h-25zm50 0h25v25h-25zm25-25h25v25h-25zm0-25h25v25h-25zm50-25h25v25h-25zm-151-102h25v25h-25zm25 0h25v25h-25zm-25-25h25v25h-25zm176 177h25v25h-25zm-25 0h25v25h-25zm0 25h25v25h-25zm1 50h25v25h-25zm-26-50h25v25h-25zm50 0h25v25h-25zm25 0h25v25h-25zm-150-100h25v25h-25zm225 100h25v25h-25zm50 0h25v25h-25zm50 0h25v25h-25zm-150 0h25v25h-25zm-25 51h25v25h-25zm-49 24h25v25h-25zm-76 2h25v25h-25zm0 25h25v25h-25zm0 25h25v25h-25zm-25 0h25v25h-25zm75 101h25v25h-25zm-25 0h25v25h-25zm-25-76h25v25h-25z" opacity=".3" stroke="#fff"></path>
        </svg>

      </div>

      <Social />

    </>
  )
}

export default Contact