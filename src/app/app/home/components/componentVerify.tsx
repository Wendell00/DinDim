'use client'

import GeneralInfo from './generalInfo'
import { FormContext } from '@/app/contexts/infoContext'
import { useContext } from 'react';
import ChooseName from './chooseName';
import TypeGraphic from './typeGraphic';

export default function ComponentVerify() {
    const {config} = useContext(FormContext)
  
    return (
    <>
        {config == 0 ? <ChooseName/> : config == 1 ? <TypeGraphic/> : <GeneralInfo/>}
    </>
  )
}
