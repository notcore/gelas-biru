import Button from "@/components/elements/Button" ;
import Link from 'next/link';

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
            <a className="text-white hover:text-gray-200" href="#aboutme">Aboute me</a>
            <a className="text-white hover:text-gray-200" href="#exp">Exprience</a>
            <a className="text-white hover:text-gray-200" href="#skill">Skill</a>
            <a className="text-white hover:text-gray-200" href="#project">Project</a>
        </div>
        {/* end desktop and tablet */}

        <div className="flex space-x-4">
            <Link href="/business">
                <Button>business</Button>
            </Link>
        </div>
        </div>
    </div>
    </nav>
    )
}

export default Navbar;
