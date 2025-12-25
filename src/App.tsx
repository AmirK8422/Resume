import { motion } from "framer-motion"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"


export default function App() {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center p-6"
      >
        <div
          className="
          max-w-6xl w-full rounded-xl
          bg-dark light:bg-white
          shadow-xl flex overflow-hidden
        "
        >
          <Sidebar />
          <Content />
        </div>
      </motion.div>
    </>
  )
}
