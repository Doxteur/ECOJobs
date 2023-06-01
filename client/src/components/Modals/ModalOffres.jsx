import React from "react";
import Modal from "react-modal";
import { AiFillDollarCircle } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function ModalOffres({ modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-center">
        <img
          class="h-36 w-36 m-auto rounded-full ring-2 ring-white dark:ring-gray-800"
          src="https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg"
          alt="Description"
        />
        <div className="flex align-middle items-center justify-center m-3">
          <h1 className="text-2xl font-bold">Upcycle</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12.585L3.707 16l1.414-7.071L1 7.071l7.071-.999L10 0l1.929 6.071 7.071.999-4.121 4.929L16.293 16z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-500 align-middle items-center">4.5</p>
        </div>
        <p className="text-gray-500 w-2/5 m-auto text-left">
          <span className="font-bold">Votre Job :</span> <br />
          Vous organisez des voyages de rêve individuels pour nos clients et
          permettez à nos clients de vivre des expériences de voyage
          inoubliables Vous êtes responsable de la qualification des demandes
          des clients et de la vente de voyages, cela passe par la collecte des
          besoins, la planification d'un voyage sur mesure jusqu'à la conclusion
          de la vente Nos propres outils vous accompagnent dans la planification
          et la réservation de voyages Vous relevez des objectifs de vente
          mensuels ambitieux{" "}
        </p>
        {/* Salaire */}
        <div className="flex justify-center items-center p-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black mx-2">
            CDD
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            20k - 25k
            <AiFillDollarCircle className="align-middle items-center" />
          </span>
        </div>
        <button className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Je postule
        </button>
      </div>
    </Modal>
  );
}

export default ModalOffres;
