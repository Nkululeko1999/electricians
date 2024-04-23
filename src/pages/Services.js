import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppBreadcrump from "../components/app-breadcrump/AppBreadcrump";
import ServiceCard from "../components/cards/ServiceCard";
import { servicesData } from "../data/ServicesData";

export default function Services() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <AppBreadcrump heading="Services" />

      <div className="services-header my-4">
        <div>
          <h3 className="mb-3 text-center">What We Do </h3>
        </div>
        <h1 className={`text-center ${screenWidth < 992 ? "w-75 mb-2 display-6" : "w-50 mb-4 display-5 "}`}>
          Multitude of Services Provided by Our Expert Team
        </h1>
        <p className="mb-0 w-75 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          deleniti amet at atque sequi quibusdam cumque itaque repudiandae
          temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
          saepe in ab? Repellat!
        </p>
      </div>

      <div className="container services-container">
        <div class="row g-4 justify-content-center">
          {servicesData.map((service) => (
            <div key={service.id} className="col-12 col-md-3">
              <ServiceCard
                id={service.id}
                heading={service.heading}
                imgSrc={service.imgSrc}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
