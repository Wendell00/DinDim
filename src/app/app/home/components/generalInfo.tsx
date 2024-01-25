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
      <div className='min-w-[1200px] w-auto h-auto'>
        <PrimaryInfo/>
        <div className='w-full h-auto mt-[25px] flex justify-between'>
            <div className='w-[48%] h-auto'>
              <GeneralAmout/>
              <BillsToPay/>
              <BillsToReceive/>
              <InvestmentTips/>
            </div>
            <div className='w-[48%] h-auto'>
              <GeneralCard/>
              <BiggestExpensesMonth/>
              <MonthSpendingLimit/>
            </div>           
        </div>

      </div>
    </>
  )
}
