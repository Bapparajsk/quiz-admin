import { IconComponent } from "./type";

export const Format_list_bulletedIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="7" r="1.2" />
        <circle cx="6" cy="12" r="1.2" />
        <circle cx="6" cy="17" r="1.2" />
        <path d="M10 7h8M10 12h8M10 17h8" strokeLinecap="round" />
    </svg>
)