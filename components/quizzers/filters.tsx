import { SearchFilters, SelectFilter } from "../filters";

export const QuizzersFilters = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-outline-variant bg-surface p-4">
            <div className="w-auto">
                <SearchFilters />
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <SelectFilter
                    className="w-40"
                    placeholder="Category"
                    triggerClassName="border border-white/20"
                    items={[
                        { id: "category", label: "Category" },
                        { id: "tech", label: "Tech" },
                        { id: "business", label: "Business" },
                    ]}
                />
                <SelectFilter
                    className="w-40"
                    placeholder="Difficulty"
                    triggerClassName="border border-white/20"
                    items={[
                        { id: "difficulty", label: "Difficulty" },
                        { id: "easy", label: "Easy" },
                        { id: "medium", label: "Medium" },
                        { id: "hard", label: "Hard" },
                    ]}
                />
                <SelectFilter
                    className="w-40"
                    placeholder="Status"
                    triggerClassName="border border-white/20"
                    items={[
                        { id: "status", label: "Status" },
                        { id: "published", label: "Published" },
                        { id: "draft", label: "Draft" },
                        { id: "closed", label: "Closed" },
                    ]}
                />
            </div>
        </div>
    );
};
