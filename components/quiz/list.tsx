"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { Card } from "@heroui/react";
import Link from "next/link";
import { QuizItem, type Quiz } from "./quizItem";

export type QuizListProps = {
    showHeader?: boolean;
}

async function getMyQuizzes(getToken: () => Promise<string | null>): Promise<Quiz[]> {
    const token = await getToken();

    const response = await fetch("/api/v1/quizzes/mine", {
        headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Unable to load quizzes");
    }

    const payload = await response.json();

    const records: Quiz[] = Array.isArray(payload)
        ? payload
        : Array.isArray(payload?.data)
            ? payload.data
            : Array.isArray(payload?.items)
                ? payload.items
                : Array.isArray(payload?.content)
                    ? payload.content
                    : [];

    return records;
}

export const QuizList = ({ showHeader = true }: QuizListProps) => {
    const { getToken, isLoaded, isSignedIn } = useAuth();
    const { data: quizzes = [], isLoading, error } = useQuery({
        queryKey: ["quizzes", "mine"],
        queryFn: () => getMyQuizzes(getToken),
        enabled: isLoaded && isSignedIn,
    });

    const headerClasses = "px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant";

    console.log(quizzes)

    return (
        <section className="w-full col-span-12 flex flex-col gap-lg lg:col-span-9">
            <Card className="overflow-hidden border border-[#1E293B] bg-surface shadow-none">
                {showHeader && (
                    <Card.Header className="flex flex-row items-center justify-between border-b border-[#1E293B] p-4">
                        <Card.Title className="font-headline-md text-headline-md text-2xl text-on-surface">Recent Quizzes</Card.Title>
                        <Link className="font-label-mono text-label-mono text-primary-container transition-colors hover:text-primary" href="/dashboard/quizzes">
                            View All
                        </Link>
                    </Card.Header>)}
                <Card.Content className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead className="border-b border-[#1E293B] bg-[#12141A]">
                                <tr>
                                    <th className={headerClasses}>Quiz Title</th>
                                    <th className={headerClasses}>Chapter</th>
                                    <th className={headerClasses + " text-right"}>Questions</th>
                                    <th className={headerClasses + " text-right"}>Attempts</th>
                                    <th className={headerClasses}>Difficulty</th>
                                    <th className={headerClasses}>Status</th>
                                    <th className={headerClasses + " text-right"}>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1E293B] font-body-md text-body-md text-on-surface">
                                {isLoading || !isLoaded ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-on-surface-variant">
                                            Loading quizzes...
                                        </td>
                                    </tr>
                                ) : error ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-error">
                                            {error.message}
                                        </td>
                                    </tr>
                                ) : quizzes.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-on-surface-variant">
                                            No quizzes found
                                        </td>
                                    </tr>
                                ) : (
                                    quizzes.map((quiz, index) => (
                                        <QuizItem key={`${quiz.title}-${index}`} quiz={quiz} />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card.Content>
            </Card>
        </section>
    )
}