import { IconComponent } from "./type";

export const Touch_appIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 11v-2a2 2 0 1 1 4 0v3" strokeLinecap="round" />
        <path d="M14 12v-1a2 2 0 1 1 4 0v4" strokeLinecap="round" />
        <path d="M9 12v-1a2 2 0 1 1 4 0v5" strokeLinecap="round" />
        <path d="M8 12.5c0-1.1-.9-2-2-2s-2 .9-2 2V17c0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5v-1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)