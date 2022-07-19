import Router, { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
const fetcher = async (
    input: RequestInfo,
    init: RequestInit,
    ...args: any[]
) => {
    const res = await fetch(input, init);
    return res.json();
};
const cryptoApiHeaders = {
    "X-RapidAPI-Key": "c7fa8235d3msh1ddce5b747c5aa0p1da4e0jsne5df34823909",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
function Cryptodetail() {


    const router = useRouter()
    const { data, error } = useSWR(`https://coinranking1.p.rapidapi.com/coin/1`, fetcher)
    console.log(data)

    return (
        <div>Cryptodetail {router.query.id}</div>
    )
}

export default Cryptodetail