import { Carousel, Typography, Button } from "@material-tailwind/react";

//IMAGES
import Alpine110 from "../assets/Images/AlpineA110.jpg";
import AlpineR from "../assets/Images/AlpineR.jpg";

export function CarouselWithContent() {
  return (
    <Carousel className="">
      <div className="relative h-full w-full">
        <img
          src={Alpine110}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              A110 S ENSTONE EDITION
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Crafted in Enstone, Fabriquée à Dieppe
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Decouvrir
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={AlpineR}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/20">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              A110 R
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              R for Radical*
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Decouvrer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselWithContent;
