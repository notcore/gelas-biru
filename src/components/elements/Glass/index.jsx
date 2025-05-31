
// ===============================================================================================
    // tempat costume card project 
    // ! IMG HARUS ADA ${source} nya
    // !DIV PALING ATAS WAJIB ADA ${ClassName} nya
// ===============================================================================================
const Glass = ({
  source = 'error',
  className = '',
  children = null,
  edit = "w-[200px]",
}) => {
    return (
        <div className={`glassmorph backdrop-blur-md p-[1px] text-white ${className}`}>
            <img className={`m-1 object-cover rounded-lg ${edit}`} src={`${source}`} alt="Glass Background" />
            <h1>{children}</h1>
        </div>
    );
};

export default Glass;