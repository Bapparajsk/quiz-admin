import { SearchField } from "@heroui/react";

export const SearchFilters = () => {
    return (
        <SearchField name="search" variant="secondary" >
            <SearchField.Group className={"h-10"}>
                <SearchField.SearchIcon />
                <SearchField.Input size={40} placeholder="Search quizzes..." />
                <SearchField.ClearButton />
            </SearchField.Group>
        </SearchField>
    );
}