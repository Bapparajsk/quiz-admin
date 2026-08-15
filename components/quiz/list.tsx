import { Card } from "@heroui/react";
import Link from "next/link";
import { QuizItem, type Quiz } from "./quizItem";

const recentQuizzes: Quiz[] = [
    { name: "Advanced JavaScript", category: "Tech", questions: 20, attempts: 450, difficulty: "Hard", status: "Published", statusClass: "published" },
    { name: "World History 101", category: "General", questions: 15, attempts: 1200, difficulty: "Medium", status: "Published", statusClass: "published" },
    { name: "Cybersecurity Basics", category: "Tech", questions: 10, attempts: 80, difficulty: "Easy", status: "Draft", statusClass: "draft" },
    { name: "Marketing Strategy", category: "Business", questions: 25, attempts: 0, difficulty: "Medium", status: "Closed", statusClass: "closed" },
    { name: "Data Science Fundamentals", category: "Tech", questions: 30, attempts: 300, difficulty: "Hard", status: "Published", statusClass: "published" },
    { name: "Creative Writing", category: "Arts", questions: 12, attempts: 150, difficulty: "Medium", status: "Draft", statusClass: "draft" },
    { name: "Financial Literacy", category: "Business", questions: 18, attempts: 500, difficulty: "Easy", status: "Published", statusClass: "published" },
];


export const QuizList = () => {

    const headerClasses = "px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant";

    return (
        <section className="w-full col-span-12 flex flex-col gap-lg lg:col-span-9">
            <Card className="overflow-hidden border border-[#1E293B] bg-surface shadow-none">
                <Card.Header className="flex flex-row items-center justify-between border-b border-[#1E293B] p-4">
                    <Card.Title className="font-headline-md text-headline-md text-2xl text-on-surface">Recent Quizzes</Card.Title>
                    <Link className="font-label-mono text-label-mono text-primary-container transition-colors hover:text-primary" href="/quizzes">
                        View All
                    </Link>
                </Card.Header>
                <Card.Content className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead className="border-b border-[#1E293B] bg-[#12141A]">
                                <tr>
                                    <th className={headerClasses}>Quiz Name</th>
                                    <th className={headerClasses}>Category</th>
                                    <th className={headerClasses + " text-right"}>Questions</th>
                                    <th className={headerClasses + " text-right"}>Attempts</th>
                                    <th className={headerClasses}>Difficulty</th>
                                    <th className={headerClasses}>Status</th>
                                    <th className={headerClasses + " text-right"}>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1E293B] font-body-md text-body-md text-on-surface">
                                {recentQuizzes.map((quiz) => (
                                    <QuizItem key={quiz.name} quiz={quiz} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card.Content>
            </Card>
        </section>
    )
}