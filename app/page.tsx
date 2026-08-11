import { Avatar, Button, Card, Chip } from "@heroui/react";

type IconName =
  | "add"
  | "analytics"
  | "category"
  | "dashboard"
  | "format_list_bulleted"
  | "group"
  | "leaderboard"
  | "logout"
  | "manage_accounts"
  | "more_horiz"
  | "notifications"
  | "qr_code_2"
  | "quiz"
  | "settings"
  | "touch_app"
  | "trending_up";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  switch (name) {
    case "quiz":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
        </svg>
      );
    case "qr_code_2":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="5" height="5" rx="1.2" />
          <rect x="15" y="4" width="5" height="5" rx="1.2" />
          <rect x="4" y="15" width="5" height="5" rx="1.2" />
          <rect x="11" y="11" width="3" height="3" rx="0.8" />
          <rect x="15" y="15" width="5" height="5" rx="1.2" />
        </svg>
      );
    case "category":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 6h6M5 12h14M5 18h10" strokeLinecap="round" />
          <circle cx="16.5" cy="6" r="1.5" />
          <circle cx="9.5" cy="12" r="1.5" />
          <circle cx="18.5" cy="18" r="1.5" />
        </svg>
      );
    case "group":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M15.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M4.5 19c0-2.8 2.1-5 4.7-5s4.7 2.2 4.7 5" strokeLinecap="round" />
          <path d="M13.5 19c0-1.9 1.5-3.5 3.3-3.5 1.5 0 2.8.9 3.2 2.3" strokeLinecap="round" />
        </svg>
      );
    case "leaderboard":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 20V10m5 10V4m5 16v-7" strokeLinecap="round" />
          <path d="M5 20h14" strokeLinecap="round" />
        </svg>
      );
    case "analytics":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 19V5" strokeLinecap="round" />
          <path d="M5 19h14" strokeLinecap="round" />
          <path d="M7 15l4-4 3 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="11" cy="11" r="1" />
          <circle cx="14" cy="13" r="1" />
          <circle cx="18" cy="8" r="1" />
        </svg>
      );
    case "settings":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5a3.5 3.5 0 0 0 0-7Z" />
          <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4.8a7.2 7.2 0 0 0-1.7-1l-.4-2.5H9.6l-.4 2.5a7.2 7.2 0 0 0-1.7 1L5.1 6l-2 3.5 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-.8a7.2 7.2 0 0 0 1.7 1l.4 2.5h4.8l.4-2.5a7.2 7.2 0 0 0 1.7-1l2.4.8 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" opacity="0.8" />
        </svg>
      );
    case "logout":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 17H6.5A1.5 1.5 0 0 1 5 15.5v-7A1.5 1.5 0 0 1 6.5 7H10" strokeLinecap="round" />
          <path d="M14 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 12H10" strokeLinecap="round" />
        </svg>
      );
    case "notifications":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 17H6l1.2-1.4A4 4 0 0 0 8 13.1V11a4 4 0 1 1 8 0v2.1c0 .8.3 1.6.8 2.2L18 17Z" strokeLinejoin="round" />
          <path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" />
        </svg>
      );
    case "trending_up":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 16l5-5 4 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 7h4v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "add":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      );
    case "manage_accounts":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M4.5 19c0-2.8 2-5 4.5-5s4.5 2.2 4.5 5" strokeLinecap="round" />
          <path d="M16.5 9.5h4M18.5 7.5v4" strokeLinecap="round" />
        </svg>
      );
    case "more_horiz":
      return (
        <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
          <circle cx="5" cy="12" r="1.6" />
          <circle cx="12" cy="12" r="1.6" />
          <circle cx="19" cy="12" r="1.6" />
        </svg>
      );
    case "touch_app":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 11v-2a2 2 0 1 1 4 0v3" strokeLinecap="round" />
          <path d="M14 12v-1a2 2 0 1 1 4 0v4" strokeLinecap="round" />
          <path d="M9 12v-1a2 2 0 1 1 4 0v5" strokeLinecap="round" />
          <path d="M8 12.5c0-1.1-.9-2-2-2s-2 .9-2 2V17c0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5v-1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "format_list_bulleted":
      return (
        <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <circle cx="6" cy="7" r="1.2" />
          <circle cx="6" cy="12" r="1.2" />
          <circle cx="6" cy="17" r="1.2" />
          <path d="M10 7h8M10 12h8M10 17h8" strokeLinecap="round" />
        </svg>
      );
  }
}



