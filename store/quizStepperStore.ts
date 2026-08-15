import { create } from "zustand";

export type Step = {
    id: number;
    title: string;
    description: string;
};

type QuizStepperStore = {
    currentStep: number;
    steps: Step[];


};

export const useQuizStepperStore = create<QuizStepperStore>(() => ({
    currentStep: 0,

    steps: [
        {
            id: 0,
            title: "Quiz Details",
            description: "Basic information",
        },
        {
            id: 1,
            title: "Questions",
            description: "Create questions",
        },
        {
            id: 2,
            title: "Settings",
            description: "Configure quiz",
        },
        {
            id: 3,
            title: "Review",
            description: "Review & publish",
        },
    ],
}));

// actions 

export const nextStep = () => {
    useQuizStepperStore.setState((state) => {
        if (state.currentStep < state.steps.length - 1) {
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
        if (step >= 0 && step < state.steps.length) {
            return { currentStep: step };
        }
        return state;
    });
};

export const reset = () => {
    useQuizStepperStore.setState({ currentStep: 0 });
};