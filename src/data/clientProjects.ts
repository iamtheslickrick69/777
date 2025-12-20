import type { ClientProject } from '../components/ClientProjectModal'

export const clientProjects: ClientProject[] = [
  {
    id: 'paypro',
    title: 'Next-Gen Payment Processing Platform',
    company: 'PayPro',
    category: 'Fintech',
    industry: 'Financial Services',
    image: '/client-paypro.jpg',
    description: 'A comprehensive payment processing ecosystem that streamlines transactions for businesses of all sizes, from startups to enterprise organizations.',
    challenge: 'PayPro needed to modernize their legacy payment infrastructure to compete with emerging fintech players. Their existing system struggled with scale, compliance requirements, and integration complexity across multiple payment gateways.',
    solution: 'We architected a cloud-native payment orchestration platform built on microservices, enabling seamless integration with 50+ payment providers, automated compliance workflows, and real-time fraud detection powered by machine learning.',
    results: [
      'Reduced transaction processing time by 73% through optimized routing algorithms',
      'Achieved 99.99% uptime with automated failover and load balancing',
      'Processed $2.4B in payment volume in first year with zero security breaches',
      'Decreased operational costs by 45% through infrastructure automation',
      'Enabled support for 135+ currencies and 28 languages'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Kubernetes', 'GraphQL'],
    timeline: '8 months',
    team: '12 engineers',
    link: 'https://paypro.com'
  },
  {
    id: 'beehive',
    title: 'Smart Equipment Rental Management System',
    company: 'BeeHive Rental & Sales',
    category: 'SaaS',
    industry: 'Construction & Equipment',
    image: '/client-beehive.jpg',
    description: 'An intelligent rental management platform that transforms how construction equipment companies track inventory, manage bookings, and optimize fleet utilization.',
    challenge: 'BeeHive was managing 2,500+ pieces of equipment across 8 locations using spreadsheets and phone calls. This led to double-bookings, lost revenue from idle equipment, and poor customer experience with delayed responses.',
    solution: 'We built a comprehensive rental management system with real-time inventory tracking, automated booking workflows, GPS-enabled equipment monitoring, predictive maintenance scheduling, and integrated payment processing.',
    results: [
      'Increased equipment utilization rate from 62% to 87% through optimization',
      'Eliminated double-bookings entirely with real-time availability system',
      'Reduced equipment downtime by 54% with predictive maintenance alerts',
      'Grew online bookings by 340% with customer self-service portal',
      'Cut administrative overhead by 38 hours per week'
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Mapbox', 'Stripe', 'Vercel'],
    timeline: '6 months',
    team: '8 engineers',
    link: 'https://beehiverentalandsales.com'
  },
  {
    id: 'haestus',
    title: 'AI-Powered Consulting Platform',
    company: 'Haestus',
    category: 'AI Consulting',
    industry: 'Technology Services',
    image: '/client-haestus.jpg',
    description: 'A strategic consulting firm specializing in AI transformation, helping businesses integrate cutting-edge AI capabilities to gain competitive advantage and drive measurable results.',
    challenge: 'Companies across industries struggle to translate AI potential into practical business value. Many initiatives fail due to unclear strategy, poor implementation, or misalignment with business objectives.',
    solution: 'We developed a comprehensive AI consulting methodology combining strategic planning, custom AI solution development, and hands-on implementation. Our approach focuses on ROI-driven outcomes, rapid prototyping, and sustainable AI integration.',
    results: [
      'Delivered 47 successful AI implementations across 12 industries',
      'Achieved average ROI of 320% within first year for clients',
      'Reduced time-to-value from 18 months to 6 weeks for AI projects',
      'Built proprietary frameworks that cut development costs by 60%',
      'Maintained 100% client retention rate over 2 years'
    ],
    technologies: ['React', 'Three.js', 'Claude AI', 'Python', 'TensorFlow', 'FastAPI', 'Vercel', 'Framer Motion'],
    timeline: '12 months',
    team: '15 consultants',
    link: 'https://haestus.dev'
  },
  {
    id: 'promptlee',
    title: 'AI Prompt Engineering Workspace',
    company: 'Promptlee',
    category: 'AI Tools',
    industry: 'Developer Tools',
    image: '/client-promptlee.jpg',
    description: 'A collaborative workspace for teams to design, test, version, and deploy AI prompts at scale, with built-in best practices and performance analytics.',
    challenge: 'Engineering teams waste countless hours manually testing prompts, lack version control for prompt iterations, and struggle to maintain consistency across AI-powered features. No centralized system existed for prompt lifecycle management.',
    solution: 'We created an end-to-end prompt engineering platform with A/B testing capabilities, automated quality scoring, collaborative editing, prompt versioning, and one-click deployment to production with monitoring dashboards.',
    results: [
      'Reduced prompt iteration time by 82% with automated testing suite',
      'Improved AI output quality scores by average of 43% across projects',
      'Enabled teams to manage 500+ production prompts from single interface',
      'Cut prompt-related production bugs by 91% through validation system',
      'Onboarded 1,200+ developers in first 4 months of launch'
    ],
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'OpenAI', 'Anthropic', 'Supabase', 'Next.js', 'Tailwind'],
    timeline: '5 months',
    team: '6 engineers',
    link: 'https://promptlee.com'
  },
  {
    id: 'cbsc',
    title: 'Commercial Cleaning Operations Platform',
    company: 'CBSC Screen Cleaners',
    category: 'Service Management',
    industry: 'Commercial Services',
    image: '/client-cbsc.jpg',
    description: 'A mobile-first operations platform that coordinates field teams, automates scheduling, and delivers exceptional customer experiences for commercial screen cleaning services.',
    challenge: 'CBSC managed 40+ field technicians serving 300+ commercial clients using paper schedules and manual invoicing. This resulted in scheduling conflicts, billing errors, inconsistent service quality, and limited visibility into field operations.',
    solution: 'We built a comprehensive field service management system with GPS tracking, automated route optimization, mobile job management, digital checklists, photo documentation, instant invoicing, and customer communication portal.',
    results: [
      'Increased daily jobs per technician from 8 to 14 through route optimization',
      'Reduced invoicing time from 3 days to instant with automated billing',
      'Improved customer satisfaction scores from 3.2 to 4.8 stars',
      'Decreased no-shows by 76% with automated reminder system',
      'Grew revenue by 128% in first year through operational efficiency'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio', 'Stripe', 'AWS', 'WebSockets'],
    timeline: '7 months',
    team: '9 engineers',
    link: 'https://cbscscreen.com'
  }
]
