import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-subtle-gradient">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
          <span className="text-4xl font-bold text-primary-foreground">404</span>
        </div>
        
        <h1 className="font-inter font-bold text-3xl text-primary mb-4">
          Page Not Found
        </h1>
        
        <p className="font-inter text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to our IT support services.
        </p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="btn-hero font-inter font-semibold w-full group">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
              <ArrowLeft className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button variant="outline" size="lg" className="font-inter font-medium w-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
