import React, { useState } from 'react'

import { useGetCryptosQuery } from '../../services/cryptoapi';

function CryptoHome() {
    const { data, isFetching } = useGetCryptosQuery('/coins');
    if (isFetching) return <div>Loading</div>
    const [cryptos, setcryptos] = useState(data?.data?.coins)
    console.log(cryptos)
    return (
        <div>
            {
                cryptos.map((currency: any) => {
                    return (
                        <div>
                            {currency.name}
                        </div>)
                })
            }

        </div>
    )
}

export default CryptoHome