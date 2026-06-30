import { motion } from "@/lib/motion";

export const EnvelopeAnimation = () => {
    return (
        <div className="relative w-40 h-48 flex items-center justify-center">
            <motion.div
                initial={{ y: 0, x: 0, rotate: 0, opacity: 1, scale: 1 }}
                animate={{
                    y: [0, 0, 0, -20, -500],
                    x: [0, 0, 0, 10, 500],
                    rotate: [0, 0, 0, 5, 45],
                    opacity: [1, 1, 1, 1, 0],
                    scale: [1, 1, 1, 1, 0.5]
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.4, 0.6, 0.8, 1],
                    ease: "easeInOut"
                }}
                className="relative"
            >
                {/* The Letter */}
                <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    animate={{ y: 15, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-4 w-32 h-24 bg-white rounded-md shadow-lg p-3 flex flex-col gap-2 z-10"
                >
                    <div className="w-full h-2 bg-gray-200 rounded" />
                    <div className="w-4/5 h-2 bg-gray-200 rounded" />
                    <div className="w-full h-2 bg-gray-200 rounded" />
                    <div className="w-3/4 h-2 bg-gray-200 rounded" />
                </motion.div>

                {/* Envelope Body */}
                <div className="relative w-40 h-28 z-20">
                    {/* Back */}
                    <div className="absolute inset-0 bg-primary/20 border-2 border-primary/30 rounded-lg" />

                    {/* Top Flap (Open) */}
                    <motion.div
                        initial={{ rotateX: 0 }}
                        animate={{ rotateX: 180 }}
                        transition={{
                            delay: 1.8,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-0 w-full h-20 origin-top z-30"
                        style={{ perspective: "1000px" }}
                    >
                        <div
                            className="w-full h-full bg-primary/40 border-b border-primary/50"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                        />
                    </motion.div>

                    {/* Front Pocket */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg z-25 pointer-events-none">
                        {/* Left Wing */}
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-primary/30 border-r border-primary/20"
                            style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
                        />
                        {/* Right Wing */}
                        <div
                            className="absolute top-0 right-0 w-full h-full bg-primary/30 border-l border-primary/20"
                            style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
                        />
                        {/* Bottom Wing */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-full bg-primary/40 border-t border-primary/30"
                            style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
