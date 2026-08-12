import { IconComponent } from "./type";

export const LogoutIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 17H6.5A1.5 1.5 0 0 1 5 15.5v-7A1.5 1.5 0 0 1 6.5 7H10" strokeLinecap="round" />
        <path d="M14 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 12H10" strokeLinecap="round" />
    </svg>
)