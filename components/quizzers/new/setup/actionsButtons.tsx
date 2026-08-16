"use client";

import { nextStep } from "@/store/quizStepperStore";
import { Button } from "@heroui/react";

export const ActionsButtons = () => {
    return (
        <div className="flex w-full items-center justify-end gap-4">
            <Button
                variant="ghost"
                size="lg"
            >
                Cancel
            </Button>
            <Button
                variant="tertiary"
                size="lg"
            >
                Save as Draft
            </Button>
            <Button
                variant="primary"
                size="lg"
                onPress={nextStep}
            >
                Create Quiz
            </Button>
        </div>
    );
};
