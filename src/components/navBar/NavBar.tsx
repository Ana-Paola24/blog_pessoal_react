import React from 'react'

function NavBar() {
  return (
    <>
      <div className='w-full bg-rose-900 text-white flex justify-center py-4'>
        <div className='container flex justify-between text-lg'>
            <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>
            <div className='flex gap-4'>
                <div className='hover:underline'>Postagens</div>
                <div className='hover:underline'>Temas</div>
                <div className='hover:underline'>Cadastrar Tema</div>
                <div className='hover:underline'>Perfil</div>
                <div className='hover:underline'>Sair</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default NavBar