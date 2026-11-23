import { SelectFilter } from "@/components/filters";
import { Button, Description, Input, Key, Label, NumberField, Tabs, TextArea } from "@heroui/react";
import { IconBookUpload } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";

const shellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";


export const QuestionsDetails = () => {


    return (
        <Fragment>
            <div className="flex flex-row justify-center items-center gap-3">
                <div>
                    <label className="text-sm text-white/70" htmlFor="question-title">
                        Question title
                    </label>
                    <Input
                        required
                        className={shellClassName}
                        id="question-title"
                        placeholder="e.g. Which React hook handles side effects?"
                        type="text"
                    />
                </div>

                <NumberField isRequired defaultValue={10} maxValue={50} minValue={10} name="rating" className="w-full max-w-64">
                    <Label>Point</Label>
                    <NumberField.Group>
                        <NumberField.DecrementButton />
                        <NumberField.Input className="w-30" />
                        <NumberField.IncrementButton />
                    </NumberField.Group>
                </NumberField>
            </div>

            <div className="mt-3">
                <label className="text-sm text-white/70" htmlFor="question-body">
                    Question prompt <span className="text-stone-500">(optional)</span>
                </label>
                <TextArea
                    className="mt-2  w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/30"
                    id="question-body"
                    placeholder="Write the question prompt, scenario, or instructions here..."
                    rows={5}
                />
            </div>
        </Fragment>
    )
}