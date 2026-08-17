import { Button, cn, Tooltip } from "@heroui/react";
import { IconPencil, IconTrash } from "@tabler/icons-react";

const answerOptions = [
    { id: "a", label: "Answer A", isCorrect: true },
    { id: "b", label: "Answer B", isCorrect: false },
    { id: "c", label: "Answer C", isCorrect: false },
    { id: "d", label: "Answer D", isCorrect: false },
];

type AnsItemProps = {
    index: number;
    label: string;
    isCorrect: boolean;
}

const AnsItem = ({ index, label, isCorrect }: AnsItemProps) => {
    return (
        <div
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 lg:flex-row lg:items-center"
        >
            <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-sm font-semibold text-cyan-200">
                    {String.fromCharCode(65 + index)}
                </span>
                <div>
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="text-xs text-white/40">Mark the correct answer and add supporting details.</p>
                </div>
            </div>

            <div className="ml-auto flex gap-3">
                <Tooltip delay={0} >
                    <Button size="sm" variant={"ghost"} >
                        <span className={cn(
                            { "text-success-hover": isCorrect },
                            { "text-red-400/70": !isCorrect }
                        )}>
                            {isCorrect ? "Correct" : "Wrong"}
                        </span>
                    </Button>
                    <Tooltip.Content showArrow offset={5}>
                        <p>
                            Set to {isCorrect ? "Wrong" : "Correct"}
                        </p>
                    </Tooltip.Content>
                </Tooltip>

                <Tooltip delay={0}>
                    <Button isIconOnly aria-label={`Edit ${label}`} size="sm" variant="secondary">
                        <IconPencil size={16} />
                    </Button>
                    <Tooltip.Content showArrow offset={5}>
                        <p>
                            Edit Options
                        </p>
                    </Tooltip.Content>
                </Tooltip>

                <Tooltip delay={0}>
                    <Button isIconOnly aria-label={`Delete ${label}`} size="sm" variant="danger-soft" >
                        <IconTrash size={16} />
                    </Button>
                    <Tooltip.Content showArrow offset={5}>
                        <p>
                            Delete Options
                        </p>
                    </Tooltip.Content>
                </Tooltip>

            </div>
        </div>
    )
}

export const AnsList = () => {
    return (
        <div className="mt-4 grid gap-4">
            {answerOptions.map((option, index) => (
                <AnsItem key={option.id} index={index} label={option.label} isCorrect={option.isCorrect} />
            ))}
        </div>
    )
}
