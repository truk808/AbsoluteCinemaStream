import {CardList, Tabs} from "../../../shared/ui";
import {type Film, FilmCard} from "../../../entities/Film";
import {FilterFilm} from "../../../features/FilterFilm";
import {useProfileTabs} from "../model/useProfileTabs.ts";
import {useEffect} from "react";

export interface ProfileTabsProps {
    watchList: Film[],
    ratings: Record<number, { film: Film; score: number }>
}

export const ProfileTabs = ({watchList, ratings}: ProfileTabsProps) => {
    const {
        filterAndSortRatings,
        filterAndSortWatchList,
        searchValue,
        setSearchValue,
        sortOrder,
        setSortOrder,
        sortField,
        setSortField,
    } = useProfileTabs({watchList, ratings});

    useEffect(() => {
        console.log('filterAndSortRatings', filterAndSortRatings)
    }, [filterAndSortRatings]);

    return (
        <div>
            <FilterFilm
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                sortField={sortField}
                setSortField={setSortField}
            />
            <Tabs titles={['Хочу просмотреть', 'Просмотрено']}>
                <Tabs.Panel>
                    <CardList>
                        {
                            filterAndSortWatchList.map((film) => {
                                return <FilmCard film={film}/>
                            })
                        }
                    </CardList>
                </Tabs.Panel>
                <Tabs.Panel>
                    <CardList>
                        {
                            filterAndSortRatings.map(({film, score}) => {
                                return (
                                    <div key={film.kinopoiskId} className="relative group">
                                        <FilmCard film={film}/>
                                        <div
                                            className="absolute top-3 right-3 bg-brand-primary text-brand-bg font-black text-sm px-2.5 py-1 rounded-lg shadow-lg z-10">
                                            {score} / 10
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </CardList>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

