"use client";

import { nextStep } from "@/store/quizStepperStore";
import { Button } from "@heroui/react";
import { IconFolderPlus, IconScanPosition } from "@tabler/icons-react";

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
                className={"group"}
            >
                <span className="flex items-center gap-1.5 text-white/70 group-hover:text-white">
                    <IconFolderPlus stroke={3} />
                    Save as Draft
                </span>
            </Button>
            <Button
                variant="primary"
                onPress={handleClick}
            >
                <IconScanPosition stroke={3} />
                Preview & Publish
            </Button>
        </div>
    );
};
