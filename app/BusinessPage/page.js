import React from 'react'
import heading from "../../public/headings.json"

export const metadata = {
    title: heading.businessPage.title,
    description: heading.businessPage.description,
    keywords:heading.businessPage.keywords,
    alternates:{ canonical:  heading.businessPage.canonical}
  };
function BusinessPage() {
  return (
    <div style={{marginTop:'150px'}}>BusinessPage</div>
  )
}

export default BusinessPage