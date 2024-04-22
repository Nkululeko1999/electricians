import React, { useEffect, useState } from 'react'
import AppBreadcrump from '../components/app-breadcrump/AppBreadcrump'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { servicesData } from '../data/ServicesData';
import Footer from '../components/Footer';



export default function EachService() {

    const { id } = useParams();
    const [fetchedData, setFetchedData] = useState(null);
  
    useEffect(() => {
      // Fetch data based on the id parameter
      const data = servicesData.find(service => service?.id === parseInt(id));
      setFetchedData(data);
    }, [id]); // Run the effect whenever the id parameter changes
  
    console.log(fetchedData);

    const dataList = fetchedData?.dataList;

  return (
    <>
      <Navbar />
      <AppBreadcrump heading={`${fetchedData?.heading} Service`} />

        <div className="container-fluid pt-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="">
                            <img src={fetchedData?.imgSrc} className="img-fluid rounded w-100" style={{objectFit: "cover"}} alt="service" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="text-start mb-5">
                            <h4 className="pe-3 mb-0">{fetchedData?.heading}</h4>
                            <h1 className="display-5 mb-4">{fetchedData?.eachServiceHeading}</h1>
                            <p className="mb-4">{fetchedData?.eachServiceDescription}</p>
                            <div class="mb-4">
                                {
                                    dataList?.map((list) => (
                                        <p key={list} className="text-secondary"><i class="bi bi-check2-circle me-2 each-service-icon"></i>{list}</p>
                                    ))
                                }
                            </div>
                            <Link to='/contact-us' className="rounded-pill text-white py-2 px-5 info-btn fs-6">Request Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
