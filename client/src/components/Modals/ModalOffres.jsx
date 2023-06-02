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

function ModalOffres({ modalIsOpen, setIsOpen, offreChoisie }) {
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
          className="h-36 w-36 m-auto rounded-full ring-2 ring-white dark:ring-gray-800"
          src={offreChoisie.company.image}
          alt="Description"
        />
        {offreChoisie.company.values.map((value) => (
          <span className="inline-flex mt-4 items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black mx-2" 
          key={value.id}
          >
            {value.name}
          </span>
        ))}

        <div className="flex align-middle items-center justify-center m-3">
          {/* <h1>{offreChoisie.company.values}</h1> */}

          <h1 className="text-2xl font-bold">{offreChoisie.company.name}</h1>
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
          {offreChoisie.description}
        </p>
        {/* Salaire */}
        <div className="flex justify-center items-center p-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-black mx-2">
            {offreChoisie.contractType.name}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            {offreChoisie.salary}
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
