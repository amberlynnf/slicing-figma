import React, { useRef } from "react";
import Navbar from "../components/Navbar"; // pastikan navbar diimpor dengan benar

function App() {
  // Referensi untuk bagian-bagian yang akan di-scroll
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  // Fungsi untuk scroll dengan smooth
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar dengan tombol untuk scroll */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Home Section */}
      <section
        id="home"
        ref={homeRef}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "350px",
          backgroundColor: "#f8f9fa",
          marginTop: "60px",
        }}
      >
        <h1 style={{ color: "#015453", fontWeight: "bold", fontSize: "3rem" }}>
          PT Solve Ease Global Technology
        </h1>
        <p style={{ color: "#A9C46C", fontSize: "1.5rem" }}>
          Simplifying Complexity, Enabling Growth
        </p>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} style={styles["misi-intro-visi"]}>
        <div style={styles.cards}>
          <div style={{ ...styles.card, ...styles.cardMission }}>
            <h3 style={styles.cardTitle}>Mission</h3>
            <div style={styles.iconText}>
              <i className="fa-solid fa-brain" style={styles.icon}></i>
              <p>Creating smart solutions to tackle the challenges of digitalization.</p>
            </div>
            <div style={styles.iconText}>
              <i className="fa-solid fa-flask" style={styles.icon}></i>
              <p>Investing in research to maintain high product competitiveness.</p>
            </div>
            <div style={styles.iconText}>
              <i className="fa-solid fa-users" style={styles.icon}></i>
              <p>Working with a strong team and upholding professionalism.</p>
            </div>
          </div>

          <div style={{ ...styles.card, ...styles.cardIntro }}>
            <h3 style={styles.cardTitle}>Introduction</h3>
            <p>a company engaged in software development and IT consulting,</p>
            <p>with the motto "Together We Think, Together We Build, Together We Care".</p>
            <p>We are committed to participating in the Business Digitalization Process.</p>
            <p>
              Our team is passionate about what we do, and we can be a driving force for change in
              various sectors for the better.
            </p>
          </div>

          <div style={{ ...styles.card, ...styles.cardVision }}>
            <h3 style={styles.cardTitle}>Vision</h3>
            <p>
              To become a driving force by creating innovative products and serving as a bridge
              between real life and digital life across all business sectors.
            </p>
          </div>
        </div>

        <div style={styles.features}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <i className={feature.icon} style={styles.featureIcon}></i>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section id="service" ref={serviceRef} style={styles.serviceSection}>
        <h2 style={styles.serviceTitle}>- Our Service -</h2>
        <div style={styles.serviceList}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceItem,
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={styles.serviceImage}
              />
              <div style={styles.serviceText}>
                <h3 style={styles.serviceHeading}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section id="product" ref={productRef} style={styles.productSection}>
  <h2 style={styles.productTitle}>- Our Product -</h2>
  <div style={styles.productList}>
    {products.map((product, index) => (
      <div key={index} style={styles.productText}>
        <h3 style={styles.productHeading}>{product.title}</h3>
        <p style={styles.productDescription}>On Hold</p> {/* Display "On Hold" */}
      </div>
    ))}
  </div>
</section>

      <section id="software-development" style={styles.softwareDevelopment}>
        <h2 style={styles.softwareDevelopmentTitle}>- Software Development Life Cycle -</h2>
      <div style={styles.softwareDevelopmentContent}>
    {/* Teks di kiri */}
    <div style={styles.softwareDevelopmentText}>
      <h3 style={styles.softwareDevelopmentHeading}>LEAN METHODOLOGY</h3>
      <p>
      Lean focuses on delivering high-quality software faster while reducing waste. It overlaps with Agile but emphasizes continuous improvement and reducing inefficiencies.
      </p>
      <h3 style={styles.softwareDevelopmentHeading}>AGILE METHODOLOGY</h3>
      <p>
      approach that emphasizes flexibility, collaboration, iterative development, and rapid delivery
      </p>
      <h3 style={styles.softwareDevelopmentHeading}>WATERFALL METHODOLOGY</h3>
      <p>
      is a traditional, linear approach to software development. It follows a sequential process, where each phase must be completed before moving to the next.
      </p>
      <h3 style={styles.softwareDevelopmentHeading}>DevOps</h3>
      <p>
      It fosters collaboration between development and operations teams, focusing on continuous delivery, faster releases, and high-quality software.
      </p>
    </div>

    {/* image sdlc */}
    <div style={styles.softwareDevelopmentImageContainer}>
      <img
        src="src/assets/buletan.png" // path gambar yang berada di folder src/assets
        alt="Software Development Life Cycle"
        style={styles.softwareDevelopmentImage}
      />
    </div>

    {/* Teks di kanan */}
    <div style={styles.softwareDevelopmentText}>
      <h3 style={styles.softwareDevelopmentHeading}>SPIRAL METHODOLOGY</h3>
      <p>
      is a risk-driven software development methodology that combines elements of both iterative and waterfall models. It is best suited for large, complex, and high-risk projects where requirements are not well understood at the beginning.
      </p>
      <h3 style={styles.softwareDevelopmentHeading}>ITERATIVE MODEL</h3>
      <p>
      Instead of delivering the entire software product in a single release, the product evolves through successive refinements, where each iteration adds functionality and improves quality.
      </p>
      <h3 style={styles.softwareDevelopmentHeading}>V-MODEL</h3>
      <p>
      that follows a sequential process similar to the Waterfall Model but emphasizes testing at every stage of development. The model is called "V-Model" because its process steps form a "V" shape, where development phases move downward, and corresponding testing phases move upward.
      </p>
    </div>
  </div>
