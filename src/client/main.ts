type Project = {
  title: string;
  category: string;
  impact: string;
  summary: string;
  technologies: string[];
};

type Achievement = {
  title: string;
  organization: string;
  year: string;
  detail: string;
};

type Certification = {
  name: string;
  issuer: string;
  status: string;
};

type PortfolioData = {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    summary: string;
  };
  expertise: string[];
  metrics: Array<{ label: string; value: string }>;
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
};

const byId = <T extends HTMLElement>(id: string): T => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Missing element: ${id}`);
  }
  return el as T;
};

const render = (data: PortfolioData) => {
  byId("name").textContent = data.profile.name;
  byId("role").textContent = `${data.profile.role} | ${data.profile.location}`;
  byId("summary").textContent = data.profile.summary;

  const emailHref = `mailto:${data.profile.email}`;
  const emailLink = byId<HTMLAnchorElement>("emailLink");
  emailLink.href = emailHref;
  const footerEmail = byId<HTMLAnchorElement>("footerEmail");
  footerEmail.href = emailHref;
  footerEmail.textContent = data.profile.email;

  const linkedinLink = byId<HTMLAnchorElement>("linkedinLink");
  linkedinLink.href = data.profile.linkedin;

  const githubLink = byId<HTMLAnchorElement>("githubLink");
  githubLink.href = data.profile.github;

  const metricsHtml = data.metrics
    .map(
      (metric) => `
        <li class="metric">
          <div class="metric-value">${metric.value}</div>
          <div class="metric-label">${metric.label}</div>
        </li>
      `
    )
    .join("");
  byId("metrics").innerHTML = metricsHtml;

  const expertiseHtml = data.expertise.map((item) => `<span class="tag">${item}</span>`).join("");
  byId("expertise").innerHTML = expertiseHtml;

  const projectHtml = data.projects
    .map(
      (project) => `
        <article class="card">
          <span class="meta">${project.category}</span>
          <h3>${project.title}</h3>
          <p class="impact">${project.impact}</p>
          <p>${project.summary}</p>
          <div class="tech-list">
            ${project.technologies.map((tech) => `<span class="tech">${tech}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
  byId("projectGrid").innerHTML = projectHtml;

  const achievementHtml = data.achievements
    .map(
      (achievement) => `
        <article class="timeline-item">
          <h3>${achievement.title}</h3>
          <span class="year">${achievement.organization} | ${achievement.year}</span>
          <p>${achievement.detail}</p>
        </article>
      `
    )
    .join("");
  byId("achievementList").innerHTML = achievementHtml;

  const certificationHtml = data.certifications
    .map(
      (certification) => `
        <article class="cert-item">
          <div class="cert-main">
            <strong>${certification.name}</strong>
            <span>${certification.issuer}</span>
          </div>
          <span class="status">${certification.status}</span>
        </article>
      `
    )
    .join("");
  byId("certificationList").innerHTML = certificationHtml;
};

const init = async () => {
  const res = await fetch("/api/portfolio");
  if (!res.ok) {
    throw new Error("Failed to load portfolio data");
  }
  const data: PortfolioData = await res.json();
  render(data);
};

init().catch((error: unknown) => {
  console.error(error);
  byId("summary").textContent = "Unable to load profile details right now.";
});
