import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulating authentication API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Check credentials (replace with real authentication)
      if (email === "user@example.com" && password === "password") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify({ email, name: "Demo User" }));

        toast({ title: "Login successful", description: "Welcome back!", variant: "default" });
        navigate("/dashboard");
      } else {
        toast({ title: "Login failed", description: "Invalid email or password.", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Login error", description: "An unexpected error occurred.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="backdrop-blur-sm bg-white/90 shadow-lg border-0">
          <CardHeader className="text-center space-y-1">
            <CardTitle className="text-3xl font-semibold">Sign in</CardTitle>
            <CardDescription className="text-gray-500">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-gray-500 hover:text-gray-700">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isLoading}>
                {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <>
                  <LogIn size={18} /> Sign in
                </>}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-center text-sm text-gray-500">
              Don't have an account? <Link to="/register" className="font-medium text-black hover:text-gray-800">Sign up</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
