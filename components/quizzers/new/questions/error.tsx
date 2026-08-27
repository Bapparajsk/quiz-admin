import { cn, Label } from "@heroui/react";
import { IconAlertCircle, IconAlertTriangle } from "@tabler/icons-react";

const error: {
    type: "error" | "warning";
    massage: string;
    icon: typeof IconAlertCircle | typeof IconAlertTriangle;
} = {
    type: "error",
    massage: "Please fill all the fields",
    icon: IconAlertCircle
}

export const ErrorMassage = () => {
    return (
        <Label isInvalid={error.type === "error"}
            className={cn(
                "flex items-center gap-2",
                { "text-warning": error.type === "warning" },
            )}
        >
            <error.icon size={16} stroke={3} />
            {error.massage}
        </Label>
    )
};