const stats = [
  { label: "Total Quizzes", value: "128", delta: "+5%", icon: "quiz" },
  { label: "Total Questions", value: "1,240", delta: "+12%", icon: "format_list_bulleted" },
  { label: "Total Users", value: "3,842", delta: "+8%", icon: "group" },
  { label: "Quiz Attempts", value: "8,726", delta: "+15%", icon: "touch_app" },
];

const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const chartPoints = [
  { x: 100, y: 200 },
  { x: 240, y: 150 },
  { x: 380, y: 80 },
  { x: 520, y: 120 },
  { x: 660, y: 180 },
  { x: 800, y: 90 },
  { x: 940, y: 60 },
];

const recentQuizzes = [
  { name: "Advanced JavaScript", category: "Tech", questions: 20, attempts: 450, difficulty: "Hard", status: "Published", statusClass: "published" },
  { name: "World History 101", category: "General", questions: 15, attempts: 1200, difficulty: "Medium", status: "Published", statusClass: "published" },
  { name: "Cybersecurity Basics", category: "Tech", questions: 10, attempts: 80, difficulty: "Easy", status: "Draft", statusClass: "draft" },
  { name: "Marketing Strategy", category: "Business", questions: 25, attempts: 0, difficulty: "Medium", status: "Closed", statusClass: "closed" },
];

const quickActions = [
  { label: "Add Quiz", icon: "add", variant: "primary" },
  { label: "Add Question", icon: "add", variant: "secondary" },
  { label: "Manage Users", icon: "manage_accounts", variant: "secondary" },
];

function formatAttempts(attempts: number) {
  return attempts.toLocaleString("en-US");
}

