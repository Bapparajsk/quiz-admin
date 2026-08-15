import { Button } from "@heroui/react";
import { IconPlusFilled } from "@tabler/icons-react";
import Link from "next/link";

export const QuizzersHeader = () => {
    return (
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
                <h1 className="mb-1 font-display-lg text-display-lg text-on-surface">Quizzes</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">Create, manage and organize your quizzes.</p>
            </div>

            <Link href="/quizzes/new" className="w-full md:w-auto">
                <Button
                    size="lg"
                >
                    <IconPlusFilled />
                    Add Quiz
                </Button>
            </Link>
        </div>
    );
};
