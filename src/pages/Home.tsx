import { HeroSection } from '@/components/HeroSection';
import { ServicesPreview } from '@/components/ServicesPreview';
import { WhyChoosePreview } from '@/components/WhyChoosePreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <WhyChoosePreview />
    </div>
  );
};

export default Home;