import { useEffect } from 'react'
import Plx from 'react-plx'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from 'resources/images/logo.svg'
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
        document.title = 'Scallop | A DeFi game on Solana';
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
                        <img className="Home-logo-image" src={logo} alt="logo" />
                        <div className="Home-logo-text">Scallop</div>
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
                                A Defi game on Solana, stake to win tokens and NFTs ✨ !
                            </p>
                            <div className="w-full">
                                <div className="flex items-start justify-center sm:justify-start mt-6 xs:mt-8 gap-3 xs:gap-6">
                                    <a href="https://app.scallop.io" className="Home-wrap-btn">Launch App</a>
                                    <a href="https://docs.scallop.io" className="Home-wrap-btn">Read More</a>
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
                                Scallop is a Defi game on Solana, users can stake their SOL here to grow a scallop and have chances to win tokens and NFTs. At the end of each week, one (or a few) of winner chosen by program randomly will share out some Scallop token (SCA) with same value of SOL staking reward, 7% of SOL reward will be kept in the staking pool, 93% will be SCA buyback. During the game users can win Scallop Decorations by carrying out some tasks ✨ !
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
                                            STAKING SOL
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            Users can stake SOL to the Scallop tank, after staking over 7 days users will have the qualification of harvest, every Friday 20:00 (GMT+8) will be the harvest time
                                        </div>
                                    </div>
                                    <div className="Home-card">
                                        <div className="Home-card-title">
                                            HARVEST SCALLOP
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            After harvesting, one (or a few) of winners chosen by program randomly will get Scallop token (SCA) with the same value of SOL staking reward, 7% of SOL reward will be kept in the staking pool and 93% will be SCA buyback.
                                        </div>
                                    </div>
                                    <div className="Home-card">
                                        <div className="Home-card-title">
                                            Tasks🏅
                                        </div>
                                        <div className="Home-hr w-10/12 mt-1"></div>
                                        <div className="Home-card-content">
                                            During the game users can carrying out some tasks, like stake more than 10 SOL in the Scallop tank for a month or stake more than 10000 SCA in the staking pool for two weeks.
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
                                            Q3 2021
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Scallop Fossil Decorations 🗿</li>
                                                <li>First SCA airdrop 💸</li>
                                                <li>Launch Scallop on test-net</li>
                                                <li>SCA token launch</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q4 2021
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Launch Scallop on main-net🚀</li>
                                                <li>SCA token staking pool</li>
                                                <li>SCA/USDC Liquidity pool and Swap pool</li>
                                                <li>Scallop Nautilus Decorations (Bidding event)</li>
                                                <li>More ways to let the funds to earn rewards</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q1 2022
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc text-justify">
                                                <li>Another token Scallop pool</li>
                                                <li>Scallop NFTs Decorations</li>
                                                <li>Second SCA airdrop 💸</li>
                                                <li>Scallop shop</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="Home-road">
                                        <div className="Home-road-title">
                                            Q2 2022
                                        </div>
                                        <div className="Home-road-content">
                                            <ul className="list-disc">
                                                <li>Vote with your SCA</li>
                                                <li>Scallop Decorations Eggs 🥚</li>
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
                            <a className="hover:text-gray-100 hover:animate-bounce" href="https://discord.gg/scallop">
                                <FontAwesomeIcon icon={['fab', 'discord']} transform={{ y: 1 }} />
                            </a>
                        </nav>
                        <a className="Home-logo mt-3 xs:mt-6 sm:mt-9 2xl:mt-16" href="/">
                            <img className="Home-logo-image" src={logo} alt="logo" />
                            <div className="Home-logo-text">Scallop</div>
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
