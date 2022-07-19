import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/projectItem';

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <Layout className="flex flex-col items-center justify-center ">
      <Head>
        <title>프론트엔드 개발자 문혜성 | 프로젝트</title>
        <meta name="description" content="프론트엔드 개발자 문혜성 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : {projects.results.length}</h1>
      <div className="grid grid-cols-1  p-6 md:grid-cols-2 gap-8  py-10  w-3/5 sm:w-full ">
        {projects.results.map((project) => {
          return <ProjectItem key={project.id} projectData={project} />;
        })}
      </div>
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
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'id',
          direction: 'ascending',
        },
      ],
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();

  console.log(projects.results[0].properties);

  return {
    props: { projects },
  };
}
