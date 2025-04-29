const content = {
  es: {
    welcome: "Bienvenido/a",
    role: "Analista IT SR",
    experience: [
      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/toyota.png" alt="Toyota"></div>
        <div class="exp-content">
          <b>TOYOTA CENTROMOTOR (2024-PRESENTE)</b> – Analista IT<br>
          Soporte técnico oficial para marcas tecnológicas. Investigación, evaluación de calidad, análisis de competencia y desarrollo de marcas en LATAM, EE.UU, México, España.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/latamly.png" alt="Latamly"></div>
        <div class="exp-content">
          <b>GRUPO LATAMLY (2021-2023)</b> – Analista IT / Ciberseguridad<br>
          Creación y supervisión de área de sistemas, administración de redes, servidores, servicios cloud, ciberseguridad, microinformática, inventario de activos, soporte, documentación, backups.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/siglo21.png" alt="Siglo 21"></div>
        <div class="exp-content">
          <b>UNIVERSIDAD SIGLO 21 (2023-2024)</b> – Analista de Ciberseguridad / SOC<br>
          Gestión de incidentes de ciberseguridad, administración de permisos, ABM de usuarios, evaluación de vulnerabilidades y riesgos.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/apex.png" alt="Apex"></div>
        <div class="exp-content">
          <b>APEX AMÉRICA BPO (2017-2021)</b> – Asesor de Informes Técnicos<br>
          Informes y soporte para servicios de telefonía móvil y residencial, identificación y escalamiento de fallas.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/newsan.png" alt="New San"></div>
        <div class="exp-content">
          <b>NEW SAN S.A. (2010-2011)</b> – Control de procesos internos<br>
          Supervisión, control de calidad, informes, operación de sistemas AOI y SMT.
        </div>
      </div>`
    ],
    skills: [
      "Ciberseguridad",
      "Redes y servidores",
      "Cloud Computing",
      "Microinformática",
      "Documentación técnica"
    ],
    projects: [
      `<div class="project-item">
        <h4>Sistema de gestión de incidentes</h4>
        <p>Plataforma para reporte y seguimiento de incidentes de seguridad</p>
      </div>`,
      `<div class="project-item">
        <h4>Migración a la nube</h4>
        <p>Traslado de infraestructura on-premise a AWS</p>
      </div>`
    ],
    about: "Soy un profesional IT con más de 10 años de experiencia...",
    interests: [
      "Inteligencia Artificial",
      "Ethical Hacking",
      "Automatización de procesos"
    ]
  },
  en: {
    welcome: "Welcome",
    role: "Senior IT Analyst",
    experience: [
      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/toyota.png" alt="Toyota"></div>
        <div class="exp-content">
          <b>TOYOTA CENTROMOTOR (2024-PRESENT)</b> – IT Analyst<br>
          Official technical support for tech brands. Research, quality assessment, competition analysis, and brand development in LATAM, USA, Mexico, Spain.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/latamly.png" alt="Latamly"></div>
        <div class="exp-content">
          <b>LATAMLY GROUP (2021-2023)</b> – IT Analyst / Cybersecurity<br>
          Established and managed IT department, administered networks, servers, cloud, cybersecurity, microcomputing, asset inventory, support, documentation, backups.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/siglo21.png" alt="Siglo 21"></div>
        <div class="exp-content">
          <b>UNIVERSIDAD SIGLO 21 (2023-2024)</b> – Cybersecurity Analyst / SOC<br>
          Managed cybersecurity incidents, permissions, user accounts, vulnerability and risk assessment.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/apex.png" alt="Apex"></div>
        <div class="exp-content">
          <b>APEX AMERICA BPO (2017-2021)</b> – Technical Reports Advisor<br>
          Reports and support for mobile and residential phone services, real-time issue identification and escalation.
        </div>
      </div>`,

      `<div class="exp-item">
        <div class="exp-logo-box"><img src="assets/newsan.png" alt="New San"></div>
        <div class="exp-content">
          <b>NEW SAN S.A. (2010-2011)</b> – Internal Process Control<br>
          Supervision, quality control, reporting, operation of AOI and SMT systems.
        </div>
      </div>`
    ],
    skills: [
      "Cybersecurity",
      "Networks & Servers",
      "Cloud Computing",
      "Microcomputing",
      "Technical Documentation"
    ],
    projects: [
      `<div class="project-item">
        <h4>Incident Management System</h4>
        <p>Platform for security incident reporting and tracking</p>
      </div>`,
      `<div class="project-item">
        <h4>Cloud Migration</h4>
        <p>On-premise infrastructure migration to AWS</p>
      </div>`
    ],
    about: "I'm an IT professional with over 10 years of experience...",
    interests: [
      "Artificial Intelligence",
      "Ethical Hacking",
      "Process Automation"
    ]
  }
};

function setLang(lang) {
  // Actualizar atributo lang del documento
  document.documentElement.lang = lang;
  
  // Actualizar rol profesional
  document.getElementById('role').innerText = content[lang].role;
  
  // Actualizar experiencia laboral
  const expContainer = document.getElementById('experience');
  if(expContainer) expContainer.innerHTML = content[lang].experience.join('');
  
  // Actualizar habilidades
  const skillsContainer = document.getElementById('skills');
  if(skillsContainer) skillsContainer.innerHTML = content[lang].skills.map(skill => `<li>${skill}</li>`).join('');
  
  // Actualizar proyectos
  const projectsContainer = document.getElementById('projects');
  if(projectsContainer) projectsContainer.innerHTML = content[lang].projects.join('');
  
  // Actualizar about
  const aboutContainer = document.getElementById('about');
  if(aboutContainer) aboutContainer.innerHTML = content[lang].about;
  
  // Actualizar intereses
  const interestsContainer = document.getElementById('interests');
  if(interestsContainer) interestsContainer.innerHTML = content[lang].interests.map(interest => `<li>${interest}</li>`).join('');
  
  // Actualizar textos dinámicos
  document.querySelectorAll('[data-es]').forEach(element => {
    const key = element.getAttribute('data-es');
    if(content[lang][key]) element.innerText = content[lang][key];
  });
  
  // Actualizar menú
  const menuLabels = {
    es: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Acerca de",
      interests: "Intereses",
      skills: "Habilidades",
      experience: "Experiencia"
    },
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      interests: "Interests",
      skills: "Skills",
      experience: "Experience"
    }
  };
  
  document.querySelectorAll('#nav-menu [id^="menu-"] span').forEach(item => {
    const menuKey = item.parentElement.id.replace('menu-', '');
    if(menuLabels[lang][menuKey]) {
      item.innerText = menuLabels[lang][menuKey];
    }
  });
  
  // Actualizar loader
  const loader = document.getElementById('loader-message');
  if(loader) loader.innerText = lang === 'es' ? 'Bienvenido/a' : 'Welcome';
}

// Inicializar con español por defecto
document.addEventListener('DOMContentLoaded', () => setLang('es'));
