import {CardList, Tabs} from "../../../shared/ui";
import {type Film, FilmCard} from "../../../entities/Film";

interface ProfileTabsProps {
    watchList: Film[],
    ratings: Record<number, { film: Film; score: number }>
}

export const ProfileTabs = ({watchList, ratings}: ProfileTabsProps) => {
    return (
        <div>
            <Tabs titles={['Хочу просмотреть', 'Просмотрено']}>
                <Tabs.Panel>
                    <CardList>
                        {
                            watchList.map((film) => {
                                return <FilmCard film={film}/>
                            })
                        }
                    </CardList>
                </Tabs.Panel>

                <Tabs.Panel>
                    <CardList>
                        {
                            Object.values(ratings).map(({ film, score }) => {
                                return (
                                    <div key={film.kinopoiskId} className="relative group">
                                        <FilmCard film={film}/>
                                        <div className="absolute top-3 right-3 bg-brand-primary text-brand-bg font-black text-sm px-2.5 py-1 rounded-lg shadow-lg z-10">
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

