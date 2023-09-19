'use client';
import { useState } from 'react';

export default function Index() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Partners', path: 'javascript:void(0)' },
    { title: 'Customers', path: 'javascript:void(0)' },
    { title: 'Team', path: 'javascript:void(0)' },
  ];

  return (
    <nav className="relative mx-auto max-w-screen-xl items-center px-4 pt-5 sm:px-8 md:flex md:space-x-6">
      <div className="flex justify-between">
        <a href="javascript:void(0)">
          <img
            src="https://www.floatui.com/logo.svg"
            width={120}
            height={50}
            alt="Float UI logo"
          />
        </a>
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`mt-12 flex-1 justify-between md:mt-0 md:flex md:text-sm md:font-medium ${
          state
            ? 'absolute inset-x-0 border-b bg-white px-4 md:static md:border-none'
            : 'hidden'
        }`}
      >
        <div className="items-center space-y-5 md:ml-12 md:flex md:space-x-6 md:space-y-0">
          {navigation.map((item, idx) => (
            <li className="text-gray-500 hover:text-indigo-600" key={idx}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </div>
        <li className="order-2 py-5 md:py-0">
          <a
            href="javascript:void(0)"
            className="block rounded-lg bg-indigo-600 px-5 py-2 text-center font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 md:inline md:py-3"
          >
            Get started
          </a>
        </li>
      </ul>
    </nav>
  );
}
