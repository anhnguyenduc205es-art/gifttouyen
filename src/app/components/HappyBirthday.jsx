"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Ballpit from "./Ballpit"
import confetti from "canvas-confetti"

export default function HappyBirthday({ onNext }) {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const colors = ["#ff69b4", "#ff1493", "#9370db"]

    useEffect(() => {
        const updateScreenSize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);
        useEffect(() => {
        const duration = 2500
        const end = Date.now() + duration

        const frame = () => {
            const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

            for (let i = 0; i < 2; i++) {
                confetti({
                    particleCount: 1,
                    angle: i === 0 ? 60 : 120,
                    spread: 55,
                    origin: { x: i === 0 ? 0 : 1 },
                    colors: [randomColor()],
                })
            }

            if (Date.now() < end) {
                requestAnimationFrame(frame)
            }
        }

        frame()
    }, [])
    // Function để tính toán số lượng spheres dựa trên kích thước màn hình
    const getBallpitCount = () => {
        const { width, height } = screenSize;
        
        // Nếu chưa có kích thước màn hình, sử dụng window.innerWidth/Height
        const actualWidth = width || window.innerWidth;
        const actualHeight = height || window.innerHeight;
        const screenArea = actualWidth * actualHeight;

        // Tính toán dựa trên diện tích màn hình
        if (screenArea < 500000) { // Màn hình nhỏ (mobile)
            return 60;
        } else if (screenArea < 1000000) { // Màn hình trung bình (tablet)
            return 100;
        } else if (screenArea < 2000000) { // Màn hình lớn (desktop)
            return 150;
        } else { // Màn hình rất lớn
            return 200;
        }
    };

    // Function để tính toán không gian dựa trên kích thước màn hình
    const getBallpitSpace = () => {
        const { width, height } = screenSize;
        
        // Nếu chưa có kích thước màn hình, sử dụng window.innerWidth/Height
        const actualWidth = width || window.innerWidth;
        const actualHeight = height || window.innerHeight;
        const screenArea = actualWidth * actualHeight;

        if (screenArea < 500000) { // Màn hình nhỏ (mobile)
            return { maxX: 1, maxY: 2, maxZ: 3 };
        } else if (screenArea < 1000000) { // Màn hình trung bình (tablet)
            return { maxX: 2 ,maxY: 3, maxZ: 4 };
        } else if (screenArea < 2000000) { // Màn hình lớn (desktop)
            return { maxX: 3, maxY: 4, maxZ:5 };
        } else { // Màn hình rất lớn
            return { maxX: 4, maxY: 5, maxZ: 6 };
        }
    };

  

    // Cake
    const AnimatedCake = () => (
        <motion.div
            className="relative z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
                position: 'relative',
                zIndex: 20,
                pointerEvents: 'none'
            }}
        >
            <div className="relative flex flex-col items-center">
                {/* Candles */}
                <div className="absolute -top-11 left-1/2 -translate-x-1/2 w-[50px] flex justify-between">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="relative">
                            <motion.div
                                className="relative mx-auto"
                                animate={{
                                    scaleY: [1, 1.3, 1],
                                    scaleX: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                }}
                            >
                                <div className="w-2 h-3 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full mx-auto" />
                                <motion.div
                                    className="w-3 h-3 bg-yellow-300/50 rounded-full absolute -top-1 -left-0.5 blur-sm"
                                    animate={{
                                        scale: [0.8, 1.2, 0.8],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                    }}
                                />
                            </motion.div>
                            <div className="w-1.5 h-8 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-sm mx-auto shadow-sm" />
                        </div>
                    ))}
                </div>


                {/* Top layer */}
                <div className="w-20 h-10 bg-gradient-to-b from-purple-200 to-purple-400 rounded-xl relative mx-auto -mt-1 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-300 to-indigo-400 rounded-t-xl" />
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-3 w-1.5 h-1.5 bg-pink-100 rounded-full"
                            style={{ left: `${35 + i * 15}%` }}
                        />
                    ))}
                </div>

                {/* Middle layer */}
                <div className="w-28 h-12 bg-gradient-to-b from-pink-200 to-pink-400 rounded-xl relative mx-auto -mt-2 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-300 to-purple-400 rounded-t-xl" />
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-3 w-1.5 h-1.5 bg-white rounded-full"
                            style={{ left: `${20 + i * 15}%` }}
                        />
                    ))}
                </div>

                {/* Bottom layer */}
                <div className="w-36 h-14 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-xl relative mx-auto -mt-1 shadow-lg">
                    <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-pink-300 to-pink-400 rounded-t-xl" />
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-4 w-2 h-2 bg-red-400 rounded-full"
                            style={{ left: `${15 + i * 12}%` }}
                        />
                    ))}
                </div>

                {/* Cake plate */}
                <div className="w-40 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full shadow-lg" />
            </div>
        </motion.div>
    )

    return (
        <motion.div
            className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Ballpit background - full screen */}
            <div className="absolute inset-0 z-0 grid w-full h-full items-center justify-items-center bg-gradient-to-br from-pink-200 via-rose-300 to-purple-300">
                <Ballpit
                    // Số lượng và kích thước
                    count={getBallpitCount()}
                    minSize={0.5}
                    maxSize={1}
                    size0={2}

                    // Màu sắc - Random màu hồng mộng mơ
                    colors={[
                        0xffb3d9, // Hồng nhạt
                        0xff8ac4, // Hồng đậm
                        0xff69b4, // Hot pink
                        0xff1493, // Deep pink
                        0xffc0cb, // Pink
                        0xffb6c1, // Light pink
                        0xff69b4, // Hot pink
                        0xda70d6, // Orchid
                        0xdda0dd, // Plum
                        0xe6e6fa, // Lavender
                        0xf8b8d8, // Baby pink
                        0xffd1dc  // Pastel pink
                    ]}
                    ambientColor={0xffe6f2} // Ambient màu hồng nhạt
                    ambientIntensity={0.9}
                    lightIntensity={180}

                    // Vật lý
                    gravity={0.01}
                    friction={0.998}
                    wallBounce={0.95}
                    maxVelocity={0.2}

                    // Không gian - Tự động điều chỉnh theo kích thước màn hình
                    {...getBallpitSpace()}

                    // Chất liệu - Tăng độ trong suốt và lấp lánh
                    materialParams={{
                        metalness: 0.2,
                        roughness: 0.3,
                        clearcoat: 1,
                        clearcoatRoughness: 0.1
                    }}

                    // Tương tác
                    followCursor={false}
                    controlSphere0={true}

                    // CSS
                    className="my-ballpit"
                />
            </div>

            <motion.div
                className="text-center mb-3 relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 1.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                }}
            >
                <motion.h1
                    className="text-3xl md:text-7xl py-1.5  md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                >
                    Chúc mừng sinh nhật
                </motion.h1>

                {/* Avatar Image */}
                <motion.div
                    className="mb-6 relative z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Glow effect */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full blur-xl opacity-50 animate-pulse"></div> */}
                        
                        {/* Avatar image */}
                        <div className="relative w-40 h-40 mx-auto flex-shrink-0">
                            <img
                                src="https://res.cloudinary.com/dvxu4bt6b/image/upload/v1755183870/IMG_2934_dpglrx.jpg"
                                alt="Birthday Person"
                                className="w-full h-full object-cover rounded-full border-4 border-white/80 shadow-2xl"
                                style={{ aspectRatio: '1/1' }}
                            />
                            
                            {/* Sparkle effects */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    rotate: [0, 360],
                                }}
                                transition={{ 
                                    opacity: { delay: 1.8, duration: 0.8 },
                                    scale: { delay: 1.8, duration: 0.8 },
                                    rotate: { duration: 2, repeat: Infinity, delay: 2.6 }
                                }}
                            >
                                ✨
                            </motion.div>
                            
                           
                        </div>
                    </div>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
                >
                    Tố Uyên
                    {/* <span className="text-white">💕</span> */}
                </motion.h2>

              
                <motion.div 
                    className="mb-3 mt-24 relative z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.0, duration: 1.2, ease: "easeOut" }}
                    style={{ 
                        position: 'relative',
                        zIndex: 20,
                        pointerEvents: 'none'
                    }}
                >
                    <AnimatedCake />
                </motion.div>
                {/* <motion.h2
                    className="text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 5.5, duration: 1.5, ease: "easeOut" }}
                >
                    Chạm vào màn hình i
                </motion.h2> */}
                <motion.button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white text-lg md:text-xl px-8 py-4 rounded-full shadow-2xl border-2 border-white/70 transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(236, 72, 153, 0.3)"
                    }}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                >
                    <motion.div 
                        className="flex items-center space-x-3" 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.0, duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="font-semibold">Tiếp tục nè</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.div>
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Next Button */}
          
        </motion.div>
    )
}
