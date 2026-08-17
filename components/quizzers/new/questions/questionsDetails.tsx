import { SelectFilter } from "@/components/filters";
import { Input, TextArea } from "@heroui/react";
import { Fragment } from "react";

const shellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";


export const QuestionsDetails = () => {
    return (
        <Fragment>
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
                        { id: "smq", label: "Single choice" },
                        { id: "truefalse", label: "True / False" },
                    ]}
                />
            </div>

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
        </Fragment>
    )
}
