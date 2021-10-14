import { useEffect } from 'react'
import Plx from 'react-plx'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import blogo from 'resources/images/LOGO-Black.png'
import wlogo from 'resources/images/LOGO-White.png'
import solana from 'resources/images/solana.svg'
import fish1 from 'resources/images/school-fish1.svg'
import fish2 from 'resources/images/school-fish2.svg'
import fish3 from 'resources/images/school-fish3.svg'
import fish4 from 'resources/images/school-fish4.svg'
import seabed from 'resources/images/seabed.svg'
import './Home.css'
import {
    header,
    bannerLayer1, bannerLayer2, bannerLayer3, bannerLayer4,
    fishSection1, fishSection2, fishSection3, fishSection4,
    mFishSection1, mFishSection2, mFishSection3, mFishSection4,
} from './plxconfig'

library.add(fas, far, fab)

// 主應用
const Home = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    })

    useEffect(() => {
        document.title = 'Scallop';
        return () => { };
    }, []);

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <Plx parallaxData={bannerLayer1}>
                        <div className="Home-banner-layer Home-banner-layer-1"></div>
                    </Plx>
                    <Plx parallaxData={bannerLayer2}>
                        <div className="Home-banner-layer Home-banner-layer-2"></div>
                    </Plx>
                    <Plx parallaxData={bannerLayer3}>
                        <div className="Home-banner-layer Home-banner-layer-3"></div>
                    </Plx>
                    <Plx parallaxData={bannerLayer4}>
                        <div className="Home-banner-layer Home-banner-layer-4"></div>
                    </Plx>
                    <div className="Home-banner-layer Home-banner-layer-5"></div>
                </div>
                <Plx className="Home-header-logo" parallaxData={header}>
                    <a className="Home-logo" href="/">
                        <img className="Home-logo-image" src={blogo} alt="logo" />
                        {/* <div className="Home-logo-text">Scallop</div> */}
                    </a>
                </Plx>
                <Plx className="Home-header-nav" parallaxData={header}>
                    <nav></nav>
                </Plx>
            </header>
            <main className="Home-wrap">
                <section className="flex justify-end">
                    <div className="w-full sm:w-1/2">
                        <Plx parallaxData={isDesktopOrLaptop ? fishSection1 : mFishSection1}>
                            <img className="h-full" src={fish1} alt="fish" />
                        </Plx>
                    </div>
                </section>
                <section className="flex justify-start">
                    <div className="w-full sm:w-1/2">
                        <Plx parallaxData={isDesktopOrLaptop ? fishSection2 : mFishSection2}>
                            <img className="h-full" src={fish2} alt="fish" />
                        </Plx>
                    </div>
                </section>
                <section className="flex justify-end">
                    <div className="w-full xs:w-1/2 h-full xs:flex xs:justify-center xs:items-center sm:justify-center sm:items-start">
                        <Plx parallaxData={isDesktopOrLaptop ? fishSection3 : mFishSection3}>
                            <img className="h-16 mb-10 mr-10" src={fish3} alt="fish" />
                        </Plx>
                    </div>
                </section>
                <section className="flex justify-start">
                    <div className="w-full sm:w-1/2 h-full sm:flex sm:justify-center sm:items-start">
                        <Plx parallaxData={isDesktopOrLaptop ? fishSection4 : mFishSection4}>
                            <img className="w-3/4 md:w-full" src={fish4} alt="fish" />
                        </Plx>
                    </div>
                </section>
                <section className="flex flex-col justify-end">
                    <img src={seabed} alt="seabed" />
                </section>

                <div className="Home-wrap-bgMask"></div>

                <div className="Home-wrap-content">
                    <section className="flex flex-col sm:flex-row justify-center sm:justify-start">
                        <div className="Home-wrap-content-left">
                            <p className="Home-wrap-title">
                                Join now to <br/>
                                win tokens and decorations!
                            </p>
                            <p className="Home-wrap-descript text-center sm:text-left">
                                A DeFi game on Solana, stake to win tokens and NFTs ✨ !
                            </p>
                            <div className="w-full">
                                <div className="flex items-start justify-center sm:justify-start mt-6 xs:mt-8 gap-3 xs:gap-6">
                                    <a href="https://app.scallop.io" className="Home-wrap-btn">Launch App</a>
                                    <a href="https://docs.scallop.io" className="Home-wrap-btn">Read More</a>
                                    {/* <a href="https://doc.scallop.io/whitepaper.pdf" target="_blank" className="Home-wrap-btn">White Paper</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="Home-wrap-content-right">
                            <div className="w-full flex flex-nowrap justify-center sm:justify-end space-x-2 text-xs xs:text-sm sm:text-base lg:text-base">
                                <span className="block whitespace-nowrap text-gray-100">Build on</span>
                                <img className="block w-14 xs:w-16 sm:w-20 lg:w-24" src={solana} alt="solana" />
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row justify-center sm:justify-end">
                        <div className="Home-wrap-content-left"></div>
                        <div className="Home-wrap-content-right">
                            <p className="Home-wrap-title">
                                What is Scallop?
                            </p>
                            <p className="Home-wrap-descript text-justify">
                                Scallop is a DeFi game on Solana, users can stake their tokens in Scallop Pools to grow scallops in Scallop Tank, while they stake tokens, they can get the same worth of Scallop Token (SCA). At the end of each week, one or a few winner(s) chosen by program randomly will share out some SCA as the staking reward. During the game users can win tokens and Scallop Decorations by carrying out some tasks✨!
                            </p>
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row justify-center sm:justify-start">
                        <div className="Home-wrap-content-left">
                            <p className="Home-wrap-title">
                                How to play?
                            </p>
                            <div className="relative w-full mt-4">
                                <div className="Home-cards">
                                    <div className="Home-card">
                                        <div className="Home-card-title">
                                            Choosing Pools
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            There will be different tiers of pools with the different address limits, different SPL tokens to let users stake tokens.
                                        </div>
                                    </div>
                                    <div className="Home-card">
                                        <div className="Home-card-title">
                                            Staking
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            While they stake tokens, they can get the same worth of Scallop Token (SCA) as the token they staked. 
                                        </div>
                                    </div>
                                    <div className="Home-card">
                                        <div className="Home-card-title">
                                            Harvesting
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            Every Friday 20:00 (GMT+8) will be the harvest time, one (or a few) of winners chosen by on-chain program randomly will share out the staking reward SCA.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col sm:flex-row justify-center sm:justify-end">
                        <div className="Home-wrap-content-right">
                            <p className="Home-wrap-title">
                                Road Map
                            </p>
                            <div className="w-full mt-4">
                                <div className="Home-map">
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q2 2021
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Scallop Born🎂</li>
                                                <li>Solana Season Hackathon🦾</li>
                                                <li>First Scallop Decorations (Seagrass🌱)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q3 2021
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Scallop Fossil 🗿</li>
                                                <li>Wahite Paper 📃</li>
                                                <li>Ignition 🔥 | Solana Hackathon</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q4 2021
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Scallop on Dev-net 🚀</li>
                                                <li>Decorations Illustrated Book</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            H1 2022
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc">
                                                <li>SCA token launch</li>
                                                <li>Scallop on main-net 🚀</li>
                                                <li>SCA staking pool</li>
                                                <li>SCA Swap, Liquidity pools</li>
                                                <li>Scallop Decorations Eggs 🥚</li>
                                                <li>Decorations Market</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col justify-center sm:justify-start items-center">
                        <nav className="flex gap-5 sm:gap-8 lg:gap-10 justify-center items-center text-gray-300 sm:mt-10 lg:mt-0 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                            <a className="Home-nav" href="/">HOME</a>
                            <a className="Home-nav" href="https://app.scallop.io">APP</a>
                            <a className="Home-nav" href="https://docs.scallop.io">DOCS</a>
                            <a className="Home-nav" href="mailto:team@scallop.io">CONTACT US</a>
                        </nav>
                        <div className="Home-hr mt-4 w-11/12 sm:w-3/4 md:w-7/12 lg:w-1/2"></div>
                        <nav className="flex gap-5 sm:gap-8 lg:gap-10 justify-center items-center text-gray-300 mt-4 xs:mt-7 text-3xl xs:text-4xl lg:text-5xl">
                            <a className="hover:text-gray-100 hover:animate-bounce" href="https://t.me/scallop_io">
                                <FontAwesomeIcon icon={['fab', 'telegram']} transform={{ y: .5 }}/>
                            </a>
                            <a className="hover:text-gray-100 hover:animate-bounce" href="https://twitter.com/Scallop_io">
                                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
                            </a>
                            <a className="hover:text-gray-100 hover:animate-bounce" href="https://scallopio.medium.com/scallop-c030758d9c40">
                                <FontAwesomeIcon icon={['fab', 'medium']} />
                            </a>
                            <a className="hover:text-gray-100 hover:animate-bounce" href="https://discord.com/invite/F7umecFArJ">
                                <FontAwesomeIcon icon={['fab', 'discord']} transform={{ y: 1 }} />
                            </a>
                        </nav>
                        <a className="Home-logo my-3 xs:mt-6 sm:mt-10 2xl:mt-16 filter drop-shadow-white" href="/">
                            <img className="Home-logo-image" src={wlogo} alt="logo" />
                            {/* <div className="Home-logo-text">Scallop</div> */}
                        </a>
                        <div className="mt-3 xs:mt-6 sm:mt-9 text-xs sm:text-sm lg:text-base">
                            <span className="rounded-full bg-gray-800 text-gray-100 px-4 py-1">
                                Copyright © 2021, Scallop
                            </span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Home
