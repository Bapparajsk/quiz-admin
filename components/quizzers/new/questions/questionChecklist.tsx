import { Button, Card, Chip } from "@heroui/react";

export const QuestionChecklist = () => {

    return (
        <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <Card.Header>
                <div className="border-b border-white/10 pb-5">
                    <div className="flex items-start justify-between">
                        <h2 className="text-2xl font-semibold text-white">Question checklist</h2>
                        <Chip>
                            4/5 completed
                        </Chip>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                        Use this panel to keep the main question tab clean while still surfacing the essentials.
                    </p>
                </div>
            </Card.Header>
            <Card.Content>
                <div className="space-y-4 scrollbar-thin overflow-y-auto max-h-[calc(100vh-500px)] pr-2">
                    {[
                        "Question text written",
                        "Answer choices added",
                        "Media attached when needed",
                        "Correct answer selected",
                    ].map((item) => (
                        <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            <span className="text-sm text-white/70">{item}</span>
                            {/* <Chip size="sm" variant="soft">
                                Pending
                            </Chip> */}
                            <Button size="sm" variant="ghost" className="text-white/70 hover:bg-white/5">
                                Pending
                            </Button>
                        </div>
                    ))}
                </div>
            </Card.Content>
        </Card>


    );
}