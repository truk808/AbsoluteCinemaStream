
interface NavElementProps {
    onClick: () => void;
    isActive: boolean;
    children: string;
}

const NavElement = ({onClick, isActive, children}: NavElementProps) => {
    return (
        <span className={[isActive && 'text-white'].join(' ')} onClick={onClick}>{children}</span>
    );
};

export default NavElement;