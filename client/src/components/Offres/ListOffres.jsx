import React, { useEffect, useState } from "react";
import FilterOrder from "./FilterOrder";
import Table from "./Table";

function ListOffres() {
  const [filteredOffres, setFilteredOffres] = useState([]);
  const [offres, setOffres] = useState([]);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(5);


  useEffect(() => {
    fetch("http://localhost:4001/api/job-offer")
      .then((res) => res.json())
      .then((data) => {
        setOffres(data);
        setFilteredOffres(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // filter
    const filteredOffres = offres.filter((offre) => {
      // filter on everything
      return (
        offre.company.name.toLowerCase().includes(search.toLowerCase()) ||
        offre.name.toLowerCase().includes(search.toLowerCase()) ||
        offre.contractType.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredOffres(filteredOffres);
  }, [search, offres]);

  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <FilterOrder search={search} setSearch={setSearch} />
            <h1 className="p-4 font-bold text-xl mx-2">Dernières offres</h1>
            <Table
              filteredOffres={filteredOffres}
              offres={offres}
              setOffres={setOffres}
              number={number}
            />
            {/* More Offers */}
            {search === "" && number === 5 && (
              <div className="w-full p-1 m-4 text-center border border-slate-400 shadow-md hover:shadow-lg rounded-md cursor-pointer"
              onClick={() => setNumber(number + 5)}
              >
                
                <h1 className="font-bold">Voir plus d'offres</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListOffres;
