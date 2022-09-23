import Link from 'next/link'

const styles = {
  navbar: 'fixed w-screen z-50 px-10 py-5 navbar flex flex-row items-center justify-center md:justify-between text-white',
  title: 'logo text-4xl font-bold cursor-pointer hidden md:block',
  menuList: 'flex text-2xl font-semibold',
  listItem: 'px-3 opacity-50 hover:opacity-100 cursor-pointer'
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href='/' passHref><h1 className={styles.title}>Toró Etele.</h1></Link>
      <ul className={styles.menuList}>
        <Link href='/' passHref><li className={styles.listItem}>Profile</li></Link>
        <Link href='/skills' passHref><li className={styles.listItem}>Skills</li></Link>
        <Link href='/work' passHref><li className={styles.listItem}>Work</li></Link>
        <Link href='/contact' passHref><li className={styles.listItem}>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar