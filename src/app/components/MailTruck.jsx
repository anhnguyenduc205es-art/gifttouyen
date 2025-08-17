"use client"

import { Camera, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import "../assets/styles/MailTruck.css"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { Mail, Heart, Sparkles, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"


export default function MailTruck() {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)

    const letterText = `Chúc mừng sinh nhật ngừi Uyên , Tuổi mới chúc em lúc nào cũng cười tươi, gặp toàn chuyện vui, gặp nhiều may mắn. Mong em luôn hạnh phúc, làm gì cũng thuận lợi và có thật nhiều kỷ niệm đẹp bên gia đình, bạn bè nhé 🎂✨`

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < letterText.length) {
                    setCurrentText(letterText.slice(0, index + 1))
                    index++

                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                    confetti({
                        particleCount: 50,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#ff69b4", "#ff1493", "#9370db", "#8a2be2", "#ffd700"],
                    })
                }
            }, 30)

            return () => clearInterval(timer)
        }
    }, [showText, letterText])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }


    return (
        <div className="mail-truck-component bg-gradient-to-br from-pink-200 via-rose-300 to-purple-300">
            <motion.div
                className="flex-1 items-center justify-center relative overflow-hidden cursor-pointer"
                style={{ width: '100%', height: '100%' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
            >


                <div className="envelope-container w-[300px]">
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenLetter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-80 h-52 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-26 bg-gradient-to-br from-pink-300 to-purple-300 transform origin-top"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mail className="w-16 h-16 text-pink-500" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Sparkles className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-pink-700 text-base font-semibold"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        Click to open
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="letter"
                                className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-pink-300 p-8 relative transition-all"
                                initial={{ rotateX: -90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #fce7f3 0%, #fae8ff 25%, #e0e7ff 50%, #fdf2f8 75%, #fce7f3 100%)",
                                }}
                            >
                                <div className="text-center mb-3">
                                    <motion.div
                                        className="inline-block"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        ✨
                                    </motion.div>
                                </div>

                                <div className="min-h-64 max-h-72 overflow-y-auto text-gray-700 leading-relaxed">
                                    {showText && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 mr-2 ">
                                            <div className="whitespace-pre-wrap font-cute">
                                                {currentText}
                                                {showCursor && (
                                                    <motion.span
                                                        className="inline-block w-0.5 h-4 bg-purple-600 ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {currentText === letterText && (
                                    <motion.div
                                        className="text-center mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <button
                                            onClick={() => window.location.href = 'https://anhnguyenduc205es-art.github.io/giftouyen/index.html?id=aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZ4dTRidDZiL2ltYWdlL3VwbG9hZC92MTc1NTE4Mzg3OS9JTUdfMjk0Ml9na2FpcjYuanBnLGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2eHU0YnQ2Yi9pbWFnZS91cGxvYWQvdjE3NTUxODM4NzgvSU1HXzI5NDNfeHg2eWF5LmpwZyxodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdnh1NGJ0NmIvaW1hZ2UvdXBsb2FkL3YxNzU1MTgzODc3L0lNR18yOTQxX3dlcDFyei5qcGcsaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZ4dTRidDZiL2ltYWdlL3VwbG9hZC92MTc1NTE4Mzg3Ni9JTUdfMjk0MF9uanFmcXcuanBnLGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2eHU0YnQ2Yi9pbWFnZS91cGxvYWQvdjE3NTUxODM4NzUvSU1HXzI5MzlfdWVsc3AxLmpwZyxodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdnh1NGJ0NmIvaW1hZ2UvdXBsb2FkL3YxNzU1MTgzODc1L0lNR18yOTM4X2NuNmdwOS5qcGcsaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZ4dTRidDZiL2ltYWdlL3VwbG9hZC92MTc1NTE4Mzg3My9JTUdfMjkzN19ydzN1aGEuanBnLGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2eHU0YnQ2Yi9pbWFnZS91cGxvYWQvdjE3NTUxODM4NzAvSU1HXzI5MzRfZHBnbHJ4LmpwZyxodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdnh1NGJ0NmIvaW1hZ2UvdXBsb2FkL3YxNzU1MTgzODcxL0lNR18yOTMyX25uaXI2ei5qcGcsaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZ4dTRidDZiL2ltYWdlL3VwbG9hZC92MTc1NTE4Mzg3MS9JTUdfMjkzNV9sOXlta2guanBnLGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2eHU0YnQ2Yi9pbWFnZS91cGxvYWQvdjE3NTUxODM4NjkvSU1HXzI5Mjlfd3NiZmI3LmpwZyxodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdnh1NGJ0NmIvaW1hZ2UvdXBsb2FkL3YxNzU1MTgzODcyL0lNR18yOTM2X3hkZ3dvdS5qcGcsaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZ4dTRidDZiL2ltYWdlL3VwbG9hZC92MTc1NTQ0NDA4MC9JTUdfMjg3Nl9lY3VvMmcuanBn'}
                                            className="inline-flex items-center gap-2 bg-white/60 text-pink-600 font-medium border border-pink-400 px-5 py-2 rounded-full hover:bg-pink-100 transition-all"
                                        >
                                            {/* <RotateCcw className="w-4 h-4" /> */}
                                            Tiếp theo
                                        </button>
                                    </motion.div>
                                )}

                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="w-6 h-6 text-purple-500" />
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>
                </div>

                <div className="truck-container">
                    <div className="container">
                        <div className="ts">
                            <div className="box"></div>
                            <div className="front">

                                <div className="light"></div>
                                <div className="trapezoid"></div>
                                <div className="pipe"></div>
                                <div className="pipe2"></div>
                                <img className="img1" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img2" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img3" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img4" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img5" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img6" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img7" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img8" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img9" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img10" src="https://i.gifer.com/5zoP.gif" />
                                <img className="img11" src="https://i.gifer.com/5zoP.gif" />
                                <div className="front1"></div>
                                <div className="front2"></div>
                                <div className="window"></div>
                                <div className="hood"></div>
                            </div>
                            <div className="tyre1">
                                <div className="r1"></div>
                                <div className="r2"></div>
                                <div className="r3"></div>
                                <div className="r4"></div>
                                <div className="r5"></div>
                                <div className="r6"></div>
                            </div>
                            <div className="tyre2">
                                <div className="r1"></div>
                                <div className="r2"></div>
                                <div className="r3"></div>
                                <div className="r4"></div>
                                <div className="r5"></div>
                                <div className="r6"></div>
                            </div>
                            <div className="tyre3">
                                <div className="r1"></div>
                                <div className="r2"></div>
                                <div className="r3"></div>
                                <div className="r4"></div>
                                <div className="r5"></div>
                                <div className="r6"></div>
                            </div>
                            <div className="tyre4">
                                <div className="r1"></div>
                                <div className="r2"></div>
                                <div className="r3"></div>
                                <div className="r4"></div>
                                <div className="r5"></div>
                                <div className="r6"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </motion.div>

        </div>
    )
}
