import Image from 'next/image';

const ProjectItem = ({ projectData }) => {
  const title = projectData.properties.이름.title[0].plain_text;
  const desc = projectData.properties.Description.rich_text[0].plain_text;
  const githubLink = projectData.properties.Github.url;
  const notionLink = projectData.properties.Notion.url;
  const publishURL = projectData.properties.배포URL.url;
  const tag = projectData.properties.tag.multi_select;
  const Workperiod = projectData.properties.Workperiod.rich_text[0].plain_text;
  const imgScr = projectData.cover.file.url;

  console.log(tag);
  return (
    <div className="flex flex-col  bg-slate-700 rounded-xl">
      <Image className="rounded-t-xl" src={imgScr} width="100%" height="60%" layout="responsive" objectFit="fill" quality="100" alt="cover_image" />
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <h3>{Workperiod}</h3>
      <a href={githubLink} target="blank">
        깃허브 바로가기
      </a>
      <a href={notionLink} target="blank">
        노션 바로가기
      </a>
      <a href={publishURL} target="blank">
        배포 링크 바로가기
      </a>
      <div>
        {tag.map((tagData) => {
          const tagColor = tagData.color;
          console.log(tagColor);
          return (
            <span className="bg-slate-500 rounded-lg  mx-1 p-1" key={tagData.id}>
              {tagData.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
