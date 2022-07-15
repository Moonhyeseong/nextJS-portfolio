import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>프론트엔드 개발자 문혜성 | 프로젝트</title>
        <meta name="description" content="프론트엔드 개발자 문혜성 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
};
``;

export default Projects;

//빌드타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();
  // console.log(result);

  const projectsNames = projects.results.map((project) => {
    console.log(project.properties);
  });

  return {
    props: {},
  };
}
