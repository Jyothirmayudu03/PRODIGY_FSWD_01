import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LogIn, UserPlus, LockKeyhole } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto">
              <LockKeyhole className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Secure Authentication System
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A modern, secure authentication system with user registration, 
            login functionality, and protected routes.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild className="bg-black hover:bg-black/90 text-white px-8 h-12 rounded-md transition-all flex items-center gap-2">
              <Link to="/login">
                <LogIn size={18} />
                Sign in
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-gray-300 hover:bg-gray-100 px-8 h-12 rounded-md transition-all flex items-center gap-2">
              <Link to="/register">
                <UserPlus size={18} />
                Create Account
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="pt-12 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              Test credentials: user@example.com / password
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
