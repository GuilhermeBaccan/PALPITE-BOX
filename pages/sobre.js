import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />

      <div>
        <p className='text-center my-10'>
          Projeto realizado durante a Semana FullStack Master, ministrada por Túlio Faria.
              </p>
      </div>
    </div>
  )
}

export default Sobre