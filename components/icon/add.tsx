import { IconComponent } from "./type";

export const AddIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
)