import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { LogOut, User, Shield, Settings } from "lucide-react";

interface UserData {
  name: string;
  email: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    // Get user data
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold"
          >
            Dashboard
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center gap-2 border-gray-200 hover:bg-gray-100 transition-all"
            >
              <LogOut size={16} />
              Sign out
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="overflow-hidden shadow-md border-0">
              <CardHeader className="bg-black text-white">
                <CardTitle>Welcome back, {user.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  You're signed in as {user.email}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">
                  This is a protected route that's only accessible to authenticated users.
                  You're now in a secure area of the application.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <User className="mt-1 text-gray-500" size={20} />
                    <div>
                      <h3 className="font-medium">Account Management</h3>
                      <p className="text-sm text-gray-500">View and update your profile information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <Shield className="mt-1 text-gray-500" size={20} />
                    <div>
                      <h3 className="font-medium">Security Settings</h3>
                      <p className="text-sm text-gray-500">Configure your security preferences</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-md border-0 h-full">
              <CardHeader>
                <CardTitle>Account Overview</CardTitle>
                <CardDescription>Your account information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                      <User size={32} className="text-gray-500" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-lg">{user.name}</h3>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-2 mt-4 border-gray-200 hover:bg-gray-100 transition-all"
                  >
                    <Settings size={16} />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
