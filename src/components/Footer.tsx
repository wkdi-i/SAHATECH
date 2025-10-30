import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={new URL('../assets/saha-logo.jpg', import.meta.url).href} 
              alt="SAHA" 
              className="h-14 w-auto object-contain"
            />
            <p className="font-inter text-primary-foreground/80 leading-relaxed">
              {t('footerText')}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg">{t('contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-blue" />
                <span className="font-inter">+212600808474</span>
              </div>
              <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary-blue" />
                <span className="font-inter">contact@sahatech.ma</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary-blue" />
                <span className="font-inter">Marrakech, Morocco</span>
              </div>
            </div>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-4">
            <h3 className="font-inter font-semibold text-lg">{t('services')}</h3>
            <ul className="space-y-2 font-inter text-primary-foreground/80">
              <li>• {t('service1Title')}</li>
              <li>• {t('service2Title')}</li>
              <li>• {t('service3Title')}</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};