import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1 className='my-10'>Telefone: 99999-9999</h1>
            <h1 className='my-10'>E-mail: sfm@sfm.com</h1>
        </div>
    )
}

export default Contato

