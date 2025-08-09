import { FC } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import lawyer from "/image/lawyer.webp";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary/60 to-secondary h-[100vh] overflow-hidden pt-4">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center md:items-start md:px-12 justify-center">
        <section className="text-primary uppercase py-3 px-3 md:px-0 md:py-16 w-full flex justify-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative px-4 md:py-8 max-w-2xl rounded-2xl backdrop-blur shadow-md border border-violet-400/40"
          >
            <div className="text-left text-4xl font-serif leading-none">
              &ldquo;
            </div>
            <cite className="block text-lg sm:text-xl leading-8 font-medium">
              Працюю чесно, сумлінно та в інтересах кожного клієнта
            </cite>
            <div className="text-right text-4xl font-serif leading-none">
              &rdquo;
            </div>
          </motion.blockquote>
        </section>
        <div className="h-[470px] max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] ">
          <img className="object-cover" src={lawyer} alt="lawyer photo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
