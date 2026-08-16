import { create } from "zustand";

export type Step = {
    id: number;
    title: string;
    description: string;
};

type QuizStepperStore = {
    currentStep: number;
};

export const STEPS: Step[] = [
    {
        id: 0,
        title: "Setup",
        description: "Setup your quiz",
    },
    {
        id: 1,
        title: "Questions",
        description: "Create questions",
    },
    {
        id: 3,
        title: "Review",
        description: "Review & publish",
    },
]

export const backTo = [
    { back: "Quizzes", header: "Create a new quiz", subtitle: "Follow the steps to create your quiz" },
    { back: "Setup", header: "Add questions", subtitle: "Add questions to your quiz" },
    { back: "Questions", header: "Review Quiz", subtitle: "Review your quiz before publishing" },
]

export const useQuizStepperStore = create<QuizStepperStore>(() => ({
    currentStep: 2,
}));

// actions 

export const nextStep = () => {
    useQuizStepperStore.setState((state) => {
        if (state.currentStep < STEPS.length - 1) {
            return { currentStep: state.currentStep + 1 };
        }
        return state;
    });
};

export const previousStep = () => {
    useQuizStepperStore.setState((state) => {
        if (state.currentStep > 0) {
            return { currentStep: state.currentStep - 1 };
        }
        return state;
    });
};

export const goToStep = (step: number) => {
    useQuizStepperStore.setState((state) => {
        if (step >= 0 && step < STEPS.length) {
            return { currentStep: step };
        }
        return state;
    });
};

export const reset = () => {
    useQuizStepperStore.setState({ currentStep: 0 });
};