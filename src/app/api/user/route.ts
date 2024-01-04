import { NextResponse } from 'next/server';

import userController from '../../database/controller/UserController';
import findUser from '../../database/controller/FindUserController';

export const GET = async (req: Request) =>{
  let text = ''
  const response = await findUser()
  .then((result) =>{
    console.log(result)
    if(result == 'E-mail já cadastrado'){
      text = result
    }else{
      text = 'Não encontrado'
    }
  })

  return NextResponse.json({ error: {text} })
}

export const POST = async (req: Request) => {
  const body = await req.json()
  const response = await userController.saveUser(body)
  .then(() =>{
    console.log('Usuario Salvo com Sucesso!')
  })
  .catch((err) =>{
    console.log(err)
  })

  return new Response('ok')
}

