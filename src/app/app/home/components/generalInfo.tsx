import PrimaryInfo from './primaryInfo'
import GeneralAmout from './generalAmount'
import GeneralCard from './generalCard'
import BillsToPay from './billsToPay'
import BiggestExpensesMonth from './biggestExpensesMonth'
import MonthSpendingLimit from './monthSpendingLimit'
import BillsToReceive from './billsToReceive'
import InvestmentTips from './investmentTips'

export default function GeneralInfo() {
  
  return (
    <>
      <div className='max-w-full desktop:max-w-[1200px] w-screen h-auto'>
        <PrimaryInfo/>
        <div className='w-full h-auto mt-[25px] flex flex-col laptop:flex-row justify-between'>
            <div className='w-[95%] laptop:w-[48%] h-auto mx-auto laptop:mx-0'>
              <GeneralAmout/>
              <BillsToPay/>
              <BillsToReceive/>
              <InvestmentTips/>
            </div>
            <div className='w-[95%] laptop:w-[48%] h-auto mt-[20px] laptop:mt-0 mx-auto laptop:mx-0'>
              <GeneralCard/>
              <BiggestExpensesMonth/>
              <MonthSpendingLimit/>
            </div>           
        </div>

      </div>
    </>
  )
}
