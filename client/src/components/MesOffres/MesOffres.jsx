import React from 'react'
import FilterOrder from '../Offres/FilterOrder'
import Sidebar from '../Sidebar'
import Table from './Table'

function MesOffres() {
  return (
    <div className="relative bg-green-50 overflow-hidden max-h-screen">

        <Sidebar/>
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="p-4 font-bold text-xl mx-2">Mes offres</h1>
            <Table/>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default MesOffres