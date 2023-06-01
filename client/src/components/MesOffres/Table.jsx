import React from 'react'

function Table() {
  return (
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
          <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">Upcycle</div>
              <div className="text-gray-400">jobs@sailboatui.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Développeur Front-End React</td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black">
              CDD
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              45k - 60k
            </span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-lg bg-green-300 px-3 py-2 text-xs  text-green-600 font-bold">
              Accepté
            </span>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://static.actu.fr/uploads/2020/10/z-logo-dervenn-1024.jpg"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">DERVENN</div>
              <div className="text-gray-400">dervenn@gmail.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Designer Web</td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-bold text-black">
              CDI
            </span>
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              45k - 60k
            </span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-lg bg-yellow-300 px-3 py-2 text-xs  text-yellow-600 font-bold">
              En Attente
            </span>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://www.biosphere-nettoyage.fr/wp-content/uploads/nettoyage-rennes-service-ecologique-300x300.png"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">Biosphere</div>
              <div className="text-gray-400">biosphere@gmail.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Développeur Angular.js</td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-black">
              Alternance
            </span>
          </td>

          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
              10k - 20k
            </span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-lg bg-green-300 px-3 py-2 text-xs  text-green-600 font-bold">
              Accepté
            </span>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">SoonInfo</div>
              <div className="text-gray-400">SoonInfo@sailboatui.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Développeur Front-End React</td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black">
              CDD
            </span>
          </td>

          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              45k - 60k
            </span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-lg bg-red-300 px-3 py-2 text-xs  text-red-600 font-bold">
              Refusé
            </span>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">Upcycle</div>
              <div className="text-gray-400">jobs@sailboatui.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Développeur Front-End React</td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black">
              CDD
            </span>
          </td>

          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              45k - 60k
            </span>
          </td>
          <td className="px-6 py-4 text-center">
            <span className="inline-flex items-center gap-1 rounded-lg bg-red-300 px-3 py-2 text-xs  text-red-600 font-bold">
              Refusé
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>  )
}

export default Table