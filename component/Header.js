import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
        <header className="navigation">
            <div className="navigation-inner">
                <nav className="brand-section">
                    <Link href="/"><a className="brand" href="/"><span>Anshul G</span></a></Link>
                </nav>
                <div>
                    <nav>
                        <Link href="/about">About</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/blogs">Blogs</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header;