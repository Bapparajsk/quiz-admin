import { AddOptionModel } from "./addOptionModel";
import { AnsList } from "./ansList";



export const AnswerOptionsContainer = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-semibold text-white">Answer options</h2>
                    <p className="mt-1 text-sm text-white/50">
                        Keep the correct answer in the first draft and refine distractors later.
                    </p>
                </div>
                <AddOptionModel />
            </div>
            <AnsList />
        </div>
    )
}
