import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background3D from "../three/Background3D";
import PageTransition from "../transitions/PageTransition";
import CustomCursor from "../effects/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <CustomCursor />
      <Background3D />
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
