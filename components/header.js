import Link from 'next/link';
import DatkModeToggleBtn from './datkModeToggleBtn';
export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">π» νλ‘ νΈμλ κ°λ°μ λ¬Ένμ±</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">ν</a>
            </Link>
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">νλ‘μ νΈ</a>
            </Link>
            <a href="https://excellent-plane-237.notion.site/1771ac6d287445ab99afee52feaf54dd" target="blank" className="mr-5 hover:text-gray-900">
              About Me
            </a>
          </nav>
          <DatkModeToggleBtn />
        </div>
      </header>
    </>
  );
}
