import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../typings";
import { baseUrl } from "../constants/movie";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/24/solid";


interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-screen lg:justify-center
      lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 min-h-screen w-screen">
        <Image 
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        objectFit="cover"
        alt=""
        />
      </div>

      <h1 className="text-2xl lg:text-7xl md:text-4xl max-w-4xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-2xl text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-[#f8f8f8] text-black"><PlayIcon className="h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
        <button className="bannerButton bg-[gray]/70"><InformationCircleIcon className="h-5 w-5 md:h-8 md:w-6"/>More Info</button>
      </div>
    </div>
  );
}

export default Banner;
