import { Card, Chip } from "@heroui/react";
import { AnswerOptionsContainer } from "./answerOptionsContainer";
import { QuestionsDetails } from "./questionsDetails";


const answerOptions = [
    { id: "a", label: "Answer A" },
    { id: "b", label: "Answer B" },
    { id: "c", label: "Answer C" },
    { id: "d", label: "Answer D" },
];

export const QuestionsContainer = () => {
    return (
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

            <div className="grid gap-6">
                <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <Card.Header>
                        <div className="border-b border-white/10 pb-5">
                            <h2 className="text-2xl font-semibold text-white">Question checklist</h2>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                Use this panel to keep the main question tab clean while still surfacing the essentials.
                            </p>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="space-y-4">
                            {[
                                "Question text written",
                                "Answer choices added",
                                "Media attached when needed",
                                "Correct answer selected",
                            ].map((item) => (
                                <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <span className="text-sm text-white/70">{item}</span>
                                    <Chip size="sm" variant="soft">
                                        Pending
                                    </Chip>
                                </div>
                            ))}
                        </div>
                    </Card.Content>
                </Card>

                <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                    <Card.Header>
                        <div className="border-b border-white/10 pb-5">
                            <h2 className="text-2xl font-semibold text-white">Live preview</h2>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                A compact preview of how the question will read in the quiz player.
                            </p>
                        </div>
                    </Card.Header>
                    <Card.Content>
                        <div className="rounded-3xl border border-cyan-400/15 bg-linear-to-br from-cyan-400/10 to-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">Preview</p>
                            <h3 className="mt-3 text-xl font-semibold text-white">Which React hook handles side effects?</h3>
                            <div className="mt-4 space-y-3">
                                {answerOptions.map((option) => (
                                    <div key={option.id} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75">
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </section>
    );
};
