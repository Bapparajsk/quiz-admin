import { ListBox, Select } from "@heroui/react";

export type SelectFilterItem = {
    id: string;
    label: string;
}

export type SelectFilterProps = {
    triggerClassName?: string;
    placeholder?: string;
    className?: string;
    items: SelectFilterItem[];
}

export const SelectFilter = ({ triggerClassName, placeholder, className, items }: SelectFilterProps) => {
    return (
        <Select className={className} placeholder={placeholder} >
            <Select.Trigger className={triggerClassName}>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
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