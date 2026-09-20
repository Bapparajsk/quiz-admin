"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { NavBarItem } from "./navItem";
import { NavItem } from "./type";


const navItems: NavItem[] = [
    { label: "Dashboard", icon: "dashboard", href: "/dashboard" },
    { label: "Quizzes", icon: "quiz", href: "/dashboard/quizzes" },
    { label: "Questions", icon: "qr_code_2", href: "/dashboard/questions" },
    { label: "Categories", icon: "category", href: "/dashboard/categories" },
    { label: "Users", icon: "group", href: "/dashboard/users" },
    { label: "Leaderboard", icon: "leaderboard", href: "/dashboard/leaderboard" },
    { label: "Results", icon: "analytics", href: "/dashboard/results" },
    { label: "Settings", icon: "settings", href: "/dashboard/settings" },
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
                    <NavBarItem key={item.label} {...item} />
                ))}
            </nav>
            <OrganizationSwitcher />
        </aside>
    )
}