export default function Home() {
  const linePoints = chartPoints.map(({ x, y }) => `${x},${y}`).join(" ");
  const areaPoints = `${linePoints} 940,275 100,275`;

  return (
    <div className="min-h-screen bg-[#080A0D] text-on-surface">


      <header className="fixed right-0 top-0 z-40 ml-70 flex h-16 w-[calc(100%-280px)] items-center justify-between border-b border-outline-variant bg-surface px-gutter">
        <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Dashboard</h2>

        <div className="flex items-center gap-6">
          <span className="font-body-md text-body-md text-on-surface-variant">Welcome back, Admin</span>
          <button
            type="button"
            className="relative rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
            aria-label="Notifications"
          >
            <Icon name="notifications" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-surface bg-primary-container" />
          </button>
          <Avatar className="h-8 w-8 border border-outline-variant">
            <Avatar.Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNkugvofLWTcaM8wIXt8zbpKAODInAi5Gj0kNOb2j_k3IuhLVwC7vRztCy1e4tGPk6-vDenqbBFJ7bphZ6CE5C7FldzcAN3hQAMByYVk8Kcmb0VT67z8xjy1lE8nmkgzwZ5_cDQc2XMRl1qPH_DIGQWk4Ge6yuyei862KTx2V20xyZ018n0OXjsqbGGhRJwcTZI5ID4S4b2aCtZD3rPED-wlQg8vakDrxJTCyiufhJiQAK50pHWi3yiw"
              alt="Admin profile image"
            />
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar>
        </div>
      </header>

      <main className="ml-70 mt-16 grid min-h-[calc(100vh-64px)] grid-cols-12 content-start gap-lg p-container-margin">
        <section className="col-span-12 grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-[#1E293B] bg-surface p-lg shadow-none">
              <Card.Content className="p-0">
                <div className="mb-4 flex items-start justify-between">
                  <div className="inline-flex rounded-lg bg-surface-container-highest p-2">
                    <Icon name={stat.icon as IconName} className="h-5 w-5 text-primary-container" />
                  </div>
                  <span className="flex items-center gap-1 font-label-mono text-label-mono text-primary-container">
                    <Icon name="trending_up" className="h-3.5 w-3.5" />
                    {stat.delta}
                  </span>
                </div>
                <h3 className="mb-1 font-label-mono text-label-mono uppercase text-on-surface-variant">{stat.label}</h3>
                <p className="font-display-lg text-display-lg text-on-surface">{stat.value}</p>
              </Card.Content>
            </Card>
          ))}
        </section>

        <section className="col-span-12 rounded-xl border border-[#1E293B] bg-surface p-lg">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Quiz Activity</h3>
              <p className="mt-1 font-body-md text-body-md text-on-surface-variant">Attempts for the last 7 days</p>
            </div>

            <div className="flex gap-2 rounded-lg bg-surface-container-highest p-1">
              {["7 Days", "30 Days", "3 Months"].map((label, index) => (
                <Button
                  key={label}
                  type="button"
                  className={[
                    "h-auto rounded px-3 py-1 font-label-mono text-label-mono transition-colors",
                    index === 0
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-transparent text-on-surface-variant hover:bg-surface-variant hover:text-on-surface",
                  ].join(" ")}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          <div className="h-75 w-full">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 300" role="img" aria-label="Quiz activity line chart">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#5cc6e2" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#5cc6e2" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[50, 125, 200].map((y) => (
                <line key={y} className="chart-grid" x1="50" x2="950" y1={y} y2={y} />
              ))}
              <line className="chart-axis" x1="50" x2="950" y1="275" y2="275" />
              {[
                { label: "1500", y: 55 },
                { label: "1000", y: 130 },
                { label: "500", y: 205 },
                { label: "0", y: 280 },
              ].map((tick) => (
                <text key={tick.label} fill="#879397" fontFamily="JetBrains Mono" fontSize="12" textAnchor="end" x="40" y={tick.y}>
                  {tick.label}
                </text>
              ))}
              {chartLabels.map((label, index) => (
                <text key={label} fill="#879397" fontFamily="JetBrains Mono" fontSize="12" textAnchor="middle" x={100 + index * 140} y="295">
                  {label}
                </text>
              ))}
              <polygon className="chart-area" points={areaPoints} />
              <polyline className="chart-line" points={linePoints} />
              {chartPoints.map((point) => (
                <circle key={`${point.x}-${point.y}`} className="chart-point" cx={point.x} cy={point.y} />
              ))}
            </svg>
          </div>
        </section>

        <section className="col-span-12 flex flex-col gap-lg lg:col-span-9">
          <Card className="overflow-hidden border border-[#1E293B] bg-surface shadow-none">
            <Card.Header className="flex items-center justify-between border-b border-[#1E293B] p-lg">
              <Card.Title className="font-headline-md text-headline-md text-on-surface">Recent Quizzes</Card.Title>
              <a className="font-label-mono text-label-mono text-primary-container transition-colors hover:text-primary" href="#">
                View All
              </a>
            </Card.Header>
            <Card.Content className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead className="border-b border-[#1E293B] bg-[#12141A]">
                    <tr>
                      <th className="px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant">Quiz Name</th>
                      <th className="px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant">Category</th>
                      <th className="px-6 py-3 text-right font-label-mono text-label-mono font-normal text-on-surface-variant">Questions</th>
                      <th className="px-6 py-3 text-right font-label-mono text-label-mono font-normal text-on-surface-variant">Attempts</th>
                      <th className="px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant">Difficulty</th>
                      <th className="px-6 py-3 font-label-mono text-label-mono font-normal text-on-surface-variant">Status</th>
                      <th className="px-6 py-3 text-right font-label-mono text-label-mono font-normal text-on-surface-variant">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B] font-body-sm text-body-sm text-on-surface">
                    {recentQuizzes.map((quiz) => (
                      <tr key={quiz.name} className="transition-colors hover:bg-[#1E293B]">
                        <td className="px-6 py-4 font-semibold">{quiz.name}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{quiz.category}</td>
                        <td className="px-6 py-4 text-right font-label-mono">{quiz.questions}</td>
                        <td className="px-6 py-4 text-right font-label-mono">{formatAttempts(quiz.attempts)}</td>
                        <td className="px-6 py-4">{quiz.difficulty}</td>
                        <td className="px-6 py-4">
                          <Chip
                            className={[
                              "rounded border px-2 py-1 text-[10px] font-label-mono uppercase tracking-wider",
                              quiz.statusClass === "published"
                                ? "border-primary-container/20 bg-primary-container/10 text-primary-container"
                                : quiz.statusClass === "draft"
                                  ? "border-outline-variant bg-surface-variant text-on-surface-variant"
                                  : "border-error/30 bg-error-container/10 text-error",
                            ].join(" ")}
                          >
                            {quiz.status}
                          </Chip>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button type="button" className="text-on-surface-variant transition-colors hover:text-primary" aria-label={`More actions for ${quiz.name}`}>
                            <Icon name="more_horiz" className="h-4.5 w-4.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Content>
          </Card>
        </section>

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
      </main>
    </div>
  );
}
