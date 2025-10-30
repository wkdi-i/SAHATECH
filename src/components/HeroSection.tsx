import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="relative min-h-[80vh] bg-hero-gradient flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 animate-pulse"
        style={{
          backgroundImage: `url("${backgroundPattern}")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fade-up">
            <CheckCircle className="w-4 h-4 mr-2 text-accent-success" />
            <span className="font-inter font-medium text-sm">{t('professionalSolutions')}</span>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-fade-up">
            <h1 className="font-inter font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-3 md:mb-4">
              {t('heroTitle').split('\n')[0]}
            </h1>
            <h2 className="font-inter font-semibold text-xl md:text-3xl lg:text-4xl leading-relaxed text-primary-foreground/95">
              {t('heroTitle').split('\n')[1]}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            {t('heroSubtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Button 
              size="lg" 
              className="btn-hero font-inter font-semibold px-8 py-4 text-lg group"
              onClick={() => window.open('https://wa.me/212600808474', '_blank')}
            >
              {t('requestSupport')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-blue font-inter font-semibold px-8 py-4 text-lg"
              onClick={() => navigate('/contact')}
            >
              {t('contact')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm font-inter text-primary-foreground/70 animate-fade-up">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-accent-success" />
              {t('professionalService')}
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-accent-success" />
              {t('transparentPricing')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};