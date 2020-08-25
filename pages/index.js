import React from 'react'
import Link  from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) =>fetch(...args).then(res => res.json()) 

const Index = () => {

    const{ data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div>
            <PageTitle title='Seja bem-vindo!'/>
            <p className='mt-12 text-center'>
               O restaurante x sempre busca melhor atender seu clientes.<br/>
               Por isso, estamos sempre abertos a ouvir sua opnião.
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                     <a className='bg-blue-400 px-8 py-4 font-bold rounded-lg shadow-lg hover:shadow'> Dar opnião ou sugestão</a>
                </Link>
            </div>

            {!data && <p>Carregando...</p>}

            { !error && data && data.showCoupon &&
            <p className='my-12 text-center'>
              {data.message}
            </p>
            }

        </div>

    )
}

export default  Index 
