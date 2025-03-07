/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

function UserStats ({userStats} : any){
  const {user, isLoaded } = useUser();

  if(!isLoaded) {
    return (
        <div>Loading...</div>
    )
  }
  
    return (
    <div>
      userStats
    </div>
  )
}

export default UserStats
