import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '100+', labelKey: 'happyClients' },
    { icon: Award, value: '5+', labelKey: 'yearsExperience' },
    { icon: CheckCircle, value: '24/7', labelKey: 'supportAvailable' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('aboutTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Company Logo */}
              <div className="text-center lg:text-left">
                <div className="w-64 h-64 mx-auto lg:mx-0 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-strong p-8">
                  <img 
                    src={new URL('../assets/saha-logo-full.jpg', import.meta.url).href} 
                    alt="SAHA Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="font-inter font-bold text-3xl text-primary mb-4">
                  {t('professionalExpert')}
                </h2>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  {t('aboutParagraph1')}
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  {t('aboutParagraph2')}
                </p>

                {/* Certifications/Skills */}
                <div className="space-y-3">
                  <h3 className="font-inter font-semibold text-xl text-primary">{t('expertiseAreas')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      {t('hardwareDiagnostics')}
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      {t('networkConfig')}
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      {t('cloudSolutions')}
                    </li>
                    <li className="flex items-center font-inter text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-3" />
                      {t('securityInstallation')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-secondary-blue" />
                    </div>
                    <div className="font-inter font-bold text-4xl text-primary-foreground mb-3">
                      {stat.value}
                    </div>
                    <div className="font-inter text-primary-foreground/80 text-lg">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;