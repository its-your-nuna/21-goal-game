import React from 'react'
import './loading.scss'
export const Loading = () => {
  return (
    <main className='loading' style={{ padding: "1rem 0" }}>
      <div className="lds-spinner"><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div>
        </div></div>
      <h2>Loading</h2>
    </main>
  )
}
