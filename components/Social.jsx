import { AiFillLinkedin, AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const styles = {
  socialPanel: 'absolute w-screen bottom-0 left-0 flex flex-row items-center justify-center lg:justify-start text-4xl text-cyan-400 mb-10 md:pl-20',
  socialItem: 'opacity-75 mx-1 hover:opacity-100 cursor-pointer'
}

const Social = () => {
  return (
    <div className={styles.socialPanel}>
      <a href="https://www.linkedin.com/in/etele-toró/"><AiFillLinkedin className={styles.socialItem} /></a>
      <a href="https://github.com/ToroEtele"><AiFillGithub className={styles.socialItem} /></a>
      <a href='https://twitter.com/ketler244?t=hr_fury5exyznrme0ljyda&s=09'><AiOutlineTwitter className={styles.socialItem} /></a>
      <a href="https://www.facebook.com/etele.toro"><AiFillFacebook className={styles.socialItem} /></a>
    </div>
  )
}

export default Social