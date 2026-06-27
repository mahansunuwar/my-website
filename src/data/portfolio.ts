import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Mahan Sunuwar",
    role: "Cybersecurity Analyst and Security Engineer",
    location: "Nepal",
    email: "mahan.sunuwar@example.com",
    linkedin: "https://www.linkedin.com/in/mahan-sunuwar",
    github: "https://github.com/mahan-sunuwar",
    summary:
      "Cybersecurity professional focused on threat detection, incident response, and defensive security architecture. I design practical security controls, automate monitoring workflows, and deliver measurable risk reduction for modern infrastructure."
  },
  expertise: [
    "Threat Detection and SIEM Engineering",
    "Incident Response and Digital Forensics",
    "Vulnerability Assessment and Hardening",
    "Cloud and Network Security",
    "Security Automation (Python, Bash, TypeScript)",
    "Security Governance and Risk Reporting"
  ],
  metrics: [
    { label: "Security Projects Delivered", value: "18+" },
    { label: "Incidents Investigated", value: "120+" },
    { label: "Average Detection Improvement", value: "35%" }
  ],
  projects: [
    {
      title: "Enterprise SOC Alert Correlation Dashboard",
      category: "Blue Team / Detection Engineering",
      impact: "Reduced false positives by 42%",
      summary:
        "Built a central SOC dashboard integrating SIEM alerts and endpoint telemetry to prioritize high-confidence incidents and accelerate triage.",
      technologies: ["TypeScript", "Node.js", "Elastic", "MITRE ATT&CK"]
    },
    {
      title: "Automated Vulnerability Prioritization Engine",
      category: "Vulnerability Management",
      impact: "Cut remediation lead time from 14 to 6 days",
      summary:
        "Created a risk-based scoring pipeline that combines CVSS, exploitability, and business criticality to produce actionable remediation queues.",
      technologies: ["Node.js", "TypeScript", "NVD API", "PostgreSQL"]
    },
    {
      title: "Phishing Simulation and Awareness Program",
      category: "Security Awareness",
      impact: "Improved reporting rate by 58%",
      summary:
        "Designed and ran quarterly phishing simulations, then mapped behavioral results into targeted awareness modules and executive reporting.",
      technologies: ["Security Awareness Platform", "Email Security", "Data Analytics"]
    }
  ],
  achievements: [
    {
      title: "Top Performer - Incident Response Program",
      organization: "Internal Security Operations Team",
      year: "2025",
      detail:
        "Recognized for leading high-severity incident triage and post-incident hardening recommendations."
    },
    {
      title: "Speaker - Defensive Security Workshop",
      organization: "Regional Cybersecurity Community",
      year: "2024",
      detail:
        "Delivered a practical workshop on log analysis, IOC mapping, and threat hunting playbooks."
    },
    {
      title: "Security Process Improvement Award",
      organization: "Technology Leadership Team",
      year: "2023",
      detail:
        "Designed a standardized vulnerability reporting model adopted across engineering teams."
    }
  ],
  certifications: [
    { name: "CompTIA Security+", issuer: "CompTIA", status: "Completed" },
    { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "Completed" },
    { name: "Google Cybersecurity Certificate", issuer: "Google", status: "Completed" }
  ]
};
