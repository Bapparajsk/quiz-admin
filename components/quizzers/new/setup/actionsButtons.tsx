"use client";

import { nextStep } from "@/store/quizStepperStore";
import { Button } from "@heroui/react";

export const ActionsButtons = () => {

    const handleClick = () => {

        if (window === undefined) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        nextStep();
    };

    return (
        <div className="flex w-full items-center justify-end gap-4">
            <Button
                variant="ghost"
            >
                Cancel
            </Button>
            <Button
                variant="tertiary"
            >
                Save as Draft
            </Button>
            <Button
                variant="primary"
                onPress={handleClick}
            >
                Create Quiz
            </Button>
        </div>
    );
};
