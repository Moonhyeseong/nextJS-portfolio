import React from 'react';
import { useTheme } from 'next-themes';
const DatkModeToggleBtn = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="inline-flex items-center 
        bg-gray-100 
        border-0 py-1 px-3 
        focus:outline-none 
        hover:bg-gray-200 
        dark:text-slate-400 
        dark:bg-slate-700
        rounded text-base mt-4 md:mt-0"
        type="button"
        onClick={() => {
          setTheme(theme === 'dark' ? 'ligth' : 'dark');
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="invisible h-0 w-0 dark:visible dark:h-6 dark:w-6"
          fill="orange"
          viewBox="0 0 24 24"
          stroke="orange"
          strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 dark:invisible dark:h-0 dark:w-0 "
          fill="red"
          viewBox="0 0 24 24"
          stroke="red"
          strokeWidth="2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </>
  );
};

export default DatkModeToggleBtn;
