import { Card } from "@heroui/react";
import { ActionsButtons } from "./actionsButtons";
import { AnswerOptionsContainer } from "./answerOptionsContainer";
import { QuestionPreview } from "./questionPreview";
import { QuestionsDetails } from "./questionsDetails";


export const QuestionsContainer = () => {
    return (
        <div>
            <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr] ">
                <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <Card.Header>
                        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                            <div>
                                <h1 className="mt-3 text-3xl font-semibold text-white">Add Questions</h1>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                                    Build the question body here. The layout keeps the header outside this screen so the editor stays focused on the main tab.
                                </p>
                            </div>
                        </div>
                    </Card.Header>

                    <Card.Content className="mt-6 grid gap-6">
                        <QuestionsDetails />
                        <AnswerOptionsContainer />
                    </Card.Content>
                </Card>

                <QuestionPreview />
            </section>
            <div className="mt-6">
                <ActionsButtons />
            </div>
        </div>
    );
};
