import React from 'react'
import Image from 'next/image'

import { Searcher } from '../Searcher'

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-850 flex h-20 items-center justify-between relative shadow w-full">
      <div className="ml-7 flex h-16 py-2">
        <Image src="/img/logo.png" alt={'logo'} width="230" height="auto" />
      </div>
      <Searcher />
    </header>
  )
}
