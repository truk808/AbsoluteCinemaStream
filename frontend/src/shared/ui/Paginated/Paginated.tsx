import React, { useState } from 'react';

interface PaginatedProps<T> {
    items: T[];
    pageSize?: number;
    renderItem: (item: T, index: number) => React.ReactNode;
}

export const Paginated = <T,>({
                                  items,
                                  pageSize = 5,
                                  renderItem,
                              }: PaginatedProps<T>) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

    const safePage = Math.min(currentPage, totalPages);

    const startIndex = (safePage - 1) * pageSize;
    const currentItems = items.slice(startIndex, startIndex + pageSize);

    const isFirstPage = safePage === 1;
    const isLastPage = safePage === totalPages;

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
                {currentItems.length > 0 ? (
                    currentItems.map((item, index) => renderItem(item, startIndex + index))
                ) : (
                    <div className="text-center py-8 text-brand-text-muted">
                        Список пуст
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-brand-text/10 pt-4">
                    <span className="text-sm text-brand-text-muted">
                        Страница <strong className="text-brand-text">{safePage}</strong> из{' '}
                        <strong className="text-brand-text">{totalPages}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(1)}
                            disabled={isFirstPage}
                            title="К началу"
                            className="p-2 rounded-lg bg-brand-text/5 hover:bg-brand-text/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-brand-text"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={isFirstPage}
                            title="Назад"
                            className="p-2 rounded-lg bg-brand-text/5 hover:bg-brand-text/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-brand-text"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={isLastPage}
                            title="Вперед"
                            className="p-2 rounded-lg bg-brand-text/5 hover:bg-brand-text/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-brand-text"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={isLastPage}
                            title="К концу"
                            className="p-2 rounded-lg bg-brand-text/5 hover:bg-brand-text/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-brand-text"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Paginated;