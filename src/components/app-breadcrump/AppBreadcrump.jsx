import React from 'react'

function AppBreadcrump(props) {

    const { heading } = props;

  return (
    <div className='container-fluid breadcrump-container'>
      <div className='container flex justify-content-center items-center'>
        <h3>{heading}</h3>
      </div>
    </div>
  )
}

export default AppBreadcrump
