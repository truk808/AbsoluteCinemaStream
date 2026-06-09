import { NavLink } from "react-router-dom";
import {ROUTES} from "../../../shared/config";

interface NavigationProps {
    className?: string;
    onItemClick?: () => void;
}

const links = [
    { to: ROUTES.MAIN, label: 'Главная', isPrimary: true },
    { to: '#', label: 'Кино' },
    { to: '#', label: 'TV' },
];

export const Navigation = ({ className = '', onItemClick }: NavigationProps) => {
    return (
        <nav className={`flex ${className}`}>
            {links.map((link) => (
                <NavLink
                    key={link.label}
                    to={link.to}
                    onClick={onItemClick}
                >
                    <span className={`cursor-pointer transition-colors hover:text-brand-primary ${
                        link.isPrimary ? 'text-brand-primary' : ''
                    }`}>
                        {link.label}
                    </span>
                </NavLink>
            ))}
        </nav>
    );
};