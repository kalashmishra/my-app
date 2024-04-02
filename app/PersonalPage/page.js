import React from 'react'
import heading from "../../public/headings.json"
export const metadata = {
    title: heading.personalLoan.title,
    description: heading.personalLoan.description,
    keywords:heading.personalLoan.keywords,
    alternates:{ canonical:  heading.personalLoan.canonical}
  };
function PersonalPage() {
  return (
    <div style={{marginTop:'150px'}}>PersonalPage</div>
  )
}

export default PersonalPage