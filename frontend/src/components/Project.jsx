import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="projects" style={{ marginTop: "10px" }}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {products.map(({ id, title, description, image }) => (
          <article key={id} className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{title}</h3>
             <p className="project-description">
                {description.length > 100 ? description.slice(0, 100) + '...' : description}
            </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
