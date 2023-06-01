import React, { useState } from "react";
import ModalOffres from "../Modals/ModalOffres";

function Table({ filteredOffres, offres }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalOffres modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mx-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Entreprise
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Poste
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Contrat
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Salaire
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredOffres &&
              filteredOffres.map((offre) => (
                <tr key={offre.id} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={offre.image}
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {offre.entreprise}
                      </div>
                      <div className="text-gray-400">
                        {
                          offre.entreprise.split(" ")[
                            offre.entreprise.split(" ").length - 1
                          ]
                        }
                        @sailboatui.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{offre.poste}</td>
                  <td className="px-6 py-4 text-center">
                    {offre.contrat === "CDI" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-600">
                        {offre.contrat}
                      </span>
                    )}
                    {offre.contrat === "CDD" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-600">
                        {offre.contrat}
                      </span>
                    )}
                    {offre.contrat === "Stage" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">
                        {offre.contrat}
                      </span>
                    )}
                    {offre.contrat === "Alternance" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-yellow-600">
                        {offre.contrat}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {offre.salaire.split(" ")[0] === "10k" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                        {offre.salaire}
                      </span>
                    )}
                    {offre.salaire.split(" ")[0] === "25k" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                        {offre.salaire}
                      </span>
                    )}
                    {offre.salaire.split(" ")[0] === "30k" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
                        {offre.salaire}
                      </span>
                    )}
                    {offre.salaire.split(" ")[0] === "45k" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {offre.salaire}
                      </span>
                    )}
                  
                  </td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center gap-1 rounded-lg bg-green-300 px-3 py-2 text-xs  text-green-600 font-bold  cursor-pointer"
                    >
                      Plus
                    </span>
                  </td>
                </tr>
              ))}
            {filteredOffres.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <h1 className="font-bold text-gray-400">
                    Aucune offre ne correspond à votre recherche
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    </>
  );
}

export default Table;
