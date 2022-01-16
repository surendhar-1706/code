import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Navbar = () => {
    return ( 
            
    <nav>
    <Head>
        <title>Ninja blog</title>
    </Head> 
        <div className ="logo">
          {/* <Image src='/Mikasa.jpg' width={128} height={77}/>    
              */}    <h2>Ninja blog</h2></div>
         
        <Link href="/">
        <a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href ="/ninjas"><a>Ninja list</a></Link>
    </nav> );
}
 
export default Navbar;