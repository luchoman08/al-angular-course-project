
export interface ResultsInterface<T> {
    page: number;
    total_results: number;
    results: T[];
    total_pages: number;
}