export const personalInfo = {
  name: "Prajwal",
  tagline:
    "Cloud/DevOps Enthusiast  |  Backend · Automation · Pipelines · Infrastructure",
  about: [
    "Hi, I'm Prajwal — an MCA graduate and cloud enthusiast who builds backend and full-stack projects to push them through CI/CD pipelines, containerization, and cloud environments.",
    "I'm primarily an application builder, but a DevOps internship drove me to go deeper — deploying apps inside CSPs and simulating production environments using Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI, and Linux/Windows servers.",
    "I enjoy the intersection of building and shipping — writing code that doesn't just work locally, but runs reliably in the real world.",
  ],
};

export type Skill = {
  name: string;
  note?: string;
};

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Programming",
    items: [{ name: "Python", note: "OOP, APIs" }],
  },
  {
    category: "Frameworks & APIs",
    items: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "REST APIs" },
      { name: "SOAP API", note: "Conceptual" },
      { name: "GraphQL", note: "Conceptual" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "DynamoDB" },
    ],
  },
  {
    category: "Linux",
    items: [
      { name: "File Systems" },
      { name: "User Management" },
      { name: "Network Management" },
      { name: "Process Management" },
      { name: "Disk Management" },
    ],
  },
  {
    category: "Networking",
    items: [{ name: "TCP/IP" }, { name: "DNS" }, { name: "OSI Model" }],
  },
  {
    category: "Cloud (AWS)",
    items: [
      { name: "EC2" },
      { name: "S3" },
      { name: "RDS" },
      { name: "VPC" },
      { name: "IAM" },
      { name: "ECR" },
      { name: "DynamoDB" },
      { name: "CloudWatch" },
      { name: "CloudFront" },
      { name: "SNS" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Git / GitHub" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Terraform" },
      { name: "Ansible" },
    ],
  },
];

export const projects: {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: "🟢Completed" | "🔵In Progress" | "🟡Planned";
}[] = [
  {
    "title":"Django App AWS Deployment",
    "description":"Deployed a Django application on AWS using EC2, VPC, Terraform, git for version control and systems manager for keyless deployment. The project involved provisioning EC2 instances, VPC, configuring security groups, and automating deployment using Terraform and git.",
    "stack":["Django","AWS EC2","AWS VPC","Terraform","Git","AWS Systems Manager"],
    "github":"https://github.com/PrajwalP-git/django-core",
    "status":"🟢Completed"
  },
  {
    "title": "CI/CD Pipeline with Zoo website",
    "description": "Built a CI/CD pipeline for React zoo website using GitHub Actions. The pipeline automated testing, building, and deployment of the React application to a staging environment ",
    "stack": ["React","GitHub Actions", "AWS EC2", "Git/GitHub"],
    "github": "https://github.com/PrajwalP-git/National-park",
    "live": "https://workflows-chi-one.vercel.app/",
    "status": "🟢Completed"
  },
  {
    "title": "Dockerized Medicare API",
    "description": "Containerized a Hospital API built with Django, Django REST Framework and SQLite using Docker. The project involved  creating a Dockerfile, building the Docker image, and running the containerized application locally.",
    "stack": ["Django","Django REST Framework","SQLite","Git/GitHub", "Docker"],
    "github": "https://github.com/PrajwalP-git/Medicare-API",
    "status": "🟢Completed"
  },
  {
    "title": "Network Troubleshooting Using AWS EC2 and AWS VPC",
    "description": "Troubleshot network issues in a simulated environment using AWS EC2 and VPC. The project involved creating a VPC with subnets, configuring security groups, and testing connectivity between EC2 instances.",
    "stack": ["AWS EC2","AWS VPC","Networking"],
    "status": "🔵In Progress"
  },
  {
    "title": "Redplus API",
    "description":"A Mini Appointment Booking API built with Node.js, Express.js and MySQL. The project involved designing the database schema, implementing RESTful API endpoints for booking appointments, and integrating authentication and authorization mechanisms.",
    "stack": ["MySQL","Express.js","React","Node.js", "Git/GitHub", "Docker", "GitHub Actions", "Vercel"],
    "status": "🟡Planned"
  },
  {
    "title": "Custom RBAC and Subscription Billing API",
    "description": "A High-throughput and custom Role-Based Access Control (RBAC) system and subscription billing API using Django and PostgreSQL. The API provides endpoints for managing user roles, permissions, and subscription plans.",
    "stack": ["Django", "Django REST Framework", "PostgreSQL", "Git/GitHub", "Docker", "GitHub Actions", "Kubernetes", "AWS EC2", "AWS VPC","Terraform"],
    "status": "🟡Planned"
  }
];

export const experience: {
  role: string;
  company: string;
  duration: string;
  points: string[];
}[] = [
  {
    role: "DevOps Intern",
    company: "QSpiders",
    duration: "July 2025 – Feb 2026",
    points: [
      "Containerized frontend applications using Docker and orchestrated deployments with Kubernetes.",
      "Practiced and enforced Git workflows using Git and GitHub across team-based projects.",
      "Provisioned and managed cloud infrastructure on AWS (EC2, S3, RDS, VPC, IAM, ECR) using Terraform.",
      "Automated server configuration and application setup using Ansible.",
      "Built end-to-end CI/CD pipelines using Jenkins and GitHub Actions to streamline build and deployment processes.",
    ],
  },
];

export const contact: {
  github?: string;
  linkedin?: string;
  email?: string;
} = {
  github: "https://github.com/PrajwalP-git",
  linkedin: "https://linkedin.com/in/prajwal-prasad-cloud",
  email: "prajwalprasad121@zohomail.in"
};