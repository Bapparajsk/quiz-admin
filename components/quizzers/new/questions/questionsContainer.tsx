import { SelectFilter } from "@/components/filters";
import { Button, Card, Chip, Input, TextArea } from "@heroui/react";
import { IconCode, IconPhoto, IconPlus, IconTrash } from "@tabler/icons-react";

const shellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";

const answerOptions = [
    { id: "a", label: "Answer A" },
    { id: "b", label: "Answer B" },
    { id: "c", label: "Answer C" },
    { id: "d", label: "Answer D" },
];

export const QuestionsContainer = () => {
    return (
        <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
            <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <Card.Header>
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Main tab</p>
                            <h1 className="mt-3 text-3xl font-semibold text-white">Add Questions</h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                                Build the question body here. The layout keeps the header outside this screen so the editor stays focused on the main tab.
                            </p>
                        </div>

                        <Chip className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-200" size="lg" variant="soft">
                            Step 2
                        </Chip>
                    </div>
                </Card.Header>

                <Card.Content className="mt-6 grid gap-6">
                    <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <label className="text-sm text-white/70" htmlFor="question-title">
                                Question title
                            </label>
                            <Input
                                className={shellClassName}
                                id="question-title"
                                placeholder="e.g. Which React hook handles side effects?"
                                type="text"
                            />
                        </div>

                        <SelectFilter
                            labelClassName="text-sm text-white/70"
                            placeholder="Question type"
                            triggerClassName={shellClassName}
                            items={[
                                { id: "mcq", label: "Multiple choice" },
                                { id: "code", label: "Code challenge" },
                                { id: "truefalse", label: "True / False" },
                            ]}
                        />
                    </div>

                    <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                        <div>
                            <label className="text-sm text-white/70" htmlFor="question-body">
                                Question prompt
                            </label>
                            <TextArea
                                className="mt-2 min-h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30"
                                id="question-body"
                                placeholder="Write the question prompt, scenario, or instructions here..."
                                rows={7}
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2 text-white">
                                    <IconPhoto size={18} />
                                    <span className="text-sm font-medium">Reference image</span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-white/50">
                                    Attach a diagram, screenshot, or illustration for the question body.
                                </p>
                                <Button className="mt-4 w-full" variant="ghost">
                                    <span className="inline-flex items-center gap-2">
                                        <IconPlus size={16} />
                                        Upload image
                                    </span>
                                </Button>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-2 text-white">
                                    <IconCode size={18} />
                                    <span className="text-sm font-medium">Code block</span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-white/50">
                                    Add starter code or a snippet that users need to inspect.
                                </p>
                                <Button className="mt-4 w-full" variant="ghost">
                                    <span className="inline-flex items-center gap-2">
                                        <IconPlus size={16} />
                                        Add code sample
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <h2 className="text-xl font-semibold text-white">Answer options</h2>
                                <p className="mt-1 text-sm text-white/50">
                                    Keep the correct answer in the first draft and refine distractors later.
                                </p>
                            </div>

                            <Button variant="secondary">
                                <span className="inline-flex items-center gap-2">
                                    <IconPlus size={16} />
                                    Add option
                                </span>
                            </Button>
                        </div>

                        <div className="mt-4 grid gap-4">
                            {answerOptions.map((option, index) => (
                                <div
                                    key={option.id}
                                    className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 lg:flex-row lg:items-center"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm font-semibold text-cyan-200">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-white">{option.label}</p>
                                            <p className="text-xs text-white/40">Mark the correct answer and add supporting details.</p>
                                        </div>
                                    </div>

                                    <div className="ml-auto flex gap-3">
                                        <Button size="sm" variant="ghost">
                                            Correct
                                        </Button>
                                        <Button isIconOnly aria-label={`Delete ${option.label}`} size="sm" variant="ghost">
                                            <IconTrash size={16} />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
