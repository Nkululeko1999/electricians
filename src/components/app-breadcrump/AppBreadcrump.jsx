import React from 'react'

function AppBreadcrump(props) {

    const { heading } = props;

  return (
    <div class="container-fluid bg-breadcrumb">
      <div class="container text-center py-5" style={{maxWidth: "900px"}}>
          <h1 class="text-white mb-4 breadcrump-heading">{heading}</h1> 
      </div>
    </div>    
  )
}

export default AppBreadcrump
