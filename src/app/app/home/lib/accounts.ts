import { FaWallet } from "react-icons/fa";
import { IoFastFood, IoRestaurant } from "react-icons/io5";
import { FaServicestack, FaHouse, FaSchool } from "react-icons/fa6";
import { FaShoppingCart, FaMoneyBill } from "react-icons/fa";
import { AiFillSkin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

// Definição do tipo para os bancos
type Bank = {
    name: string;
    icon: typeof FaWallet; // JSX.Element é o tipo de elemento React
};

type Categories = {
    name: string;
    icon: typeof FaWallet
}

// Lista de bancos
const AccountsBankList: Bank[] = [
    {
        name: 'Conta inicial',
        icon: FaWallet,
    },
];

const CategoriesExpense: Categories[] = [
    {
        name: 'Alimentação',
        icon: IoFastFood
    },
    {
        name: 'Assinaturas e serviços',
        icon: FaServicestack
    },
    {
        name: 'Bares e restaurantes',
        icon: IoRestaurant
    },
    {
        name: 'Casa',
        icon: FaHouse
    },
    {
        name: 'Compras',
        icon: FaShoppingCart
    },
    {
        name: 'Cuidados Pessoais',
        icon: AiFillSkin
    },
    {
        name: 'Dividas e empréstimos',
        icon: FaMoneyBill
    },
    {
        name: 'Educação',
        icon: FaSchool
    },
    {
        name: 'Outros',
        icon: GiHamburgerMenu
    },
]

// Exporta o objeto contendo a lista de bancos
export const accountsBank = AccountsBankList;
export const categoriesExpense = CategoriesExpense
