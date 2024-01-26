import { categoriesExpense } from "../../lib/accounts";
import { FaWallet } from "react-icons/fa";

type SelectedCategoriesType = (account: { name: string; icon: typeof FaWallet }) => void;

type SetModalCategories = (newValue: boolean) => void;

type SetTextCategories = (newValue: string) => void;

interface SelectedCategoriesProps {
    setSelectedCategories: SelectedCategoriesType;
    setModalCategories: SetModalCategories;
    handleCategories: SetTextCategories;
}

export default function CategoriesListExpense(props: SelectedCategoriesProps){
    return(
        <div className="w-[240px] h-[110px] absolute top-[80px] left-0 bg-[#fff] border border-[#ccc] overflow-auto">
            <ul className="w-full flex flex-col">
                {categoriesExpense.map((bank, index) => (
                    <li key={index} className="flex w-full cursor-pointer hover:bg-[#eee] items-center"
                        onClick={() => {props.setSelectedCategories({
                            name: bank.name,
                            icon: <bank.icon/>
                        })
                        props.handleCategories(bank.name)
                        props.setModalCategories(false)
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