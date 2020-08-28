import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />

      <div>
        <p className='text-center my-20'>
          Projeto realizado durante a Semana FullStack Master, ministrada por Túlio Faria.<br />
          Muito conhecimento adquirido em tão pouco tempo, com uma didática muito boa. Estou muito satisfeito.<br />
        </p>
      </div>
    </div>
  )
}

export default Sobre