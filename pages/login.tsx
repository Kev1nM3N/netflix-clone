import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

//laparapluie@comodormail.com
//1080pg

interface Inputs {
  email: string
  password: string
}

function Login2() {
  const [login, setLogIn] = useState(false)
  const { signIn, signUp } = useAuth()
  
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
      if (login){
        await signIn(email, password)
      } else{
        await signUp(email, password)
      }
  }

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

        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={100}
            height={100}
            alt="picture2"
        />

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0
            md:max-w-md md:px-14">
            <h1 className="text-4xl font-semibold">Sign In</h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input type="email" placeholder="Email" className="input" {...register("email", {required: true})}/>
                    {errors.email && (<p className="p-1 text-[13px] font-light  text-orange-500">Please enter a valid email</p>)}
                </label>
                <label className="inline-block w-full">
                    <input type="password" placeholder="Password" className="input" {...register("password", {required: true})}/>
                    {errors.password && (<p className="p-1 text-[13px] font-light  text-orange-500">Please enter a valid password</p>)}
                </label>
            </div>

            <button className="w-full rounded bg-[#e50914] py-3 font-semibold" 
            onClick={() => setLogIn(true)}>Sign In</button>

            <div className="text-[gray]">
              New to Netflix?{` `}
              <button type="submit" className="text-white hover:underline"
              onClick={() => setLogIn(false)}>Sign Up Now</button>
            </div>
        </form>
    </div>
  );
}

export default Login2;
