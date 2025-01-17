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
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
          padding: "60px 0",
        }}
      >

  {/* Main Heading */}
      <h1
        style={{
          color: "#015453",
          fontWeight: "bold",
          fontSize: "3rem",
          marginTop: "100px",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        PT Solve Ease Global Technology
      </h1>

  {/* Subheading */}
      <p
        style={{
          color: "#A9C46C",
          fontSize: "1.5rem",
          fontWeight: "500",
          margin: "15px 0 40px",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        Simplifying Complexity, Enabling Growth
      </p>

  {/* Two-column Text Layout */}
  <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto", // Center container horizontally
  }}
>
  {/* Left Column - Large Text */}
  <div
    style={{
      flex: 2, // Take more space for the left column
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start", // Align text to the left
      lineHeight: "1.2", // Adjust spacing between lines
    }}
  >
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#015453",
        margin: "0",
      }}
    >
      we empower
    </span>
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        margin: "0",
      }}
    >
      <span style={{ color: "#015453" }}>businesses </span>
      <span style={{ color: "#A9C46C" }}>to</span>
    </span>
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#A9C46C",
        margin: "0",
      }}
    >
      thrive in a
    </span>
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#A9C46C",
        margin: "0",
      }}
    >
      increasingly
    </span>
    <span
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#A9C46C",
        margin: "0",
      }}
    >
      digital world.
    </span>
  </div>

  {/* Right Column - Small Text */}
  <div
    style={{
      flex: 1, // Take less space for the right column
      textAlign: "left",
      width: "628px",
      height: "96px",
      top: "520px",
      left: "745px",

    }}
  >
    <p
      style={{
        lineHeight: "Title Medium/Line Height",
        color: "#A9C46C",
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "25px",
        paragraph: "10px",
      }}
    >

      We are a leading technology company dedicated to revolutionizing the way
      businesses and consumers interact within the financial and retail
      ecosystems. With a strong focus on banking solutions, merchant services,
      loyalty programs, and healthcare innovation.
    </p>
  </div>
</div>


  {/* Image Section */}
  <div style={{ marginTop: "50px", width: "100%", overflow: "hidden" }}>
    <img
      src="src/assets/background.png" // Replace with your background image path
      alt="Background"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>

  {/* Divider */}
  <hr
    style={{
      width: "70%",
      height: "4px",
      backgroundColor: "#B6CBBD",
      border: "none",
      marginTop: "50px",
    }}
  />
</section>

<section id="about">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "80%",
          margin: "70px auto",
        }}
      >
        {/* Left Section: Headline */}
        <div
          style={{
            width: "402px",
            height: "159px",
            top: "1493px",
            left: "142px",
          }}
        >
          <h1
            style={{
              weight: "600",
              color: "#015453",
              size: "40px",
              lineHeight:"33px",
              paragraph: "10px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              fontSize: "2rem",
            }}
          >
            Together We Think,
          </h1>
          <h1
            style={{
              weight: "600",
              color: "#015453",
              size: "40px",
              lineHeight:"33px",
              paragraph: "10px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              fontSize: "2rem",
            }}
          >
            Together We Build,
          </h1>
          <h1
            style={{
              weight: "600",
              color: "#015453",
              size: "40px",
              lineHeight:"33px",
              paragraph: "10px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              fontSize: "2rem",
            }}
          >
            Together We Care
          </h1>
        </div>

      
        {/* Right Section: Introduction */}
        <div style={{ flex: 1, paddingLeft: "50px" }}>
          <p style={{ color: "#A9C46C", fontSize: "1rem", lineHeight: "1.8" }}>
            a company engaged in software development and IT consulting. We are
            committed to participating in the Business Digitalization Process. Our
            team is passionate about what we do, and we can be a driving force for
            change in various sectors for the better.
          </p>
        </div>
      </div>
      </section>


      {/* Values Section */}
      <div className="our-value" style={{ marginLeft: "100px", color: "#015543", fontSize: "40px", fontStyle: "bold"}}>
      <h2>Our Values </h2>
      </div>
      <div
        style={{
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          width: "80%",
        
        }}
      >
        {[
          { icon: "fa-solid fa-sync-alt", text: "Customization and Flexibility" },
          { icon: "fa-solid fa-users", text: "Experienced Team" },
          { icon: "fa-solid fa-cogs", text: "Flexible Methodologies" },
          { icon: "fa-solid fa-shield-alt", text: "Security and Scalability" },
          { icon: "fa-solid fa-headset", text: "After-Sales Service and Support" },
        ].map((value, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              minWidth: "150px",
              textAlign: "center",
              padding: "20px",
              backgroundColor: "#015453",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              color: "white",
            }}
          >
            <i
              className={value.icon}
              style={{ fontSize: "1.5rem", color: "#white", marginBottom: "10px" }}
            ></i>
            <p>{value.text}</p>
          </div>
        ))}
      </div>

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
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} style={styles.contactSection}>
        <h2 style={styles.contactTitle}>- Get In Touch -</h2>

        <p style={{ color: "#A9C46C", fontSize: "1rem", marginBottom: "5px" }}>
          Ready To Help Your Company scale Faster? Let’s Chat about How we can Help.
        </p>
      </section>
    </div>
  );
}

const about = [
  {
    image: "src/assets/video.png",
    
  }
]

const products = [
  {
    image: "src/assets/product1.png", // you can choose to keep the image or remove it
    title: "Product On Hold",
    description: "This product is currently on hold.",
  },
];

const services = [
  {
    image: "src/assets/Vector2.png",
    title: "IT Consultation",
    description:
      "We provide strategic IT consulting to help businesses design, develop, and implement tailored technology solutions. Our services include system architecture, digital transformation, process automation, and technology roadmaps, ensuring optimized operations and alignment with business goals. We guide companies through their digital journey, minimizing risks and costs while enhancing performance.",
  },
  {
    image: "src/assets/Vector.png",
    title: "Customize Software Development",
    description:
      "We offer comprehensive software development services across industries, focusing on secure,scalable, and highquality solutions. From custom applications to ERP and financial platforms, we manage the entire software lifecycle—from design to deployment—ensuring faster time-to-market, innovation, and strong security measures.",
  },
  {
    image: "src/assets/4.png",
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

  contactSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "40px 0",
  },
  contactTitle: { fontSize: "2.5rem", marginBottom: "90px", color: "#015453" },

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