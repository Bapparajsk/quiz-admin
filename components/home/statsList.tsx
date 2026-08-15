import { StatsCard } from "./statsCard";
import { StatsType } from "./type";

const stats: StatsType[] = [
    { label: "Total Quizzes", value: "128", delta: "+5%", icon: "quiz" },
    { label: "Total Questions", value: "1,240", delta: "+12%", icon: "format_list_bulleted" },
    { label: "Total Users", value: "3,842", delta: "+8%", icon: "group" },
    { label: "Quiz Attempts", value: "8,726", delta: "+15%", icon: "touch_app" },
];

export const StatsList = () => {
    return (
        <section className="col-span-12 grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
                <StatsCard key={stat.label.trim().toLocaleLowerCase()} {...stat} />
            ))}
        </section>
    );
}