
import { ActionsButtons } from "./actionsButtons";
import { QuizInformation } from "./quizInformation";
import { QuizSetting } from "./quizSetting";


export const SetupContainer = () => {
    return (
        <section className="w-full flex flex-col gap-6">
            <QuizInformation />
            <QuizSetting />
            <ActionsButtons />
        </section>
    );
};


