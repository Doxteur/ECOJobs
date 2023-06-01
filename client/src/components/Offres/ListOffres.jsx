import React, { useEffect, useState } from "react";
import FilterOrder from "./FilterOrder";
import Table from "./Table";

function ListOffres() {
  const [filteredOffres, setFilteredOffres] = useState([]);
  const [offres, setOffres] = useState([
    {
      id: 1,
      entreprise: "Upcycle",
      poste: "Développeur Front-End React",
      contrat: "CDD",
      salaire: "25k - 30k",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg",
    },
    {
      id: 2,
      entreprise: "Dervenn",
      poste: "Designer Web",
      contrat: "CDI",
      salaire: "45k - 60k",
      image: "https://static.actu.fr/uploads/2020/10/z-logo-dervenn-1024.jpg",
    },
    {
      id: 3,
      entreprise: "biosphere",
      poste: "Chef de projet",
      contrat: "CDI",
      salaire: "45k - 60k",
      image:
        "https://www.biosphere-nettoyage.fr/wp-content/uploads/nettoyage-rennes-service-ecologique-300x300.png",
    },
    {
      id: 4,
      entreprise: "Dilepix",
      poste: "Lead Dev React",
      contrat: "Alternance",
      salaire: "10k - 20k",
      image:
        "https://storage.gra.cloud.ovh.net/v1/AUTH_5b52b2f4ab714e20821799649e702a79/production-hubdigital-medias/awsS3-uploads/df6ca32c567d12f1ec0f7b219eaa2b8a",
    },
    {
      id: 5,
      entreprise: "Urbanfarm",
      poste: "Développeur Back-End NodeJS",
      contrat: "CDI",
      salaire: "45k - 60k",
      image:
        "data:image/jpeg;base64,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",
    },
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // filter
    const filteredOffres = offres.filter((offre) => {
      // filter on everything
      return (
        offre.entreprise.toLowerCase().includes(search.toLowerCase()) ||
        offre.poste.toLowerCase().includes(search.toLowerCase()) ||
        offre.contrat.toLowerCase().includes(search.toLowerCase()) ||
        offre.salaire.toLowerCase().includes(search.toLowerCase())
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
            />
            {/* More Offers */}
            { search === "" && (
            <div className="w-full p-1 m-4 text-center border border-slate-400 shadow-md hover:shadow-lg rounded-md cursor-pointer">
              <h1 className="font-bold">9 offres +</h1>
            </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ListOffres;
