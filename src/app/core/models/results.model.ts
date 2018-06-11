
export interface Results<T> {
    page: number;
    total_results: number;
    results: T[];
    total_pages: number;
}
