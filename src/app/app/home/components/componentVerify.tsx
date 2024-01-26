'use client'

import GeneralInfo from './generalInfo'
import { FormContext } from '@/app/contexts/infoContext'
import { useContext } from 'react';
import ChooseName from './chooseName';
import TypeGraphic from './typeGraphic';

export default function ComponentVerify() {
    // config para verificar em qual etapa está na /app/home
    const {config} = useContext(FormContext)
  
    return (
    <>
        {config == 0 ? <ChooseName/> : config == 1 ? <TypeGraphic/> : <GeneralInfo/>}
    </>
  )
}
