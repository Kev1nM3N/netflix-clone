import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

//27:42

interface Inputs {
  email: string
  password: string
}

function login() {
  const [login, setLogIn] = useState(false)
  const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);



  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black md:items-center
    md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt="picture"
      />

        <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}
        />

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0
            md:max-w-md md:px-14">
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input type="email" placeholder="Email" className="input" {...register("email", {required: true})}/>
                </label>
                <label className="inline-block w-full">
                    <input type="password" placeholder="Password" className="input" {...register("password", {required: true})}/>
                </label>
            </div>

            <button className="w-full rounded bg-[#e50914] py-3 font-semibold">Sign In</button>

            <div className="text-[gray]">
              New to Netflix?{` `}
              <button type="submit" className="text-white hover:underline">Sign Up Now</button>
            </div>
        </form>
    </div>
  );
}

export default login;
