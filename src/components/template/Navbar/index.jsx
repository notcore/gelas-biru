import Button from "@/components/elements/Button" ;

// ===============================================================================================
    // bebas costume navbar
// ===============================================================================================

const Navbar = () => {
    return (
    <nav className="fixed top-0 w-[100%] left-0 right-0 z-50 backdrop-blur-md border-b border-white/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
    
        <div className="flex-shrink-0">
            <a className="text-xl font-tittle font-semibold text-white">Azero</a>
        </div>

        {/* only on desktop and tablet */}
        <div className="hidden md:flex space-x-8">
            <a className="text-white hover:text-gray-200">Contact</a>
            <a className="text-white hover:text-gray-200">Business</a>
            <a className="text-white hover:text-gray-200">Potfofolio</a>
        </div>
        {/* end desktop and tablet */}

        <div className="flex space-x-4">
            <Button>business</Button>
        </div>
        </div>
    </div>
    </nav>
    )
}

export default Navbar;
