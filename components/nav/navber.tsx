
const navItems = [
    { label: "Dashboard", icon: "dashboard", active: true },
    { label: "Quizzes", icon: "quiz" },
    { label: "Questions", icon: "qr_code_2" },
    { label: "Categories", icon: "category" },
    { label: "Users", icon: "group" },
    { label: "Leaderboard", icon: "leaderboard" },
    { label: "Results", icon: "analytics" },
    { label: "Settings", icon: "settings" },
];

export const NavBer = () => {
    return (
        <aside className="fixed left-0 top-0 z-50 flex h-screen w-70 flex-col border-r border-outline-variant bg-surface px-4 py-6">
            <div className="mb-10 px-4">
                <h1 className="text-headline-md font-poppins font-bold text-primary">Quiz Admin</h1>
                <p className="mt-1 font-label-mono text-label-mono text-on-surface-variant">Management System</p>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        aria-current={item.active ? "page" : undefined}
                        href="#"
                        className={[
                            "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-200",
                            item.active
                                ? "scale-95 bg-secondary-container text-on-secondary-container"
                                : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface",
                        ].join(" ")}
                    >
                        <Icon name={item.icon as IconName} />
                        <span className="font-headline-sm text-headline-sm">{item.label}</span>
                    </a>
                ))}
            </nav>

            <div className="mt-auto border-t border-outline-variant pt-4">
                <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container-highest hover:text-on-surface"
                >
                    <Icon name="logout" />
                    <span className="font-headline-sm text-headline-sm">Logout</span>
                </a>
            </div>
        </aside>
    )
}
