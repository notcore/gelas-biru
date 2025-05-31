
// ===============================================================================================
    // tempat costume card project 
    // ! IMG HARUS ADA ${source} nya
    // !DIV PALING ATAS WAJIB ADA ${ClassName} nya
// ===============================================================================================
const Glass = ({ source, className }) => {
    return (
        <div className={`glassmorph backdrop-blur-md p-[1px] text-white ${className}`}>
            <img className="w-[200px] m-1 object-cover rounded-lg" src={`${source}`} alt="Glass Background" />
        </div>
    );
};

export default Glass;