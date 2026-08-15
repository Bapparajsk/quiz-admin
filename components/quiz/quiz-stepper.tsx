"use client";


import { AnimatePresence, motion } from "motion/react";

import { goToStep, nextStep, previousStep, useQuizStepperStore } from "@/store/quizStepperStore";
import { IconCheck, IconChevronLeft, IconChevronRight, IconCircle } from "@tabler/icons-react";

type QuizStepperProps = {
    children: React.ReactNode;
};

export default function QuizStepper({
    children,
}: QuizStepperProps) {
    const currentStep = useQuizStepperStore(state => state.currentStep);
    const steps = useQuizStepperStore(state => state.steps);

    const progress =
        steps.length > 1
            ? (currentStep / (steps.length - 1)) * 100
            : 0;

    const isLastStep = currentStep === steps.length - 1;

    return (
        <div className="w-full">
            {/* Step Header */}
            <div className="relative mb-10">
                {/* Background Line */}
                <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />

                {/* Progress Line */}
                <motion.div
                    className="absolute left-0 top-5 h-px bg-cyan-400"
                    initial={false}
                    animate={{
                        width: `${progress}%`,
                    }}
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                />

                {/* Steps */}
                <div className="relative flex justify-between">
                    {steps.map((step, index) => {
                        const completed = index < currentStep;
                        const active = index === currentStep;

                        return (
                            <button
                                key={step.id}
                                type="button"
                                onClick={() => goToStep(index)}
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
                    ${completed
                                            ? "border-cyan-400 bg-cyan-400 text-black"
                                            : active
                                                ? "border-cyan-400 bg-black text-cyan-400"
                                                : "border-white/15 bg-[#0b0d10] text-white/30"
                                        }
                  `}
                                >
                                    <AnimatePresence mode="wait">
                                        {completed ? (
                                            <motion.div
                                                key="check"
                                                initial={{
                                                    scale: 0,
                                                    rotate: -45,
                                                }}
                                                animate={{
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                exit={{
                                                    scale: 0,
                                                }}
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
                      ${active || completed
                                                ? "text-white"
                                                : "text-white/35"
                                            }
                    `}
                                    >
                                        {step.title}
                                    </p>

                                    <p className="mt-1 hidden text-xs text-white/30 sm:block">
                                        {step.description}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: -20,
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                    type="button"
                    onClick={previousStep}
                    disabled={currentStep === 0}
                    className="
            inline-flex items-center gap-2 rounded-xl
            border border-white/10 px-4 py-2.5
            text-sm font-medium text-white/70
            transition
            hover:border-white/20 hover:bg-white/5
            hover:text-white
            disabled:pointer-events-none
            disabled:opacity-30
          "
                >
                    <IconChevronLeft size={17} />
                    Back
                </button>

                <div className="flex items-center gap-2 text-xs text-white/30">
                    <span>{currentStep + 1}</span>
                    <span>/</span>
                    <span>{steps.length}</span>
                </div>

                <button
                    type="button"
                    onClick={nextStep}
                    className="
            group inline-flex items-center gap-2
            rounded-xl bg-cyan-400 px-5 py-2.5
            text-sm font-semibold text-black
            transition
            hover:bg-cyan-300
            active:scale-[0.98]
          "
                >
                    {isLastStep ? "Publish Quiz" : "Continue"}

                    {!isLastStep && (
                        <IconChevronRight
                            // size={17}

                            className="
                transition-transform
                group-hover:translate-x-0.5
              "
                        />
                    )}
                </button>
            </div>
        </div>
    );
}