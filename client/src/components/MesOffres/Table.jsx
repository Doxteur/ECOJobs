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
                src="https://pbs.twimg.com/media/EEHJGV0U8AYsP8G?format=png&name=4096x4096"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">Kolectou</div>
              <div className="text-gray-400">Kolectou@Kolectou.com</div>
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
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-700">Mobility Tech Green</div>
              <div className="text-gray-400">Mobi@tech.com</div>
            </div>
          </th>
          <td className="px-6 py-4">Développeur Back-End Laravel</td>
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