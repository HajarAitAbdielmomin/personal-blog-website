import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            >
                <Loader2 className="w-10 h-10 text-blue-600" />
            </motion.div>
            <p className="mt-3 text-gray-700 font-medium tracking-wide">Loading...</p>
        </div>
    );
}
