"use client";

import Icon from "../icon/icon";
import { NavBarItem } from "./navItem";
import { NavItem } from "./type";


const navItems: NavItem[] = [
    { label: "Dashboard", icon: "dashboard", href: "/" },
    { label: "Quizzes", icon: "quiz", href: "/quizzes" },
    { label: "Questions", icon: "qr_code_2", href: "/questions" },
    { label: "Categories", icon: "category", href: "/categories" },
    { label: "Users", icon: "group", href: "/users" },
    { label: "Leaderboard", icon: "leaderboard", href: "/leaderboard" },
    { label: "Results", icon: "analytics", href: "/results" },
    { label: "Settings", icon: "settings", href: "/settings" },
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

            <div className="mt-auto border-t border-outline-variant pt-4">
                <button
                    type="button"
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container-highest hover:text-on-surface"
                >
                    <Icon name="logout" />
                    <span className="font-headline-sm text-headline-sm">Logout</span>
                </button>
            </div>
        </aside>
    )
}
