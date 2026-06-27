import {ProfileHero} from "../../../widjets/ProfileHero";
import {useSelector} from "react-redux";
import {selectRatings, selectUser, selectWatchlist} from "../../../entities/User";
import {ProfileTabs} from "../../../widjets/ProfileTabs";
import {useEffect} from "react";

export const ProfilePage = () => {
    const user = useSelector(selectUser);
    const watchList = useSelector(selectWatchlist);
    const ratings = useSelector(selectRatings);

    useEffect(() => {
        console.log(ratings);
    }, [ratings]);

    return (
        <div>
            <ProfileHero user={user} ratings={ratings} />
            <ProfileTabs ratings={ratings} watchList={watchList}/>
        </div>
    );
};