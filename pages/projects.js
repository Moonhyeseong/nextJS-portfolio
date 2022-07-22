import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/projectItem';

const Projects = ({ projects }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Head>
          <title>프론트엔드 개발자 문혜성 | 프로젝트</title>
          <meta name="description" content="프론트엔드 개발자 문혜성 포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 : <span className="text-sky-600">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-12 gap-10">
          {projects.results.map((project) => {
            return <ProjectItem key={project.id} projectData={project} />;
          })}
        </div>
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

  return {
    props: { projects },
  };
}
