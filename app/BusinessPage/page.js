import React from 'react'
import heading from "../../public/headings.json"
import Client from './client';

export const metadata = {
    title: heading.businessPage.title,
    description: heading.businessPage.description,
    keywords:heading.businessPage.keywords,
    alternates:{ canonical:  heading.businessPage.canonical}
  };
function BusinessPage() {

  return (
    <>
    <Client />
    <div style={{marginTop:'150px'}}>BusinessPage</div>
    </>
  )
}

export default BusinessPage