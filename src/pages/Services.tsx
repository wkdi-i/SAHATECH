import { Camera, Network, Phone, Headphones, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Camera,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      features: ['service1Feature1', 'service1Feature2', 'service1Feature3'],
    },
    {
      icon: Network,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      features: ['service2Feature1', 'service2Feature2', 'service2Feature3', 'service2Feature4'],
    },
    {
      icon: Phone,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      features: ['service3Feature1', 'service3Feature2', 'service3Feature3', 'service3Feature4'],
    },
    {
      icon: Headphones,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
      features: ['service4Feature1', 'service4Feature2', 'service4Feature3', 'service4Feature4'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('servicesTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              {t('servicesHeroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-professional p-8">
                  {/* Service Header */}
                  <div className="flex items-start mb-6">
                    <div className="tech-icon mr-4 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-inter font-bold text-xl text-primary mb-2">
                        {t(service.titleKey)}
                      </h3>
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {t(service.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-3">
                    <h4 className="font-inter font-semibold text-primary">{t('whatsIncluded')}</h4>
                    <ul className="space-y-2">
                      {service.features.map((featureKey, featureIndex) => (
                        <li key={featureIndex} className="flex items-center font-inter text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent-success mr-3 flex-shrink-0" />
                          {t(featureKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-subtle-gradient rounded-2xl">
            <h2 className="font-inter font-bold text-2xl text-primary mb-4">
              {t('customSolutionsTitle')}
            </h2>
            <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('customSolutionsDesc')}
            </p>
            <Button 
              size="lg" 
              className="btn-hero font-inter font-semibold"
              onClick={() => window.open('https://wa.me/212600808474', '_blank')}
            >
              {t('requestSupport')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;