import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/services', key: 'services' },
    { path: '/why-choose-us', key: 'whyChooseUs' },
    { path: '/contact', key: 'contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={new URL('../assets/saha-logo.jpg', import.meta.url).href} 
              alt="SAHA" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter font-medium transition-colors hover:text-secondary-blue ${
                  location.pathname === item.path 
                    ? 'text-secondary-blue' 
                    : 'text-muted-foreground'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 border-muted-dark hover:border-secondary-blue"
            >
              <Globe className="w-4 h-4" />
              <span className="font-inter font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-muted-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 px-4 font-inter font-medium rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? 'text-secondary-blue bg-secondary-blue-light' 
                      : 'text-muted-foreground hover:text-secondary-blue hover:bg-secondary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};