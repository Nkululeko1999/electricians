import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppBreadcrump from "../components/app-breadcrump/AppBreadcrump";
import ServiceCard from "../components/cards/ServiceCard";
import industrialDomesticImg from "../components/repair/wiring.jpg";
import Topbar from "../components/topbar/Topbar";

export default function Services() {
  return (
    <>
      <Topbar />
      <Navbar />
      <AppBreadcrump heading="Services" />

      <div className="services-header my-5">
        <div>
          <h3 className="mb-3 text-center">What We Do </h3>
        </div>
        <h1 className="display-5 mb-4 w-50 text-center">
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
          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Industrial Commercial Domestic"
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>
          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Faults"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Maintenance"
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Generators"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Appliances"
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Complaince Testing"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="HV Equipments"
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Leads Process"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Lines Control Wiring "
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Switch Boards"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Pumps"
              imgSrc={industrialDomesticImg}
              description="Professional wiring services for residential and commercial properties."
            />
          </div>

          <div className="col-12 col-md-3">
            <ServiceCard
              heading="Lighting"
              imgSrc={industrialDomesticImg}
              description="Expert circuit installation and troubleshooting."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
