import { IconComponent } from "./type";

export const AnalyticsIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 19V5" strokeLinecap="round" />
        <path d="M5 19h14" strokeLinecap="round" />
        <path d="M7 15l4-4 3 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="11" cy="11" r="1" />
        <circle cx="14" cy="13" r="1" />
        <circle cx="18" cy="8" r="1" />
    </svg>
)