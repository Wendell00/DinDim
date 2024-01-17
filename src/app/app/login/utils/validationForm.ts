import {z} from 'zod'

const emailValidation = z.object({
    email: z.string().email()
});

const passwordValidation = z.object({
    pass: z.string().min(5).max(20)
});

const validationForm = (email: string, password: string) =>{
    try{
        emailValidation.parse({email: email})
    } catch(err){
        return 'E-mail inválido'
    }

    try{
        passwordValidation.parse({pass: password})
    } catch(err){
        const error = Object.values(err as Object)[0][0].code
        if(error == "too_small"){return 'Senha muito pequena'}
        else if(error == "too_big"){return 'Senha muito grande'}
        else {return 'Senha Inválida'}
    }

    return false
}

export default validationForm