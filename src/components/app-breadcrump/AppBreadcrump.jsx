import React from 'react'

function AppBreadcrump(props) {

    const { heading } = props;

  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center" style={{maxWidth: "900px"}}>
          <h1 className="text-white mb-4 breadcrump-heading">{heading}</h1> 
      </div>
    </div>    
  )
}

export default AppBreadcrump
