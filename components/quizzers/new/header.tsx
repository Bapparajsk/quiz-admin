"use client";

import { QuizStepper } from "@/components/quiz/quiz-stepper";
import { backTo, previousStep, useQuizStepperStore } from "@/store/quizStepperStore";
import { Chip, Link } from "@heroui/react";
import { IconArrowLeft } from "@tabler/icons-react";


const HeaderTitleComponent = () => {

    const currentStep = useQuizStepperStore((state) => state.currentStep);

    return (
        <div>
            <Link onPress={previousStep}>
                <p className="flex items-center text-sm text-white/50 hover:text-white transition-colors duration-300">
                    <IconArrowLeft stroke={2} size={20} />
                    Back to {backTo[currentStep].back}
                </p>
            </Link>

            <div className="mt-4 flex items-center gap-4">
                <span className="text-2xl font-bold text-white">
                    {backTo[currentStep].header}
                </span>
                {currentStep === 1 && (
                    <Chip size="lg">
                        Java Programming basics
                    </Chip>
                )}
            </div>
            <p className="text-sm text-white/50">{backTo[currentStep].subtitle}</p>
        </div>
    );
}

export const NewQuizHeader = () => {
    return (
        <div className="w-full flex items-center justify-between border-b-2 border-white/30 ">
            <HeaderTitleComponent />
            <QuizStepper />
        </div>
    );
}
