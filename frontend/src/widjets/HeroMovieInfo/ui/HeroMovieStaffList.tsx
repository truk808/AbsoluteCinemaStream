import React, { useMemo } from 'react';
import {type Staff, StaffItem} from "../../../entities/Film";
import Spinner from "../../../shared/ui/Spinner/Spinner.tsx";

interface HeroMovieStaffListProps {
    staff: Staff[];
    isLoadingStaff: boolean;
}

export const HeroMovieStaffList: React.FC<HeroMovieStaffListProps> = ({ staff, isLoadingStaff }) => {
    const actors = useMemo(() => {
        if (!staff) return [];
        return staff.filter(member => member.professionKey === "ACTOR");
    }, [staff]);

    if (actors.length === 0) return null;

    if(isLoadingStaff) return <Spinner />

    return (
        <div className="w-full bg-black/20 p-4 rounded-xl border border-gray-800">
            <h2 className="text-xl font-bold text-brand-primary mb-4 px-2">
                В ролях
            </h2>

            <div className="flex flex-col gap-1 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {actors.map(actor => (
                    <StaffItem key={actor.staffId} member={actor} />
                ))}
            </div>
        </div>
    );
};