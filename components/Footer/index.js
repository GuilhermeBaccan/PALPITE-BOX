import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 text-center font-bold text-white'>
            <div className='container mx-auto'>
                Projeto desenvolvido por: {' '}
                <a className='hover:text-gray-900' href='https://www.facebook.com/guilherme.baccan.7/'>Guilherme Baccan</a> / {' '}
                <a className='hover:text-gray-900' href='https://www.linkedin.com/in/guilherme-baccan-5a29801b3/'>Linkedin</a> / {' '}
                <a className='hover:text-gray-900' href='https://github.com/GuilhermeBaccan'>Github</a>
                <div className='mt-2' >
                    <img className='inline p-4' src='/logo_semana_fsm.png' />
                    <img className='inline p-4' src='/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer