import Image from 'next/image';

const ProjectItem = ({ projectData }) => {
  const title = projectData.properties.이름.title[0].plain_text;
  const desc = projectData.properties.Description.rich_text[0].plain_text;
  const githubLink = projectData.properties.Github.url;
  const notionLink = projectData.properties.Notion.url;
  const publishURL = projectData.properties.배포URL.url;
  const youtubeURL = projectData.properties.Youtube.url;
  const tag = projectData.properties.tag.multi_select;
  const Workperiod = projectData.properties.Workperiod.rich_text[0].plain_text;
  const imgScr = projectData.cover.file.url;

  return (
    <div className="project-card">
      <Image className="rounded-t-xl bg-white" src={imgScr} width="100%" height="60%" layout="responsive" objectFit="contain" quality="100" alt="cover_image" />
      <div className="p-3 flex flex-col">
        <h1 className="text-3xl font-bold my-2">{title}</h1>
        <h3 className="text-xl font-bold my-1">{desc}</h3>
        <p className="font-bold">{Workperiod}</p>
        <a href={githubLink} target="blank">
          깃허브 바로가기
        </a>
        <a href={notionLink} target="blank">
          {notionLink && '노션 바로가기'}
        </a>
        <a href={publishURL} target="blank">
          {publishURL && '배포 링크 바로가기'}
        </a>
        <a href={youtubeURL} target="blank">
          {youtubeURL && '유튜브 시연영상 보러가기'}
        </a>
        <div className="flex flex-wrap my-1">
          {tag.map((tagData) => {
            return (
              <span className="tag" key={tagData.id}>
                {tagData.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
