import { IconComponent } from "./type";

export const SettingsIcon: IconComponent = ({ className = "w-5 h-5" }) =>
(
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5a3.5 3.5 0 0 0 0-7Z" />
        <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4.8a7.2 7.2 0 0 0-1.7-1l-.4-2.5H9.6l-.4 2.5a7.2 7.2 0 0 0-1.7 1L5.1 6l-2 3.5 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-.8a7.2 7.2 0 0 0 1.7 1l.4 2.5h4.8l.4-2.5a7.2 7.2 0 0 0 1.7-1l2.4.8 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" opacity="0.8" />
    </svg>
)