</section>;

{/* Contact Section */}
<section id="contact" ref={contactRef} style={styles.contactSection}>
  <h2 style={styles.contactTitle}>- Contact Us -</h2>
  {/* Bagian Form dihapus atau dikosongkan */}
</section>


    </div>
  );
}


const products = [
  {
    image: "src/assets/product1.png", // you can choose to keep the image or remove it
    title: "Product On Hold",
    description: "This product is currently on hold.",
  },
];

const services = [
  {
    image: "src/assets/Vector.png",
    title: "IT Consultation",
    description:
      "We provide strategic IT consulting to help businesses design, develop, and implement tailored technology solutions. Our services include system architecture, digital transformation, process automation, and technology roadmaps, ensuring optimized operations and alignment with business goals. We guide companies through their digital journey, minimizing risks and costs while enhancing performance.",
  },
  {
    image: "src/assets/4.png",
    title: "Customize Software Development",
    description:
      "We offer comprehensive software development services across industries, focusing on secure,scalable, and highquality solutions. From custom applications to ERP and financial platforms, we manage the entire software lifecycle—from design to deployment—ensuring faster time-to-market, innovation, and strong security measures.",
  },
  {
    image: "src/assets/Vector2.png",
    title: "UI/UX Design",
    description:
      "Our UI/UX design services deliver user-friendly, visually appealing digital products that enhance engagement and user satisfaction. We combine creativitywith functionality through user research, wireframing, and testing, ensuring intuitive interfaces that improve customer loyalty and retention.",
  },
];

const features = [
  { icon: "fa-solid fa-sliders", text: "Customization and Flexibility" },
  { icon: "fa-solid fa-users", text: "Experienced Team" },
  { icon: "fa-solid fa-cogs", text: "Flexible Methodologies" },
  { icon: "fa-solid fa-shield-alt", text: "Security and Scalability" },
  { icon: "fa-solid fa-hands-helping", text: "After-Sales Service and Support" },
];

const styles = {
 "misi-intro-visi": {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "230vh", // Pastikan tinggi minimum cukup besar
  width: "100vw",
  margin: 0,
  padding: "20px 0",
  backgroundImage: "url('/src/assets/garis.png')", // Path gambar tetap sama
  backgroundSize: "contain", // Pastikan gambar disesuaikan dengan lebar kontainer
  backgroundPosition: "center top", // Posisikan di tengah atas
  backgroundRepeat: "no-repeat", // Agar tidak mengulang
  backgroundColor: "#f9f9f9",
},
  // ... kode lain tetap sama

  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    width: "300px",
    color: "#000",
  },
  cardMission: { background: "#015453", color: "#fff" },
  cardIntro: { background: "#015453", color: "#fff" },
  cardVision: { background: "#015453", color: "#fff" },
  cardTitle: { fontSize: "18px", fontWeight: "bold", marginBottom: "16px" },
  iconText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  icon: { fontSize: "20px", color: "#A9C46C" },
  features: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  featureCard: {
    background: "#015453",
    borderRadius: "12px",
    padding: "20px",
    color: "#fff",
    width: "200px",
    textAlign: "center",
  },
  featureIcon: { fontSize: "32px", marginBottom: "10px" },
  serviceSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "40px 0",
  },
  serviceTitle: { fontSize: "2.5rem", marginBottom: "90px", color: "#015453" },
  serviceList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "80%",
  },
  serviceItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },  
  serviceImage: {
    width: "300px",
    height: "auto",
    objectFit: "contain",
  },
  serviceText: { flex: 1, textAlign: "left" },
  serviceHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#015453",
    marginBottom: "10px",
    textAlign: "center",
  },
  serviceDescription: { 
    fontSize: "1rem", 
    color: "#A9C46C",
    textAlign: "center",
  },
  productSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "40px 0",
  },
  productTitle: { fontSize: "2.5rem", marginBottom: "90px", color: "#015453" },
  productList: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "80%",
  },
  productCard: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  productImage: {
    width: "300px",
    height: "auto",
    objectFit: "contain",
  },
  productText: { flex: 1, textAlign: "left" },
  productHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#015",
  },
  productDescription: {
    fontSize: "1rem",
    color: "#666",
  },

  softwareDevelopment: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
  padding: "40px 0",
  backgroundColor: "#f9f9f9",
},
softwareDevelopmentTitle: {
  fontSize: "2rem",
  marginBottom: "40px",
  color: "#015453",
},
softwareDevelopmentContent: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  width: "80%",
},
softwareDevelopmentText: {
  flex: 1,
  textAlign: "left",
  color: "#A9C46C",
  fontSize: "0.7rem",
},
softwareDevelopmentHeading: {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#015453",
  marginBottom: "1px",
},
softwareDevelopmentImageContainer: {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
softwareDevelopmentImage: {
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
},
};

export default App;