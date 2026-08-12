import { IconComponent } from "./type";

export const CategoryIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 6h6M5 12h14M5 18h10" strokeLinecap="round" />
        <circle cx="16.5" cy="6" r="1.5" />
        <circle cx="9.5" cy="12" r="1.5" />
        <circle cx="18.5" cy="18" r="1.5" />
    </svg>
)