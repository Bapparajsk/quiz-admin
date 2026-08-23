import { Button, Card, Chip, Separator } from "@heroui/react";
import { IconCheck, IconClock, IconSparkles, IconUpload } from "@tabler/icons-react";

const reviewItems = [
    {
        title: "Quiz details complete",
        description: "Title, category, and difficulty are ready to publish.",
        state: "Done",
    },
    {
        title: "Questions reviewed",
        description: "All questions have answers, wording, and ordering checked.",
        state: "Done",
    },
    {
        title: "Publishing settings confirmed",
        description: "Visibility, retake rules, and answer reveal behavior are set.",
        state: "Ready",
    },
];

const metadata = [
    { label: "Questions", value: "18" },
    { label: "Category", value: "Tech" },
    { label: "Difficulty", value: "Hard" },
    { label: "Estimated time", value: "30 min" },
];

export const ReviewAndPublishContainer = () => {
    return (
        <section className="w-full">
            <Card className="border border-white/10 bg-[#0e1213] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <Card.Header>
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                        <div>
                            <Chip className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-200" size="lg" variant="soft">
                                Review stage
                            </Chip>
                            <h1 className="mt-4 text-3xl font-semibold text-white">Review & Publish Quiz</h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                                Confirm the quiz summary, validate the publishing rules, and ship the final version when everything looks right.
                            </p>
                        </div>

                        <Chip className="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200" size="lg" variant="soft">
                            Ready to publish
                        </Chip>
                    </div>
                </Card.Header>

                <Card.Content className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.95fr]">
                    <div className="space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Quiz summary</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-white">Advanced React Concepts</h2>
                                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                                        Final pass for the published quiz. The review card keeps the important metadata visible without crowding the page.
                                    </p>
                                </div>

                                <Chip className="border border-white/10 bg-black/20 text-white/80" size="lg" variant="soft">
                                    Draft updated 2 min ago
                                </Chip>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {metadata.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                                        <p className="text-xs uppercase tracking-[0.18em] text-white/40">{item.label}</p>
                                        <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                                    <p className="text-sm font-medium text-white">Publish visibility</p>
                                    <p className="mt-2 text-sm leading-6 text-white/55">
                                        Public quiz access is enabled for the selected audience.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                                    <p className="text-sm font-medium text-white">Review notes</p>
                                    <p className="mt-2 text-sm leading-6 text-white/55">
                                        No blocking issues detected. Minor wording edits can still be made before publishing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white">Publishing checklist</h2>
                                    <p className="mt-2 text-sm leading-6 text-white/55">
                                        A compact final check before the quiz goes live.
                                    </p>
                                </div>
                                <Chip className="border border-emerald-400/20 bg-emerald-400/10 text-emerald-200" size="lg" variant="soft">
                                    3/3 complete
                                </Chip>
                            </div>

                            <div className="mt-4 space-y-3">
                                {reviewItems.map((item) => (
                                    <div key={item.title} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                                        <div className="flex gap-3">
                                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-200">
                                                <IconCheck size={18} stroke={2.5} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{item.title}</p>
                                                <p className="mt-1 text-sm leading-6 text-white/55">{item.description}</p>
                                            </div>
                                        </div>

                                        <Chip className="border border-white/10 bg-white/5 text-white/75" size="sm" variant="soft">
                                            {item.state}
                                        </Chip>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-3xl border border-cyan-400/15 bg-linear-to-br from-cyan-400/10 to-white/5 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Publish status</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-white">Everything is aligned</h2>
                                </div>
                                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                                    <IconSparkles size={20} stroke={2} />
                                </div>
                            </div>

                            <div className="mt-5 space-y-3 text-sm text-white/70">
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                                    <IconClock size={18} stroke={2} className="text-cyan-200/80" />
                                    Scheduled review window not required.
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                                    <IconCheck size={18} stroke={2} className="text-emerald-200" />
                                    Required fields are complete and validated.
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                                    <IconUpload size={18} stroke={2} className="text-cyan-200/80" />
                                    Ready to publish to the selected audience.
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <h2 className="text-2xl font-semibold text-white">Final actions</h2>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                                Publish once the summary and checklist match the intended quiz release.
                            </p>

                            <Separator className="my-5 bg-white/10" />

                            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                                <Button className="justify-start" variant="ghost">
                                    Back to questions
                                </Button>
                                <Button className="justify-start" variant="tertiary">
                                    Save as draft
                                </Button>
                                <Button className="justify-start" variant="primary">
                                    Publish quiz
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card.Content>
            </Card>
        </section>
    );
};
