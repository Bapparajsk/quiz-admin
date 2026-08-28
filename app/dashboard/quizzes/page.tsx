import { QuizList } from "@/components/quiz";
import { QuizzersFilters, QuizzersHeader } from "@/components/quizzers";
import { PaginationControlled } from "@/components/quizzers/pagination";
import { ScreenWrapper } from "@/components/ui/screenWrapper";

export default function page() {
    return (
        <ScreenWrapper>
            <QuizzersHeader />
            <QuizzersFilters />
            <QuizList showHeader={false} />
            <PaginationControlled />
        </ScreenWrapper>
    )
}
