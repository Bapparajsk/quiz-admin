"use client";

import { QuestionsContainer } from "@/components/quizzers/new/questions";
import { SetupContainer } from "@/components/quizzers/new/setup";
import { useQuizStepperStore } from "@/store/quizStepperStore";

export const NewQuizStep = () => {
    const currentStep = useQuizStepperStore((state) => state.currentStep);

    if (currentStep === 1) {
        return <QuestionsContainer />;
    }

    return <SetupContainer />;
};