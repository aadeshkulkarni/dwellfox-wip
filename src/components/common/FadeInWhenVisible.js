import { motion } from "framer-motion";

function FadeInWhenVisible({ once=true,delay=0,children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: once }}
        transition={{ delay: delay , duration: 1 }}
        variants={{
          visible: { opacity: 1, bottom:0},
          hidden: { opacity: 0, bottom:500 }
        }}
      >
        {children}
      </motion.div>
    );
  }
  
  export default FadeInWhenVisible