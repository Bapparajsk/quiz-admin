import { QuizzersFilters, QuizzersHeader } from "@/components/quizzers";
import { ScreenWrapper } from "@/components/ui/screenWrapper";

export default function page() {
    return (
        <ScreenWrapper>
            <QuizzersHeader />
            <QuizzersFilters />
        </ScreenWrapper>
    )
}
