import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md space-y-6"
      >
        <h1 className="text-9xl font-bold text-black">404</h1>
        <h2 className="text-2xl font-medium text-gray-700">Page not found</h2>
        <p className="text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-black hover:bg-black/90 text-white transition-all px-8">
          <Link to="/">Go back home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
