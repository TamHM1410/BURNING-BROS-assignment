import { motion } from "framer-motion";

function NotFoundPage() {
  const text = "404 - Not found".split(" ");

  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <div className="flex">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
            className="text-[40px] font-bold mr-2" 
          >
            {el}
          </motion.span>
        ))}
      </div>
      <p>Your're finding page not found.</p>
    </div>
  );
}

export default NotFoundPage;
