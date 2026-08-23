import { Card } from "@heroui/react";

const answerOptions = [
    { id: "a", label: "Answer A" },
    { id: "b", label: "Answer B" },
    { id: "c", label: "Answer C" },
    { id: "d", label: "Answer D" },
];
export const LivePreview = () => {

    return (
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
    );
}