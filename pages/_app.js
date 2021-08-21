import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'
import PokeMart from '../public/PokeMart-color.png'

function MyApp({ Component, pageProps }) {
  return(
    <div>
    <section className="bg-nos">
      <nav className="border-b p-6 ">
        <Image src={PokeMart} width="200px" height="50px"/>
        <div className="flex font-bold mt-4">
          <Link href="/">
            <a className="mr-4 text-red-500 hover:text-red-400">
              Home
            </a>
          </Link>
          <Link href="/sell-pokemon">
            <a className="mr-6 text-red-500 hover:text-red-400">
              Sell pokémon
            </a>
          </Link>
          <Link href="/my-pokemon">
            <a className="mr-6 text-red-500 hover:text-red-400">
              My pokémon
            </a>
          </Link>
          <Link href="/trainer-dashboard">
            <a className="mr-6 text-red-500 hover:text-red-400">
              Trainer Dashboard
            </a>
          </Link>
        </div>
      </nav>
      </section>
      <Component {...pageProps} />
    </div>
  )
}

<style JSX>{`
  .nos {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: absolute;
  background-image: url("../public/background-pokemon.jpg");
  }
`}</style>

export default MyApp
