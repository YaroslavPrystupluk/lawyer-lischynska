import { FC } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import lawyer from "/image/lawyer.webp";

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary/60 to-secondary h-[100vh] overflow-hidden pt-4">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center md:items-start md:px-12 justify-center">
        <section className="text-primary uppercase text-xl md:text-4xl xl:text-6xl font-bold justify-self-start py-3 md:py-16 w-full flex justify-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative px-4 md:py-8 max-w-2xl rounded-2xl bg-gradient-to-br from-violet-500/15 to-violet-300/10 backdrop-blur shadow-md border border-violet-400/40"
          >
            <div className="text-left text-4xl text-violet-600 font-serif leading-none">
              &ldquo;
            </div>
            <cite className="block text-lg sm:text-xl leading-8 font-medium text-neutral-900 dark:text-neutral-100">
              Працюю чесно, сумлінно та в інтересах кожного клієнта
            </cite>
            <div className="text-right text-4xl text-violet-600 font-serif leading-none">
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
