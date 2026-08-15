import { Chip, cn } from "@heroui/react";
import { More_horizIcon } from "../icon/more_horiz";

export interface Quiz {
    name: string;
    category: string;
    questions: number;
    attempts: number;
    difficulty: string;
    status: string;
    statusClass: "published" | "draft" | "closed";
}

function formatAttempts(attempts: number) {
    return attempts.toLocaleString("en-US");
}

export const QuizItem = ({ quiz }: { quiz: Quiz }) => {

    const itemClassName = "px-6 py-4";

    return (
        <tr key={quiz.name} className="transition-colors duration-200 hover:bg-[#1E293B] hover:cursor-pointer">
            <td className={cn("font-semibold", itemClassName)}>{quiz.name}</td>
            <td className={cn("text-on-surface-variant", itemClassName)}>{quiz.category}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{quiz.questions}</td>
            <td className={cn("text-right font-label-mono", itemClassName)}>{formatAttempts(quiz.attempts)}</td>
            <td className={cn(itemClassName)}>
                <Chip variant={"primary"} color={quiz.difficulty === "Easy" ? "success" : quiz.difficulty === "Medium" ? "warning" : "danger"}>
                    {quiz.difficulty}
                </Chip>
            </td>
            <td className={cn(itemClassName)}>
                <Chip
                    variant={quiz.statusClass === "published" ? "soft" : quiz.statusClass === "draft" ? "secondary" : "tertiary"}
                    color={quiz.statusClass === "published" ? "accent" : quiz.statusClass === "draft" ? "default" : "danger"}
                >
                    {quiz.status}
                </Chip>
            </td>
            <td className={cn("text-right", itemClassName)}>
                <button type="button" className="text-on-surface-variant transition-colors hover:text-primary" aria-label={`More actions for ${quiz.name}`}>
                    <More_horizIcon className="h-4.5 w-4.5" />
                </button>
            </td>
        </tr>
    );
}