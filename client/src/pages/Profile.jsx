import React from "react";
import Sidebar from "../components/Sidebar";
import { AiOutlineFileDone } from "react-icons/ai";
//RxLetterCaseUppercase
import {RxLetterCaseUppercase} from "react-icons/rx";

function Profile() {
  return (
    <div className="relative bg-green-50 overflow-hidden max-h-screen ">
      <Sidebar />
      <div className="bg-white m-10 ">
        <div className="container mx-auto my-5 p-5 ">
          <div className="md:flex no-wrap md:-mx-2">
            <div className="w-full md:w-3/12 md:mx-2 ">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  John Doe
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  Etudiant
                </h3>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  Bonjour, je suis un étudiant en alternance à ynov campus
                  rennes, je suis actuellement en 3ème année de bachelor
                  informatique.
                </p>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Statut</span>
                    <span className="ml-auto">
                      <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Membre depuis</span>
                    <span className="ml-auto">01 Nov , 2023</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">A propos</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Prénom</div>
                      <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nom</div>
                      <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Sex</div>
                      <div className="px-4 py-2">Female</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Numéro.</div>
                      <div className="px-4 py-2">+33 694200112</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Adresse</div>
                      <div className="px-4 py-2">
                        42 Rue du Capitaine Maignan, 35000 Rennes
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          jane@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Date de naissance
                      </div>
                      <div className="px-4 py-2">24/04/2001</div>
                    </div>
                  </div>
                </div>
                {/* Cv and letter */}
                <div className="flex justify-center items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ">
                  <div className="bg-white border mx-4 border-black shadow-md px-10 py-2 text-center rounded-lg">
                    <AiOutlineFileDone size={30} className="m-auto"/>
                    <h1 clasz>CV</h1>
                    <p className="text-sm">200kb</p>
                  </div>
                  <div className="bg-white border mx-4 border-black shadow-md px-10 py-2 text-center rounded-lg">
                    <RxLetterCaseUppercase size={30} className="m-auto" />
                    <h1 >Lettre</h1>
                    <p className="text-sm">200kb</p>
                  </div>
                </div>
              </div>

              <div className="my-8"></div>

              {/* la */}
              <div className="bg-white p-3 shadow-sm rounded-sm px-10">
                <div className="grid grid-cols-2 ">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Stage Bts Entreprise Aqua Doe.
                        </div>
                        <h1 className="text-sm">Développeur React.js</h1>
                        <div className="text-gray-500 text-xs">
                          Mars 2020 - Juin 2020
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Bachelor Informatique (Ynov Rennes)
                        </div>
                        <div className="text-gray-500 text-xs">
                          Septembre 2022 - Aujourdhui
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">BTS SIO (Redon)</div>
                        <div className="text-gray-500 text-xs">
                          Septembre 2019 - Juin 2021
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
