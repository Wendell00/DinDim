import { NextResponse } from 'next/server';
import findUser from '@/app/database/controller/FindUserController';

export const GET = async (req: Request) =>{
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.href);
    const email = searchParams.get("email");
    let text = ''
    const response = await findUser(email as string)
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