import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
        <SignUp/>
    </div>
  )
}

export default page