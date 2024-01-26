 import {LuX} from 'react-icons/lu'
 import { useState, useContext } from 'react';
 import AccountsListExpense from './accountsListExpense'
 import { FaWallet } from "react-icons/fa";
 import { FaPaperclip } from "react-icons/fa6";
 import { MdInsertComment, MdLoop } from "react-icons/md";
 import { IoPricetag } from "react-icons/io5";
 import { IoMdCheckmark } from "react-icons/io";
 import {useForm} from 'react-hook-form'
import CategoriesListExpense from './categoriesListExpense';
import { FormContext } from '@/app/contexts/infoContext';

 type SetModalExpense = (newValue: boolean) => void;

 interface AddExpenseProps {
  setModalExpense: SetModalExpense;
}

export default function AddExpense(props: AddExpenseProps){
  const [value, setValue] = useState<number>(0);
  const [modalAccount, setModalAccount] = useState(false)
  const [modalCategories, setModalCategories] = useState(false)
  const [textAccount, setTextAccount] = useState('')
  const [textCategories, setTextCategories] = useState('')
  const [textValue, setTextValue] = useState(0)
  const {listExpense, setListExpense} = useContext(FormContext)

  const [selectedAccount, setSelectedAccount] = useState({
    name: '',
    icon: FaWallet // Supondo que FaWallet seja um ícone do React
  });

  const [selectedCategories, setSelectedCategories] = useState({
    name: '',
    icon: FaWallet // Supondo que FaWallet seja um ícone do React
  });

  const {register,
    handleSubmit} = useForm({
      mode: 'all'
  })

  async function handleValidationForm(data: any){
    const dataInput = new Date(data.date);
    const dataFormated = dataInput.toLocaleDateString('pt-BR');

    setListExpense([...listExpense, {
      description: data.description,
      value: textValue,
      data: dataFormated,
      account: textAccount,
      categorie: textCategories
    }]);

  }
  
  const handleAccount = (text: string) => {
    setTextAccount(text)
  };

  const handleCategories = (text: string) => {
    setTextCategories(text)
  };

  // Formatar o valor para exibir como dinheiro (ex: 0.00)
  const formattedValue = (value / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // Remover todos os caracteres não numéricos, exceto ponto (.)
    const sanitizedValue = inputValue.replace(/[^\d.]/g, '');
    // Converter a string formatada para número
    const numberValue = parseFloat(sanitizedValue);
  
    // Verificar se o valor é um número válido
    if (!isNaN(numberValue)) {
      // Atualizar o estado com o valor inserido
      setValue(numberValue);
      const result = (numberValue / 100)
      setTextValue(result)
    }
  };
    return (
      <>
        <div className="w-screen h-screen absolute bg-[#222222cc] z-50 top-0 right-0 flex justify-center items-center overflow-y-auto">
            <div className="w-[490px] h-[519px] bg-[#fff] rounded-lg relative">
                <LuX className="absolute top-[15px] right-[15px] text-[28px] text-[#888] cursor-pointer"
                onClick={()=> props.setModalExpense(false)}/> 
                <div className='px-16 py-12 w-full h-full flex flex-col'>
                    <p className='font-semibold text-[16px]'>Nova despesa</p>
                    <form action="" onSubmit={handleSubmit(handleValidationForm)} className='w-full h-auto flex flex-col'>
                      <label htmlFor="" className='font-medium text-[#888] text-[15px] mt-[20px]'>Descrição</label>
                      <input type="text" className='w-full h-[25px] border-[2px] border-[#eee] rounded-md py-4' {...register('description')}/>
                      <div className='w-full h-auto flex justify-between'>
                        <div className='w-[45%] h-auto flex flex-col'>
                          <label htmlFor="" className='font-medium text-[#888] text-[15px] mt-[20px]'>Valor</label>
                          <input         
                          type="text"
                          id="moneyInput"
                          value={formattedValue}
                          onChange={handleChange} 
                          className='w-[90%] h-[25px] border-[2px] border-[#eee] rounded-md py-4 px-2'/>
                        </div>
                        <div className='w-[45%] h-auto flex flex-col'>
                          <label className='font-medium text-[#888] text-[15px] mt-[20px]'>Data</label>
                          <input type="date" id="data" className='w-[100%] h-[25px] border-[2px] border-[#eee] rounded-md py-4 px-2'
                          {...register('date')}/>
                        </div>
                      </div>
                      <div className='w-full h-auto flex justify-between'>
                        <div className='w-[45%] h-auto flex flex-col relative'>
                          <label htmlFor="" className='font-medium text-[#888] text-[15px] mt-[20px]'>Conta/Cartão</label>
                          <input         
                          type="undefined"
                          className='w-[90%] h-[25px] border-[2px] border-[#eee] rounded-md py-4 pl-[35px] text-[14px] '
                          value={selectedAccount.name}
                          onClick={()=> {
                            setModalAccount(!modalAccount)
                            }}/>
                          <div className='absolute top-[53px] left-[11px] text-[18px]'>
                            {selectedAccount.icon}
                          </div>
                          {modalAccount && (<AccountsListExpense 
                          setSelectedAccount={setSelectedAccount} setModalAccount={setModalAccount}
                          handleAccount={handleAccount}/>)}
                        </div>
                        <div className='w-[45%] h-auto flex flex-col relative'>
                          <label htmlFor="" className='font-medium text-[#888] text-[15px] mt-[20px]'>Categoria</label>
                          <input         
                          type="undefined"
                          className='w-[90%] h-[25px] border-[2px] border-[#eee] rounded-md py-4 pl-[35px] text-[14px] '
                          value={selectedCategories.name}
                          onClick={()=> {
                            setModalCategories(!modalCategories)
                          }}/>
                          <div className='absolute top-[53px] left-[11px] text-[18px]'>
                            {selectedCategories.icon}
                          </div>
                          {modalCategories && (<CategoriesListExpense 
                          setSelectedCategories={setSelectedCategories} setModalCategories={setModalCategories}
                          handleCategories={handleCategories}/>)}
                        </div>
                      </div>
                      <div className='w-full h-auto flex justify-between mt-[30px]'>
                          <div className='w-[60px] h-[110px] flex flex-col items-center'>
                            <div className='w-[50px] h-[50px] border text-[24px] text-[#777] border-[#777] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#eee]'>
                              <MdLoop/>
                            </div>
                            <p className='font-medium text-[#888] text-[15px] mt-[5px]'>Repetir</p>
                          </div>
                          <div className='w-[60px] h-[110px] flex flex-col items-center'>
                            <div className='w-[50px] h-[50px] border text-[24px] text-[#777] border-[#777] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#eee]'>
                              <MdInsertComment/>
                            </div>
                            <p className='font-medium text-[#888] text-[15px] mt-[5px]'>Observação</p>
                          </div>
                          <div className='w-[60px] h-[110px] flex flex-col items-center'>
                            <div className='w-[50px] h-[50px] border text-[24px] text-[#777] border-[#777] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#eee]'>
                              <FaPaperclip/>
                            </div>
                            <p className='font-medium text-[#888] text-[15px] mt-[5px]'>Anexo</p>
                          </div>
                          <div className='w-[60px] h-[110px] flex flex-col items-center'>
                            <div className='w-[50px] h-[50px] border text-[24px] text-[#777] border-[#777] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#eee]'>
                              <IoPricetag/>
                            </div>
                            <p className='font-medium text-[#888] text-[15px] mt-[5px]'>Etiqueta</p>
                          </div>
                      </div>
                      <button type='submit'
                      className='mx-auto mt-[-15px] w-[70px] h-[70px] text-[40px] flex items-center justify-center border border-[#ccc] text-[#ccc] hover:border-primary hover:text-primary rounded-full'>
                          <IoMdCheckmark/>
                      </button>
                    </form>
                </div>
            </div>
        </div>
      </>  
    )
}