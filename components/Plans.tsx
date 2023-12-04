import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
import { CheckIcon } from '@heroicons/react/24/solid';
import { Product } from '@stripe/firestore-stripe-payments';

interface Props {
  products: Product[]
}

function Plans({ products }: Props) {
    const {logout} = useAuth()

  return (
    <div>
        <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='border-b border-white/10 bg-[#141414]'>
        <Link href="/">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={100}
                height={100}
                alt="picture2"
            />
        </Link>

        <button className='text-lg font-medium hover:underline' onClick={logout}>Sign Out</button>
      </header>

      <main className='max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10'>
        <h1 className='mb-3 text-3xl font-medium'>Choose the plan that's right for you</h1>
        
        <ul>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                Ad-free.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                just for you.
            </li>
            <li className="flex items-center gap-x-2 text-lg">
                <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                your plan anytime.
            </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
            <div className='flex w-full items-center justify-center self-end md:w-3/5'>
                
            </div>

            {/* Table */}

            <button>Subscribe</button>
        </div>

      </main>
    </div>
  )
}

export default Plans