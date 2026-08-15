import { notFound } from "next/navigation";
import { Card } from "@heroui/react";
import { ScreenWrapper } from "@/components/ui/screenWrapper";

const pageTitles: Record<string, string> = {
  quizzes: "Quizzes",
  questions: "Questions",
  categories: "Categories",
  users: "Users",
  leaderboard: "Leaderboard",
  results: "Results",
  settings: "Settings",
};

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = pageTitles[slug];

  if (!title) {
    notFound();
  }

  return (
    <ScreenWrapper>
      <Card className="border border-[#1E293B] bg-surface p-8 shadow-none">
        <Card.Content className="p-0">
          <p className="font-label-mono text-label-mono uppercase text-on-surface-variant">Section</p>
          <h1 className="mt-2 font-headline-md text-headline-md text-on-surface">{title}</h1>
          <p className="mt-3 max-w-xl text-body-md text-on-surface-variant">
            This route is now handled by the app router, so sidebar navigation stays client-side instead of falling back to a full document load.
          </p>
        </Card.Content>
      </Card>
    </ScreenWrapper>
  );
}