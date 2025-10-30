import { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Instagram, 
  X,
  MessageSquare 
} from 'lucide-react';

interface ContactAction {
  icon: React.ReactNode;
  label: string;
  href: string;
  bgColor: string;
  hoverColor: string;
}

export const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactActions: ContactAction[] = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Appeler',
      href: 'tel:+212600808474',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/212600808474',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:contact@sahatech.ma',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/sahatech1',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600',
    },
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActionClick = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Contact Action Buttons */}
      {isExpanded && (
        <div className="flex flex-col gap-3">
          {contactActions.map((action, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Tooltip */}
              <div className="absolute right-16 mb-1 flex flex-col items-end">
                <div className="hidden group-hover:flex mb-1">
                  <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg">
                    {action.label}
                    <div className="absolute right-0 top-2 transform translate-x-1 rotate-45 w-1 h-1 bg-gray-800"></div>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <button
                onClick={() => handleActionClick(action.href)}
                className={`
                  w-14 h-14 rounded-full 
                  ${action.bgColor} ${action.hoverColor}
                  text-white shadow-lg hover:shadow-xl
                  transition-all duration-300
                  flex items-center justify-center
                  hover:scale-110 active:scale-95
                  group
                `}
                aria-label={action.label}
              >
                {action.icon}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className={`
          w-16 h-16 rounded-full
          bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
          text-white shadow-2xl hover:shadow-blue
          transition-all duration-300
          flex items-center justify-center
          hover:scale-110 active:scale-95
          ${isExpanded ? 'rotate-45' : 'rotate-0'}
          hover:brightness-110
        `}
        aria-label="Contactez-nous"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>

      {/* Bubble tooltip when closed */}
      {!isExpanded && (
        <div className="animate-pulse mb-2 -mr-4">
          <div className="bg-gray-800 text-white text-xs rounded py-2 px-3 whitespace-nowrap shadow-lg">
            Contactez-nous
            <div className="absolute right-0 top-3 transform translate-x-1 rotate-45 w-1 h-1 bg-gray-800"></div>
          </div>
        </div>
      )}
    </div>
  );
};

