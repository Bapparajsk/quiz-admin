import { StatsList } from "@/components/home/statsList";
import Icon from "@/components/icon/icon";
import { IconName } from "@/components/icon/type";
import { QuizList } from "@/components/quiz";
import { ScreenWrapper } from "@/components/ui/screenWrapper";
import { Button, Card } from "@heroui/react";


const quickActions = [
  { label: "Add Quiz", icon: "add", variant: "primary" },
  { label: "Add Question", icon: "add", variant: "secondary" },
  { label: "Manage Users", icon: "manage_accounts", variant: "secondary" },
];

import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  await auth.protect()
  return (
    <ScreenWrapper>
      <StatsList />
      <div className="flex flex-row gap-4">
        <QuizList />npm install --save-dev @clerk/eslint-plugin
        <section className="col-span-12 flex flex-col gap-lg lg:col-span-3">
          <Card className="border border-[#1E293B] bg-surface p-lg shadow-none">
            <Card.Content className="p-0">
              <h3 className="mb-4 font-headline-sm text-headline-sm text-on-surface">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    type="button"
                    className={[
                      "flex h-auto w-full items-center justify-center gap-2 rounded border px-4 py-3 font-label-mono text-label-mono uppercase transition-colors",
                      action.variant === "primary"
                        ? "border-primary-container bg-primary-container text-background hover:bg-primary"
                        : "border-[#1E293B] bg-transparent text-on-surface hover:bg-[#1E293B]",
                    ].join(" ")}
                  >
                    <Icon name={action.icon as IconName} className="h-4.5 w-4.5" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </Card.Content>
          </Card>

          <Card className="grow border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-none">
            <Card.Content className="p-0">
              <h4 className="mb-2 font-label-mono text-label-mono uppercase text-on-surface-variant">System Status</h4>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                <span className="font-body-sm text-body-sm text-on-surface">All systems operational</span>
              </div>
              <p className="mt-4 font-label-mono text-[10px] text-on-surface-variant">Last sync: Just now</p>
            </Card.Content>
          </Card>
        </section>
      </div>
    </ScreenWrapper>
  );
}
