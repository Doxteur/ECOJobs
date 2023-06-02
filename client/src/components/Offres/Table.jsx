import React, { useState } from "react";
import ModalOffres from "../Modals/ModalOffres";

function Table({ filteredOffres, offres,number }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [offreChoisie, setOffreChoisie] = useState({});

  return (
    <>
    {modalIsOpen &&
      <ModalOffres
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        offreChoisie={offreChoisie}
      />
    }
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
            // limit to 9 offers
            filteredOffres.slice(0, number).map((offre) => (
                <tr key={offre.id} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={offre.company.image}
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {offre.company.name}
                      </div>
                      <div className="text-gray-400">
                        {/* {offre.company.location} */}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{offre.name}</td>
                  <td className="px-6 py-4 text-center">
                    {offre.contractType.name === "CDI" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-green-600">
                        {offre.contractType.name}
                      </span>
                    )}
                    {offre.contractType.name === "CDD" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-bold text-yellow-600">
                        {offre.contractType.name}
                      </span>
                    )}
                    {offre.contractType.name === "Stage" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-bold text-blue-600">
                        {offre.contractType.name}
                      </span>
                    )}
                    {offre.contractType.name === "Alternance" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-yellow-600">
                        {offre.contractType.name}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {offre.salary < 25000 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                        {offre.salary.toString().slice(0, 2)} K
                      </span>
                    )}
                    {offre.salary >= 25000 && offre.salary < 30000 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span>
                        {offre.salary.toString().slice(0, 2)} K
                      </span>
                    )}
                    {offre.salary >= 30000 && offre.salary < 35000 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600"></span>
                        {offre.salary.toString().slice(0, 2)} K
                      </span>
                    )}
                    {offre.salary >= 35000 && offre.salary < 40000 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                        {offre.salary.toString().slice(0, 2)} K
                      </span>
                    )}
                    {offre.salary >= 40000 && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                        {offre.salary.toString().slice(0, 2)} K
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      onClick={() => {
                        setOffreChoisie(offre);
                        setIsOpen(true);
                      }}
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
