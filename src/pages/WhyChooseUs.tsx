import { CheckCircle, DollarSign, Clock, Settings, Users, Shield, Headphones, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      titleKey: 'why1',
      descKey: 'why1Desc',
      color: 'text-accent-success',
    },
    {
      icon: Clock,
      titleKey: 'why2',
      descKey: 'why2Desc',
      color: 'text-secondary-blue',
    },
    {
      icon: Settings,
      titleKey: 'why3',
      descKey: 'why3Desc',
      color: 'text-accent-blue',
    },
    {
      icon: Users,
      titleKey: 'why4',
      descKey: 'why4Desc',
      color: 'text-primary',
    },
  ];

  const additionalBenefits = [
    {
      icon: Shield,
      titleKey: 'securityTitle',
      descKey: 'securityDesc',
    },
    {
      icon: Headphones,
      titleKey: 'support247Title',
      descKey: 'support247Desc',
    },
    {
      icon: Award,
      titleKey: 'experienceTitle',
      descKey: 'experienceDesc',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-4xl md:text-5xl text-primary mb-6">
              {t('whyTitle')}
            </h1>
            <div className="w-24 h-1 bg-secondary-blue mx-auto mb-8 rounded-full"></div>
            <p className="font-inter text-xl text-muted-foreground leading-relaxed">
              {t('whyHeroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`w-16 h-16 flex-shrink-0 rounded-2xl bg-secondary flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="font-inter font-bold text-xl text-primary mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent-success mr-2" />
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {t(benefit.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-inter font-bold text-3xl text-primary mb-4">
              {t('moreReasonsTitle')}
            </h2>
            <div className="w-16 h-1 bg-secondary-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="card-professional p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-primary mb-3">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-blue flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <blockquote className="font-inter text-xl text-primary-foreground leading-relaxed italic">
                {t('testimonialQuote')}
              </blockquote>
              <cite className="font-inter text-primary-foreground/80 mt-4 block">
                {t('testimonialAuthor')}
              </cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;