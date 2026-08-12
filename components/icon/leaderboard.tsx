import { IconComponent } from "./type";

export const LeaderboardIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 20V10m5 10V4m5 16v-7" strokeLinecap="round" />
        <path d="M5 20h14" strokeLinecap="round" />
    </svg>
)