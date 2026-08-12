import { IconComponent } from "./type";

export const GroupIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M15.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path d="M4.5 19c0-2.8 2.1-5 4.7-5s4.7 2.2 4.7 5" strokeLinecap="round" />
        <path d="M13.5 19c0-1.9 1.5-3.5 3.3-3.5 1.5 0 2.8.9 3.2 2.3" strokeLinecap="round" />
    </svg>
)