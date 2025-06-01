import Button from "@/components/elements/Button" ;
import Link from 'next/link';

// ===============================================================================================
    // bebas costume NavbarBusiness
// ===============================================================================================

const NavbarBusiness = () => {
    return (
    <nav className="fixed top-0 w-[100%] left-0 right-0 z-50 backdrop-blur-md border-b border-white/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
    
        <div className="flex-shrink-0">
            <a className="text-xl font-tittle font-semibold text-white">Azero</a>
        </div>

        {/* only on desktop and tablet */}
        <div className="hidden md:flex space-x-8">
            <a className="text-white hover:text-gray-200" href="#aboutme">Testimoni</a>
            <a className="text-white hover:text-gray-200" href="#exp">Tier</a>
            <a className="text-white hover:text-gray-200" href="#skill">Contact</a>
        </div>
        {/* end desktop and tablet */}

        <div className="flex space-x-4">
            <Link href="/">
                <Button>Portofolio</Button>
            </Link>
        </div>
        </div>
    </div>
    </nav>
    )
}

export default NavbarBusiness;
