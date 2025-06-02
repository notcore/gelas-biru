const Produk = ({children, tittle , paragraph}) => {
    return (
    <>
      <div className="p-3 a border-1 border-black/20 bg-white rounded-lg min-h-[200px] max-h-[200px] flex justify-center items-center max-w-[200px] min-w-[200px]">
      <div>

        {children}        
        <h1 className="text-xl mt-2 text-center font-tittle">{tittle}</h1>
        <h1 className="text-black text-center text-xs leading-tight mb-4">{paragraph}</h1>
      </div>
      </div>
    </>
    )
}

export default Produk;