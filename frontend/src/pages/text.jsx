import { motion } from "framer-motion";

const DataBoxes = () => {
  const data = [
    { title: "Total Users", value: "12,345", color: "bg-blue-500" },
    { title: "Revenue", value: "$45,678", color: "bg-green-500" },
    { title: "Orders", value: "987", color: "bg-pink-500" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      {data.map((item, i) => (
        <motion.div
          key={i}
          className={`w-40 h-24 rounded-lg shadow-lg text-white flex flex-col justify-center items-center ${item.color} absolute`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 100, 200, 100, 0], // Moves in a horizontal arc
            y: [0, -50, 0, 50, 0], // Moves up and down for a circular effect
          }}
          transition={{
            delay: i * 0.5,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-xl font-bold">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default DataBoxes;
