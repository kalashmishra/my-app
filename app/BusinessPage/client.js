"use client"
import React, { useEffect } from 'react'

const Client = () => {
    useEffect(() => {
         localStorage.setItem("loanType", "businessLoan");
         sessionStorage.setItem("employmentType", "Self Employed");
       
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default Client
