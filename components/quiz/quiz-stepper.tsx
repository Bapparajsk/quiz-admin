"use client";

import { STEPS, useQuizStepperStore } from "@/store/quizStepperStore";
import { IconCheck, IconCircle } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

export const QuizStepper = () => {
    const currentStep = useQuizStepperStore(state => state.currentStep);

    const progress = STEPS.length > 1 ? (currentStep / (STEPS.length - 1)) * 100 - (currentStep * 8) : 0;

    return (
        <div className="w-auto">
            {/* Step Header */}
            <div className="relative mb-10 min-w-xl">
                {/* Background Line */}
                <div className="absolute left-8 right-8 top-5 h-px bg-white/10 " />
                {/* Progress Line */}
                <motion.div
                    className="absolute left-8 right-8 top-5 h-px bg-cyan-400"
                    initial={false}
                    animate={{ width: `${progress}%`, }}
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                        delay: 0.25
                    }}
                />

                {/* Steps */}
                <div className="relative flex justify-between">
                    {STEPS.map((step, index) => {
                        const completed = index < currentStep;
                        const active = index === currentStep;

                        return (
                            <div
                                key={step.id}
                                className="group flex flex-col items-center"
                            >
                                {/* Circle */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: active ? 1.08 : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25,
                                    }}
                                    className={`
                                        relative z-10 flex h-10 w-10 items-center
                                        justify-center rounded-full border
                                        transition-colors duration-300
                                        ${completed ? "border-cyan-400 bg-cyan-400 text-black"
                                            : active ? "border-cyan-400 bg-black text-cyan-400"
                                                : "border-white/15 bg-[#0b0d10] text-white/30"
                                        }`}
                                >
                                    <AnimatePresence mode="wait">
                                        {completed ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0, rotate: -45 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <IconCheck size={18} strokeWidth={3} />
                                            </motion.div>
                                        ) : active ? (
                                            <motion.div
                                                key="active"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                            >
                                                <IconCircle
                                                    size={10}
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                />
                                            </motion.div>
                                        ) : (
                                            <motion.span
                                                key="number"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-xs font-semibold"
                                            >
                                                {index + 1}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Text */}
                                <div className="mt-3 text-center">
                                    <p
                                        className={`
                                            text-sm font-medium transition-colors
                                            ${active || completed ? "text-white" : "text-white/35"}`}
                                    >
                                        {step.title}
                                    </p>

                                    <p className="mt-1 hidden text-xs text-white/30 sm:block">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}