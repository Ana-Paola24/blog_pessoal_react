import React, { useContext } from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
  

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <div className='flex justify-center bg-rose-900 text-white'>
      <div className='container flex flex-col items-center py-4'>
          <p className='text-xl font-bold'>Blog Pessoal Generation | Copyright: {data}</p>
          <p className='text-lg'>Acesse nossas Redes Sociais</p>
          <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
          </div>
      </div>
    </div>
    )
  }
    return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer