import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col md:flex-row p-4 md:p-6">
        <div
          className="
          flex flex-col md:flex-row w-full max-w-6xl mx-auto
          rounded-xl bg-dark light:bg-white shadow-xl overflow-hidden
        ">
          <Sidebar />
          <Content />
        </div>
      </motion.div>
    </>
  );
}
