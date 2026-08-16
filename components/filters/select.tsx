import { Label, ListBox, Select } from "@heroui/react";

export type SelectFilterItem = {
    id: string;
    label: string;
}

export type SelectFilterProps = {
    label?: string;
    labelClassName?: string;
    triggerClassName?: string;
    providerClassName?: string;
    placeholder?: string;
    className?: string;
    items: SelectFilterItem[];
}

export const SelectFilter = ({ label, labelClassName, triggerClassName, placeholder, className, items, providerClassName }: SelectFilterProps) => {
    return (
        <Select className={className} placeholder={placeholder} >
            <Label className={labelClassName}>
                {label || placeholder}
            </Label>
            <Select.Trigger className={triggerClassName}>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover className={providerClassName}>
                <ListBox>
                    {items.map((item) => (
                        <ListBox.Item key={item.id} id={item.id}>
                            {item.label}
                        </ListBox.Item>
                    ))}

                </ListBox>
            </Select.Popover>
        </Select>
    )
}