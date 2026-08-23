import { LivePreview } from "./LivePreview";
import { QuestionChecklist } from "./questionChecklist";

const answerOptions = [
    { id: "a", label: "Answer A" },
    { id: "b", label: "Answer B" },
    { id: "c", label: "Answer C" },
    { id: "d", label: "Answer D" },
];

export const QuestionPreview = () => {
    return (
        <div className="grid gap-6">
            <QuestionChecklist />
            <LivePreview />
        </div>
    );
}