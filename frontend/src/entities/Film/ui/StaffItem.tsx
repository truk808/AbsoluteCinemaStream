import type {Staff} from "../model/types/staff.ts";

interface HeroMovieStaffItemProps {
    member: Staff;
}

export const StaffItem = ({ member }:HeroMovieStaffItemProps) => {
    const displayName = member.nameRu || member.nameEn;

    return (
        <div className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-b-0 hover:bg-gray-900/30 rounded-md px-2 transition-colors">
            <img
                src={member.posterUrl}
                alt={displayName}
                className="w-12 h-12 rounded-full object-cover border border-gray-700"
                loading="lazy"
            />

            <div className="flex flex-col flex-1 min-w-0">
                <span className="text-brand-text text-sm font-medium truncate">
                    {displayName}
                </span>
                {member.description && (
                    <span className="text-brand-text-muted text-xs truncate">
                        {member.description}
                    </span>
                )}
            </div>
        </div>
    );
};