import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import database from '@/app/database/database';
 
export const GET = async (request: NextApiRequest) => {
  try {
    await database.connect();
    return NextResponse.json({ message: 'Conectado' })
  } catch(error) {
    return NextResponse.json("Não conectado" + error)
  }
}