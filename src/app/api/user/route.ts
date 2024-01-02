import { NextResponse } from 'next/server';
// import database from '@/app/database/database';

// export const GET = async (request: Request) => {
//     try {
//       await database.connect();
//       return NextResponse.json({ message: 'Conectado' })
//     } catch(error) {
//       return NextResponse.json("Não conectado" + error)
//     }
//   }

// import saveUser from "@/database/controller/UserController"
import userController from '../../database/controller/UserController';

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

