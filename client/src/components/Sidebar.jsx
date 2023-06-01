import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <aside className="inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 h-screen float-left">
      <div className="flex flex-col justify-between h-full">
        
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <h1 className="text-xl font-bold leading-none"><span className="text-green-500 mx-1">ECO</span>Jobs</h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              <li>
                <NavLink  className={`flex items-center rounded-xl font-bold text-sm  py-3 px-4`} activeClassName="active"
                  to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                  Liste d'offres
                </NavLink>
              </li>
              <li>
                <NavLink className={`flex items-center rounded-xl font-bold text-sm  py-3 px-4`}
                activeClassName="active"
                to="/myoffer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                  </svg>
                  Mes offres
                </NavLink>
              </li>
              <li>
              <NavLink className={`flex items-center rounded-xl font-bold text-sm  py-3 px-4`}
                activeClassName="active"
                to="/profile">
                  <FaUserCircle className="text-lg mr-4"/>
                  Mon Profil
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
        <NavLink className="font-bold text-sm ml-2  bg-white text-black"
           to="/login">
          <button type="button" className="mr-2 inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </button>
         Se Déconnecter</NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar