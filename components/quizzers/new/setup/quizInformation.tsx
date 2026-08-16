import { SelectFilter } from "@/components/filters";
import { Card, Chip, cn, Input, Label, TextArea, TextField } from "@heroui/react";

const fieldShellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";


export const QuizInformation = () => {
    return (
        <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <Card.Header>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="mt-3 text-3xl font-semibold text-white">Quiz Information</h1>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                            Draft the quiz title, define the category, and shape the initial questions before publishing.
                        </p>
                    </div>

                    <Chip className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-200" size="lg" variant="soft">
                        Draft mode
                    </Chip>
                </div>
            </Card.Header>
            <Card.Content>
                <div className="mt-6 grid gap-5 md:grid-cols-2">

                    <TextField className="w-full" name="quiz-title" type="text">
                        <Label htmlFor="input-type-email">Quiz Title</Label>
                        <Input className={cn(fieldShellClassName)} id="input-type-email" placeholder="e.g. Advanced React Concepts" type="Text" />

                    </TextField>
                    <SelectFilter
                        labelClassName="text-sm text-white/70"
                        placeholder="Category"
                        triggerClassName={fieldShellClassName}
                        items={[
                            { id: "tech", label: "Tech" },
                            { id: "business", label: "Business" },
                        ]}
                    />
                    <SelectFilter
                        labelClassName="text-sm text-white/70"
                        placeholder="Difficulty"
                        triggerClassName={fieldShellClassName}
                        items={[
                            { id: "easy", label: "Easy" },
                            { id: "medium", label: "Medium" },
                            { id: "hard", label: "Hard" },
                        ]}
                    />
                    <SelectFilter
                        labelClassName="text-sm text-white/70"
                        placeholder="Status"
                        triggerClassName={fieldShellClassName}
                        items={[
                            { id: "published", label: "Published" },
                            { id: "draft", label: "Draft" },
                            { id: "closed", label: "Closed" },
                        ]}
                    />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                    <Label className="text-white/70" htmlFor="quiz-description">Quiz description</Label>
                    <TextArea
                        className={cn(fieldShellClassName, "text-base")}
                        aria-label="Quiz description"
                        id="quiz-description"
                        placeholder="This week's highlights..."
                        rows={5}

                    />
                </div>
            </Card.Content>
        </Card>
    );
}
