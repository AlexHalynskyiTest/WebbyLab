import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigation } from './navigation';

const NavBar = () => {
  return (
    <aside className="w-64 fixed left-0 top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40">
      <div className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 h-full">
        <ul className="space-y-2">
          {
            navigation.map(({ name, link, Icon}) => {
              return (
                <li key={name}>
                  <NavLink
                    to={link}
                    className={({ isActive })=>
                      "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" + (isActive ? " bg-gray-800 text-white hover:bg-gray-800" : "")
                    }
                  >
                    <svg aria-hidden="true"
                         className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <Icon />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  );
};

export default NavBar;
