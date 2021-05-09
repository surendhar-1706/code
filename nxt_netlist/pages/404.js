import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
            router.push("/")
        },3000)
    },[])
    return ( <div className ="not-found">
        <h1>Oooops....</h1>
        <h1>Not Found</h1>
        <Link href="/"><a>Go Back</a></Link>
    </div> );
}
 
export default NotFound;