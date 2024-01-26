import { accountsBank } from "../../lib/accounts";
import { FaWallet } from "react-icons/fa";

type SelectedAccountType = (account: { name: string; icon: typeof FaWallet }) => void;

type SetModalAccount = (newValue: boolean) => void;
type SetTextAccount = (newValue: string) => void;

interface SelectedAccountProps {
    setSelectedAccount: SelectedAccountType;
    setModalAccount: SetModalAccount;
    handleAccount: SetTextAccount
}

export default function AccountsListExpense(props: SelectedAccountProps){
    return(
        <div className="w-[200px] h-[110px] absolute top-[80px] left-0 bg-[#fff] border border-[#ccc]">
            <div className="w-full h-[30px] bg-[#333] flex items-center px-4">
                <p className="font-medium text-[#fff] text-[15px]">Contas</p>
            </div>
            <ul className="w-full flex flex-col">
                {accountsBank.map((bank, index) => (
                    <li key={index} className="flex w-full cursor-pointer hover:bg-[#eee] items-center"
                        onClick={() => {props.setSelectedAccount({
                            name: bank.name,
                            icon: <bank.icon/>
                        })
                        props.handleAccount(bank.name)
                        props.setModalAccount(false)
                        }}
                        >
                        <div className="w-[30px] h-[30px] flex items-center justify-center text-[20px]">
                            <bank.icon/>
                        </div>
                        {bank.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}