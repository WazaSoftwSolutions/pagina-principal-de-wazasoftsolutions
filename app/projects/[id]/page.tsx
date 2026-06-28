"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { projectsData, Project } from "@/data/projects";
import ProjectNavbar from "@/components/ProjectNavbar";
import ProjectFooter from "@/components/ProjectFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLink, faBolt } from "@fortawesome/free-solid-svg-icons";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (id && typeof id === "string") {
      const foundProject = projectsData[id];
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.images[0]);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col pt-32">
        <ProjectNavbar />
        <main className="grow container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-black mb-4">Proyecto no encontrado</h1>
          <p className="text-xl mb-8 text-gray-600">
            Lo sentimos, la información de este proyecto no está disponible.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-black text-white py-3 px-8 rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            Volver al Inicio
          </button>
        </main>
        <ProjectFooter />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ProjectNavbar />

      <main className="container mx-auto px-6 overflow-hidden">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/#portfolio">Proyectos</Link>
          <span>/</span>
          <span id="breadcrumb-current" className="text-gray-400">
            {project.title}
          </span>
        </nav>

        {/* Project Hero Header */}
        <header className="project-hero">
          <h1 id="project-title" className="project-title">{project.title}</h1>
          <div className="project-meta">
            <div id="project-category">{project.category}</div>
            <div id="project-year">{project.year}</div>
          </div>

          {/* Gallery */}
          <div className="gallery-container">
            <div id="thumbnail-list" className="thumbnails scrollbar-hide">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`thumbnail-item ${activeImage === img ? "active" : ""}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img id="primary-image" src={activeImage} alt="Vista principal del proyecto" />
            </div>
          </div>
        </header>

        {/* 1. General Description */}
        <section className="section-content" data-aos="fade-up">
          <div className="glass-card">
            <h2 className="section-title"><FontAwesomeIcon icon={faBolt}/> Descripción General</h2>
            <p id="project-description" className="text-xl text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* 2. Main Functionalities */}
        <section className="section-content">
          <h3 className="section-title" data-aos="fade-up">Funcionalidades Principales</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ul id="functionalities-list" className="space-y-4" data-aos="fade-right">
              {project.functionalities.map((func, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-black">
                    <FontAwesomeIcon icon={ faCircleCheck }/>
                  </span>
                  <span>{func}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full bg-gray-100 flex items-center justify-center" data-aos="fade-left">
              <img
                id="functionality-image"
                src={Array.isArray(project.functionalityImage) ? project.functionalityImage[0] : project.functionalityImage}
                alt="Ilustración de funcionalidad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 3. System Modules */}
        <section className="section-content">
          <h3 className="section-title" data-aos="fade-up">Módulos del Sistema</h3>
          <div id="modules-list" className="modules-grid">
            {project.modules.map((mod, i) => (
              <div
                key={i}
                className="module-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="module-icon">
                  <FontAwesomeIcon icon={mod.icon} />
                </div>
                <h4 className="text-xl font-bold mb-2">{mod.name}</h4>
                <p className="text-gray-600 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Integrations --> Using the specific glass-card + black tags from detail.html */}
        <section className="section-content" data-aos="fade-up">
          <div className="glass-card">
            <h3 className="section-title"><FontAwesomeIcon icon={ faLink} /> Integraciones</h3>
            <div id="integrations-list" className="flex flex-wrap gap-4">
              {project.integrations.map((item, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technologies */}
        <section className="section-content">
          <h3 className="section-title" data-aos="fade-up">Stack Tecnológico</h3>
          <div id="tech-stack" className="tech-container">
            {Object.entries(project.technologies).map(([category, items], i) => (
              <div key={category} className="tech-group" data-aos="fade-up" data-aos-delay={i * 50}>
                <h4 className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-4">
                  {category.replace('_', ' ')}
                </h4>
                <div className="tech-list">
                  {items?.map((item: string, idx: number) => (
                    <span key={idx} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        {project.videoUrl && (
          <section className="section-content">
            <h3 className="section-title" data-aos="fade-up">Demostración en Video</h3>
            <div id="video-container" className="video-wrapper" data-aos="zoom-in">
              {project.videoUrl.includes("youtube.com") || project.videoUrl.includes("embed") ? (
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls className="w-full h-full">
                  <source src={project.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              )}
            </div>
          </section>
        )}
      </main>

      <ProjectFooter />
    </div>
  );
}
