import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    whyChooseUs: 'Why Choose Us',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Installation & Maintenance\nSurveillance Systems | Computer Networks | Technical & Office Support',
    heroSubtitle: 'Professional IT solutions to keep your technology running smoothly while you focus on what matters most.',
    requestSupport: 'Request Support',
    
    // About
    aboutTitle: 'About Us',
    aboutDescription: 'Our mission is to provide our clients with reliable, efficient and tailored technological solutions.',
    
    // Services
    servicesTitle: 'Our IT Services',
    service1Title: 'Surveillance Systems',
    service1Desc: 'Installation and maintenance of all types of surveillance cameras (analog, Wi-Fi, IP and 4G). We guarantee reliable, secure solutions adapted to your specific needs.',
    service2Title: 'Computer Networks',
    service2Desc: 'Professional installation, configuration and security services for your computer networks to ensure performance, stability and data protection.',
    service3Title: 'Telephone Systems',
    service3Desc: 'Setup and installation of modern and efficient telephone systems to improve communication within your company.',
    service4Title: 'Technical & Office Support',
    service4Desc: 'Complete assistance for the installation, maintenance and troubleshooting of your office equipment. We provide fast and professional support.',
    
    // Why Choose Us
    whyTitle: 'Why Choose Our IT Services?',
    why1: 'Affordable & transparent pricing',
    why2: 'Fast response times',
    why3: 'Customized solutions',
    why4: 'Professional & reliable service',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Ready to solve your IT challenges? Contact us today for professional support.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    send: 'Send Message',
    whatsapp: 'WhatsApp',
    
    // Footer
    footerText: 'Surveillance systems | Computer networks | Technical & office support',
    
    // Services Page Details
    servicesHeroDesc: 'Comprehensive IT solutions designed to meet your technology needs and keep your business running smoothly.',
    whatsIncluded: 'What\'s included:',
    service1Feature1: 'Hardware diagnostics and repair',
    service1Feature2: 'Software installation and updates',
    service1Feature3: 'Performance optimization',
    service1Feature4: 'Virus removal and security',
    service2Feature1: 'Network setup and configuration',
    service2Feature2: 'WiFi installation and optimization',
    service2Feature3: 'Network security implementation',
    service2Feature4: 'Troubleshooting connectivity issues',
    service3Feature1: 'VoIP telephone system installation',
    service3Feature2: 'Phone switchboard configuration',
    service3Feature3: 'Integration with existing systems',
    service3Feature4: 'Maintenance and technical support',
    service4Feature1: 'Office equipment installation',
    service4Feature2: 'Preventive and corrective maintenance',
    service4Feature3: 'Fast and efficient troubleshooting',
    service4Feature4: 'Personalized technical support',
    customSolutionsTitle: 'Need Custom IT Solutions?',
    customSolutionsDesc: 'Every business has unique IT requirements. Contact us to discuss your specific needs and get a customized solution that fits your budget and objectives.',
    
    // Why Choose Us Page Details
    whyHeroDesc: 'Discover what sets our IT support services apart and why businesses in Marrakech trust us with their technology needs.',
    why1Desc: 'No hidden fees or surprise charges. We provide clear, upfront pricing for all our services with detailed cost breakdowns.',
    why2Desc: 'Quick response times with most issues resolved within 24-48 hours. Emergency support available for critical problems.',
    why3Desc: 'Every solution is tailored to your specific needs and budget. We don\'t believe in one-size-fits-all approaches.',
    why4Desc: 'Committed to excellence in every interaction. Our goal is to build long-term relationships based on trust and results.',
    moreReasonsTitle: 'More Reasons to Choose Us',
    securityTitle: 'Security Focused',
    securityDesc: 'Your data security is our top priority. We implement best practices to protect your information.',
    support247Title: '24/7 Support Available',
    support247Desc: 'Round-the-clock support for critical issues. We\'re here when you need us most.',
    experienceTitle: 'Proven Experience',
    experienceDesc: 'Years of experience serving businesses and individuals in the Marrakech region.',
    testimonialQuote: '"The difference is in the details - professional service, transparent communication, and genuine care for our technology needs. Highly recommended for any business in Marrakech."',
    testimonialAuthor: '- Satisfied Business Client',
    
    // Contact Page
    sendMessageTitle: 'Send us a Message',
    yourFullName: 'Your full name',
    yourEmail: 'your.email@example.com',
    yourPhone: '+212 6XX XXX XXX',
    describeNeeds: 'Describe your IT support needs or questions...',
    contactInfo: 'Contact Information',
    phoneLabel: 'Phone',
    available247: 'Available 7/7',
    emailLabel: 'Email',
    replyWithin24: 'We reply within 24 hours',
    locationLabel: 'Location',
    marrakechMorocco: 'Marrakech, Morocco',
    quickWhatsApp: 'Quick WhatsApp Support',
    instantSupport: 'Get instant support via WhatsApp. Perfect for urgent technical issues.',
    businessHours: 'Business Hours',
    availability: 'Availability',
    availableRoundClock: 'We\'re available around the clock to support your IT needs, including emergency services.',
    
    // About Page
    profilePhotoPlaceholder: 'Space reserved for profile photo or company logo',
    professionalExpert: 'Our Mission',
    aboutParagraph1: 'Our mission is to provide our clients with reliable, efficient and tailored technological solutions. We support businesses and individuals in the installation, maintenance and security of their IT and surveillance systems.',
    aboutParagraph2: 'We take pride in offering quality, fast and personalized service. Thanks to our technical expertise and attention to detail, we guarantee our clients sustainable, efficient and secure solutions.',
    expertiseAreas: 'Our Areas of Expertise',
    hardwareDiagnostics: 'Surveillance Systems',
    networkConfig: 'Computer Networks',
    cloudSolutions: 'Telephone Systems',
    securityInstallation: 'Technical & Office Support',
    happyClients: 'Happy Clients',
    yearsExperience: 'Years Experience',
    supportAvailable: 'Support Available',
    responseTime: 'Response Time',
    
    // Hero Section
    professionalSolutions: 'Professional IT Solutions in Marrakech',
    professionalService: '7/7 Availability',
    transparentPricing: 'Transparent Pricing',
    
    // Why Choose Preview
    whyChooseCommitment: 'Our commitment to excellence and customer satisfaction makes us the trusted choice for IT support in Marrakech. We combine technical expertise with personalized service to deliver solutions that work for your specific needs.',
    viewAllServices: 'View All Services',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    whyChooseUs: 'Pourquoi nous choisir',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Installation & maintenance\nSystèmes de surveillance | Réseaux informatiques | Support technique & bureautique',
    heroSubtitle: 'Solutions informatiques professionnelles pour maintenir votre technologie en marche pendant que vous vous concentrez sur l\'essentiel.',
    requestSupport: 'Demander un service',
    
    // About
    aboutTitle: 'À propos de nous',
    aboutDescription: 'Notre mission est d\'offrir à nos clients des solutions technologiques fiables, performantes et adaptées à leurs besoins.',
    
    // Services
    servicesTitle: 'Nos Services Informatiques',
    service1Title: 'Systèmes de surveillance',
    service1Desc: 'Installation et maintenance de tous types de caméras de surveillance (analogiques, Wi-Fi, IP et 4G). Nous garantissons des solutions fiables, sécurisées et adaptées à vos besoins spécifiques.',
    service2Title: 'Réseaux informatiques',
    service2Desc: 'Services professionnels d\'installation, de configuration et de sécurisation de vos réseaux informatiques pour assurer performance, stabilité et protection des données.',
    service3Title: 'Systèmes téléphoniques',
    service3Desc: 'Mise en place et installation de systèmes téléphoniques modernes et efficaces pour améliorer la communication au sein de votre entreprise.',
    service4Title: 'Support technique et bureautique',
    service4Desc: 'Assistance complète pour l\'installation, la maintenance et le dépannage de vos équipements bureautiques. Nous assurons un support rapide et professionnel.',
    
    // Why Choose Us
    whyTitle: 'Pourquoi choisir nos services IT?',
    why1: 'Tarifs abordables et transparents',
    why2: 'Intervention rapide',
    why3: 'Solutions personnalisées',
    why4: 'Service professionnel et fiable',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Prêt à résoudre vos défis IT? Contactez-nous aujourd\'hui pour un support professionnel.',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    message: 'Message',
    send: 'Envoyer le message',
    whatsapp: 'WhatsApp',
    
    // Footer
    footerText: 'Systèmes de surveillance | Réseaux informatiques | Support technique & bureautique',
    
    // Services Page Details
    servicesHeroDesc: 'Solutions informatiques complètes conçues pour répondre à vos besoins technologiques et assurer le bon fonctionnement de votre entreprise.',
    whatsIncluded: 'Ce qui est inclus :',
    service1Feature1: 'Diagnostic et réparation matériel',
    service1Feature2: 'Installation et mises à jour logicielles',
    service1Feature3: 'Optimisation des performances',
    service1Feature4: 'Suppression de virus et sécurité',
    service2Feature1: 'Configuration et installation réseau',
    service2Feature2: 'Installation et optimisation WiFi',
    service2Feature3: 'Mise en place de la sécurité réseau',
    service2Feature4: 'Dépannage des problèmes de connectivité',
    service3Feature1: 'Installation de systèmes téléphoniques VoIP',
    service3Feature2: 'Configuration de standards téléphoniques',
    service3Feature3: 'Intégration avec systèmes existants',
    service3Feature4: 'Maintenance et support technique',
    service4Feature1: 'Installation d\'équipements bureautiques',
    service4Feature2: 'Maintenance préventive et corrective',
    service4Feature3: 'Dépannage rapide et efficace',
    service4Feature4: 'Support technique personnalisé',
    customSolutionsTitle: 'Besoin de Solutions IT Personnalisées?',
    customSolutionsDesc: 'Chaque entreprise a des besoins informatiques uniques. Contactez-nous pour discuter de vos besoins spécifiques et obtenir une solution personnalisée adaptée à votre budget et vos objectifs.',
    
    // Why Choose Us Page Details
    whyHeroDesc: 'Découvrez ce qui distingue nos services de support informatique et pourquoi les entreprises de Marrakech nous font confiance pour leurs besoins technologiques.',
    why1Desc: 'Aucun frais caché ni surprise. Nous proposons des tarifs clairs et transparents pour tous nos services avec des détails complets des coûts.',
    why2Desc: 'Délais d\'intervention rapides avec la plupart des problèmes résolus sous 24 à 48 heures. Support d\'urgence disponible pour les problèmes critiques.',
    why3Desc: 'Chaque solution est adaptée à vos besoins spécifiques et à votre budget. Nous ne croyons pas aux approches universelles.',
    why4Desc: 'Engagement envers l\'excellence dans chaque interaction. Notre objectif est de construire des relations durables basées sur la confiance et les résultats.',
    moreReasonsTitle: 'Autres Raisons de Nous Choisir',
    securityTitle: 'Axé sur la Sécurité',
    securityDesc: 'La sécurité de vos données est notre priorité absolue. Nous mettons en œuvre les meilleures pratiques pour protéger vos informations.',
    support247Title: 'Support 24/7 Disponible',
    support247Desc: 'Support permanent pour les problèmes critiques. Nous sommes là quand vous avez le plus besoin de nous.',
    experienceTitle: 'Expérience Confirmée',
    experienceDesc: 'Des années d\'expérience au service des entreprises et particuliers de la région de Marrakech.',
    testimonialQuote: '"La différence est dans les détails - service professionnel, communication transparente et véritable attention à nos besoins technologiques. Hautement recommandé pour toute entreprise à Marrakech."',
    testimonialAuthor: '- Client Entreprise Satisfait',
    
    // Contact Page
    sendMessageTitle: 'Envoyez-nous un message',
    yourFullName: 'Votre nom complet',
    yourEmail: 'votre.email@exemple.com',
    yourPhone: '+212 6XX XXX XXX',
    describeNeeds: 'Décrivez vos besoins en support informatique ou vos questions...',
    contactInfo: 'Informations de Contact',
    phoneLabel: 'Téléphone',
    available247: 'Disponible 7/7',
    emailLabel: 'Email',
    replyWithin24: 'Nous répondons sous 24 heures',
    locationLabel: 'Localisation',
    marrakechMorocco: 'Marrakech, Maroc',
    quickWhatsApp: 'Support WhatsApp Rapide',
    instantSupport: 'Obtenez un support instantané via WhatsApp. Parfait pour les problèmes techniques urgents.',
    businessHours: 'Heures d\'Ouverture',
    availability: 'Disponibilité',
    availableRoundClock: 'Nous sommes disponibles 7/7 pour soutenir vos besoins informatiques, y compris les services d\'urgence.',
    
    // About Page
    profilePhotoPlaceholder: 'Espace réservé pour photo de profil ou logo d\'entreprise',
    professionalExpert: 'Notre mission',
    aboutParagraph1: 'Notre mission est d\'offrir à nos clients des solutions technologiques fiables, performantes et adaptées à leurs besoins. Nous accompagnons les entreprises et les particuliers dans l\'installation, la maintenance et la sécurisation de leurs systèmes informatiques et de surveillance.',
    aboutParagraph2: 'Nous mettons un point d\'honneur à offrir un service de qualité, rapide et personnalisé. Grâce à notre expertise technique et à notre sens du détail, nous garantissons à nos clients des solutions durables, performantes et sécurisées.',
    expertiseAreas: 'Nos domaines d\'expertise',
    hardwareDiagnostics: 'Systèmes de surveillance',
    networkConfig: 'Réseaux informatiques',
    cloudSolutions: 'Systèmes téléphoniques',
    securityInstallation: 'Support technique & bureautique',
    happyClients: 'Clients Satisfaits',
    yearsExperience: 'Années d\'Expérience',
    supportAvailable: 'Support Disponible',
    responseTime: 'Temps de Réponse',
    
    // Hero Section
    professionalSolutions: 'Solutions Informatiques Professionnelles à Marrakech',
    professionalService: 'Disponibilité 7/7',
    transparentPricing: 'Tarification Transparente',
    
    // Why Choose Preview
    whyChooseCommitment: 'Notre engagement envers l\'excellence et la satisfaction client fait de nous le choix de confiance pour le support informatique à Marrakech. Nous combinons expertise technique et service personnalisé pour fournir des solutions adaptées à vos besoins spécifiques.',
    viewAllServices: 'Voir Tous les Services',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};