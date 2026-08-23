import { LivePreview } from "./LivePreview";
import { QuestionChecklist } from "./questionChecklist";

export const QuestionPreview = () => {
    return (
        <div className="grid gap-6">
            <QuestionChecklist />
            <LivePreview />
        </div>
    );
}