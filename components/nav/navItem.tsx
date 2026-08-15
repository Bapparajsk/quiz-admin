"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../icon/icon";
import { type NavItem } from "./type";


export const NavBarItem = ({ icon, label, href }: NavItem) => {

    const pathName = usePathname();

    return (
        <Link
            key={label}
            aria-current={pathName === href ? "page" : undefined}
            href={href || "#"}
            className={[
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-200",
                pathName === href
                    ? "scale-95 bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface",
            ].join(" ")}
        >
            <Icon name={icon} />
            <span className="font-headline-sm text-headline-sm">{label}</span>
        </Link>
    )
}