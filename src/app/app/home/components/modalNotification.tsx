import { IoMdArrowDropup } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";

export default function ModalNotification() {
    return(
        <>
            <div className="w-[260px] h-[150px] bg-[#ffffff] dark:bg-[#333] absolute top-[50px] rounded-lg right-[-6px] 
            flex flex-col items-center p-6 shadow-xl">
                    <IoMdArrowDropup className="absolute top-[-22px] text-[#fff] text-[38px] right-[0px]"/>
                    <RiMessage2Fill className="text-primary text-[40px] dark:text-[#fff]"/>
                    <p className="font-semibold text-[#333] text-center dark:text-[#fff]">Não há notificações no momento</p>
            </div>
        </>
    )
}