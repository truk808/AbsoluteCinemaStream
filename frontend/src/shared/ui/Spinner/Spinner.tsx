const Spinner = () => {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="relative flex items-center justify-center">
                <div
                    className="w-12 h-12 rounded-full border-4"
                    style={{ borderColor: 'var(--color-brand-text-muted)' }}
                ></div>
                <div
                    className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-current animate-spin"
                    style={{ color: 'var(--color-brand-text)' }}
                ></div>
            </div>
        </div>
    );
};

export default Spinner;