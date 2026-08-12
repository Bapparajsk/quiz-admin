import { IconComponent } from "./type";

export const QuizIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round" />
    </svg>
)