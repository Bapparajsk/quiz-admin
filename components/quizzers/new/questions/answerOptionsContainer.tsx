import { Button } from "@heroui/react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { AddOptionModel } from "./addOptionModel";
import { AnsList } from "./ansList";
import { ErrorMassage } from "./error";

export const AnswerOptionsContainer = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-semibold text-white">Answer options</h2>
                    <p className="mt-1 text-sm text-white/50">
                        Keep the correct answer in the first draft and refine distractors later.
                    </p>
                    <div className="mt-2">
                        <ErrorMassage />
                    </div>
                </div>
                <div className="flex items-center gap-1.5">
                    <AddOptionModel />
                    <Button variant="outline" isDisabled>
                        <span className="inline-flex items-center gap-2">
                            <IconDeviceFloppy stroke={3} />
                            save
                        </span>
                    </Button>
                </div>
            </div>
            <AnsList />
        </div>
    )
}
