import ReactPlayer from "react-player";
import AlpineVideo from "../assets/video/video1.mp4";

const Video = () => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="col-span-5">
        <ReactPlayer
          className=""
          autoPlay
          playing
          muted
          url={AlpineVideo}
          width="100%"
          height="100%"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center text-justify">
        <h1 className="text-center text-blue-500">CHALLENGE</h1>
        <h2 className="text-3xl font-bold mb-4">
          DEPUIS 2013, LA RENAISSANCE AU SOMMET
        </h2>
        <p className="mb-4">
          Après 35 ans d'absence, Alpine réapparaît sur les circuits en 2013 et
          dans le commerce en 2017 suite au très attendu Show-Car Alpine Vision
          ! Après tant d'années d'absence, la nouvelle Alpine peut-elle
          reprendre sa course victorieuse ?
        </p>
        <p className="mb-4">
          En 2021, le programme d'Alpine motorsport monte en puissance avec son
          arrivée dans le championnat du monde de Formule 1 sous le nom d'Alpine
          F1 Team. une consécration sportive pour les voitures au A fléché qui
          se sont toujours illustrées sur les circuits du monde entier pour
          accéder à la Formule 1.
        </p>
        <p className="mb-4">
          Sans oublier leur montée dans la catégorie reine (Hypercar) du
          championnat du monde d'endurance FIA WEC, sous le nom d'Alpine Elf
          Endurance Team, grâce à la ténacité de Philippe Sinault, patron de
          l'écurie française !
        </p>
      </div>
    </div>
  );
};

export default Video;
