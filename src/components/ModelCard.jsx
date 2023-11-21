// ModelCard.js
import React from "react";

const ModelCard = ({ model }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={model.img}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {model.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          à partir de {model.price} €
        </p>
        <p className="mb-3 font-bold text-black-700 dark:text-gray-400">
          à partir de {model.rent} €/mois*
        </p>
        <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
          Le loyer est arrondi à l'euro supérieur. En LLD sur 49 mois avec un
          premier loyer de 12 500,00 € et 48 loyers de 698,58 €.
        </p>
        <a className="underline" href="#">
          Personnalizer votre offre de financement
        </a>
        <p className="row mb-3 font-bold text-black-700 dark:text-gray-400">
          Classe énergitique
        </p>
        <button class="transition ease-in-out delay-150 bg-black hover:bg-blue-300 duration-200 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          CONFIGURER
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
