

const Glass = ({ children, className }) => {
    return (
        <div className={`glassmorph text-white ${className}`}>
            {children}
        </div>
    );
};

export default Glass;