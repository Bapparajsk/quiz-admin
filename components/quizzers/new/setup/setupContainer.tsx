
import { ActionsButtons } from "./actionsButtons";
import { QuizInformation } from "./quizInformation";


export const SetupContainer = () => {
    return (
        <section className="w-full flex flex-col gap-6">
            <QuizInformation />
            <ActionsButtons />
        </section>
    );
};


