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

