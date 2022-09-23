import { client } from '../lib/client';

import { WorkCard } from '../components';

import Head from 'next/head';

const styles = {
  background: 'w-screen h-full px-[10%] lg:px-[5%] py-24 lg:py-[5%] bg-gray-700 overflow-y-auto flex flex-col',
}

const Work = ({ works }) => {
  console.log(works);

  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      <div className={styles.background}>
        {works.map((work, index) => (
          <WorkCard work={work} key={work._id} index={index} />
        ))}

      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "work"]';
  const works = await client.fetch(query);

  console.log(works);

  return {
    props: { works }
  }
}

export default Work