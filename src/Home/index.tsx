import { useEffect } from 'react'
import Plx from 'react-plx'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

const Home = () => {
    const isDekstopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(() => {
        document.title = 'Scallop';
        return () => { };
    },[])

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <div className="Home-banner-layer Home-banner-layer-1"></div>
                    <div className="Home-banner-layer Home-banner-layer-2"></div>
                    <div className="Home-banner-layer Home-banner-layer-3"></div>
                </div>
                <div className="Home-header-logo">
                    <a href="/" className="Home-logo">
                        <img className="Home-logo-image" alt="logo" />
                    </a>
                </div>
            </header>
            <main className="Home-wrapper">
                <section className="section-0">
                    <div className="section-0-layer-0"></div>
                    <div className="section-0-content grid grid-rows-2 justify-around sm:px-2 md:p-3">
                        <div>
                            <h1 className="text-title-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-3 2xl:mb-3">Join now to</h1>
                            <h1 className="text-title-1 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5">win tokens and decorations</h1>
                            <p className="text-title-2 text-white">A no loss lottery on Solana, stake to win tokens and NFTs ✨ !</p>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className="section-1 min-h-screen">
                    <img className="section-1-rock-1"/>
                    <img className="section-1-rock-2"/>
                    <div className="section-1-content">
                        <div className="absolute bubble-position-1">
                            <div className="relative section-1-bubble-container text-center grid gap-1 place-items-center">
                                <div className="section-1-bubble-container-text-position">
                                    <h5 className="section-1-bubble-container-text-title">Total Value Locked</h5>
                                    <h4 className="section-1-bubble-container-text-number">3,456,789 USD</h4>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bubble-position-2">
                            <div className="relative section-1-bubble-container-2 text-center grid gap-1 place-items-center">
                                <div className="section-1-bubble-container-text-position">
                                    <h5 className="section-1-bubble-container-text-title">Total Prize value</h5>
                                    <h4 className="section-1-bubble-container-text-number">≈ 36142 USD</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home