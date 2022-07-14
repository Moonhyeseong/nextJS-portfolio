import Animation from './animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자 문혜성입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          기업의 미션과 이를 통해 실현 하고자 하는 비전을 이해하고자 합니다. 그리고, 이와 같은 이해를 통해 얻는 동기부여와 성취감이 개발자로서 성장의 원동력이
          됩니다. 오직 개발 뿐만이 아니라 사업에 대한 관심을 바탕으로 개발에 참여하는 제품의 가치에 주목합니다. 마지막으로 함께하는 동료들에게 믿음을 주는
          개발자가 되고 싶습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
          <Link href="https://excellent-plane-237.notion.site/1771ac6d287445ab99afee52feaf54dd">
            <a className="btn-project" target="_blank">
              노션 이력서 바로가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
