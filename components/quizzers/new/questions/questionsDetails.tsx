import { SelectFilter } from "@/components/filters";
import { Button, Input, Key, Tabs, TextArea } from "@heroui/react";
import { IconBookUpload } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { Fragment, useState } from "react";

const shellClassName =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30";


export const QuestionsDetails = () => {

    const [activeTab, setActiveTab] = useState<Key>("english");

    return (
        <Fragment>
            <div className="flex items-center justify-between">
                <Tabs className="w-full max-w-md" onSelectionChange={(key) => setActiveTab(key)}>
                    <Tabs.ListContainer>
                        <Tabs.List aria-label="Options">
                            <Tabs.Tab id="english">
                                English
                                <Tabs.Indicator />
                            </Tabs.Tab>
                            <Tabs.Tab id="bangla">
                                Bangla
                                <Tabs.Indicator />
                            </Tabs.Tab>
                            <Tabs.Tab id="hindi">
                                Hindi
                                <Tabs.Indicator />
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs.ListContainer>
                </Tabs>

                <Button variant="outline">
                    <IconBookUpload stroke={2} color="rgba(255, 255, 255, 0.7)" />
                    <span className="text-sm text-white/70">Import question</span>
                </Button>
            </div>
            <AnimatePresence mode="wait" initial={false}>
                {activeTab === "english" && (
                    <motion.div id="english" key="english" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <QuestionsDetailsEnglish />
                    </motion.div>
                )}
                {activeTab === "bangla" && (
                    <motion.div id="bangla" key="bangla" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <QuestionsDetailsBangla />
                    </motion.div>
                )}
                {activeTab === "hindi" && (
                    <motion.div id="hindi" key="hindi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <QuestionsDetailsHindi />
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>
    )
}

export const QuestionsDetailsEnglish = () => {
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

            <div className="mt-3">
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


export const QuestionsDetailsBangla = () => {
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

            <div className="mt-3">
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


export const QuestionsDetailsHindi = () => {
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

            <div className="mt-3">
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
