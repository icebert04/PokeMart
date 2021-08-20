import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import PokeMart from '../public/PokeMart.png'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <nav className="border-b p-6 background">
        <Image src={PokeMart} width="180px" height="50px"/>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-red-300">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-red-300">
              Sell pokémon
            </a>
          </Link>
          <Link href="/my-pokemon">
            <a className="mr-6 text-red-300">
              My pokémon
            </a>
          </Link>
          <Link href="/trainer-dashboard">
            <a className="mr-6 text-red-300">
              Trainer Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
