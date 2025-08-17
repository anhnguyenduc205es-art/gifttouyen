"use client"

import { motion } from "motion/react"
import { Gift, Sparkles, Heart } from "lucide-react"
import confetti from "canvas-confetti"
import { useEffect, useState } from "react"

export default function Celebration({ onNext }) {
    const [showMessage, setShowMessage] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    
    // useEffect(() => {
    //     const duration = 2500
    //     const end = Date.now() + duration

    //     const frame = () => {
    //         const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

    //         for (let i = 0; i < 2; i++) {
    //             confetti({
    //                 particleCount: 1,
    //                 angle: i === 0 ? 60 : 120,
    //                 spread: 55,
    //                 origin: { x: i === 0 ? 0 : 1 },
    //                 colors: [randomColor()],
    //             })
    //         }

    //         if (Date.now() < end) {
    //             requestAnimationFrame(frame)
    //         }
    //     }

    //     frame()
    // }, [])

    const handleButtonClick = () => {
        setIsButtonClicked(true)
        setShowMessage(true)
        
        // Hiển thị dòng chữ trong 2 giây rồi mới next
        setTimeout(() => {
            onNext()
        }, 4500)
    }

    return (
        <motion.div
            className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >

            {/* Ẩn tất cả khi showMessage = true */}
            {!showMessage && (
                <>
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            className="relative mb-8"
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="w-32 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-2xl relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <Gift className="w-16 h-16 text-white relative z-10" />
                            </div>
                        </motion.div>

                        {/* <motion.h1
                            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6"
                            style={{
                                filter: "drop-shadow(0 0 30px rgba(255,105,180,0.5))",
                            }}
                        >
                            Time to Celebrate!
                        </motion.h1> */}

                        {/* <motion.p
                            className="text-xl text-purple-300 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            The countdown is over... Let's celebrate! 🎉
                        </motion.p> */}
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                        }}
                    >
                        <button
                            onClick={handleButtonClick}
                            disabled={isButtonClicked}
                            className={`relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%] ${
                                isButtonClicked ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            <motion.div className="flex items-center space-x-2" whileTap={{ scale: 0.95 }}>
                                <Gift className="w-5 h-5" />
                                <span className="font-semibold">Let's Celebrate!</span>
                                <Sparkles className="w-5 h-5" />
                            </motion.div>
                        </button>
                    </motion.div>

                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <p className="text-purple-300 text-base">Click to start the magic! ✨</p>
                    </motion.div>
                </>
            )}

            {/* Dòng chữ nhỏ ở giữa */}
            {showMessage && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <motion.p
                        className="text-xs transform -rotate-180"
                    >
                        Chúc mừng sinh nhật!
                    </motion.p>
                </motion.div>
            )}
        </motion.div>
    )
}
