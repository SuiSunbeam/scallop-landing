import { useEffect, useState, useCallback } from 'react';
import krissAvatar from '../resources/images/kriss-avatar.png';
import juneAvatar from '../resources/images/june-avatar.png';
import donnieAvatar from '../resources/images/donnie-avatar.png';
import nathanAvatar from '../resources/images/nathan-avatar.png';
import twitterIcon from '../resources/images/twitter-icon.png';
import telegramIcon from '../resources/images/telegram-icon.png';
import discordIcon from '../resources/images/discord-icon.png';
import mediumIcon from '../resources/images/medium-icon.png';
import imageGroupOfFish1 from '../resources/images/group-of-fish-1.svg';
import imageGroupOfFish3 from '../resources/images/group-of-fish-3.svg';
import imageGroupOfFish4 from '../resources/images/group-of-fish-4.svg';
import imageGroupOfFish5 from '../resources/images/group-of-fish-5.svg';
import imageGroupOfZebraFish from '../resources/images/group-of-zebra-fish.png';
import imageGroupOfTurtle from '../resources/images/group-of-turtle.svg';
import imageGroupOfJellyfish from '../resources/images/group-of-jellyfish.svg';
import imageSeahorse from '../resources/images/seahorse.svg';
import Plx from 'react-plx';
import {
    bannerSun,
    bannerClould1,
    bannerClould2,
    bannerClould3,
    bannerClould4,
    bannerSea,
    groupOfFish1,
    groupOfFish3,
    groupOfFish4,
    groupOfFish5,
    groupOfFish6,
    groupOfFish7,
    seahorse,
    groupOfTurtle,
    groupOfJellyfish,
} from './plxconfig';
import { endpoint, checkBreakpoint } from './utils';
import './index.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Scallop';
        return () => {};
    }, []);

    const [breackPoints, setBreackPoints] = useState<{ [index in endpoint]: boolean }>(checkBreakpoint());

    const handleResize = useCallback((event: UIEvent) => {
        setBreackPoints(checkBreakpoint());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', (event) => handleResize(event));

        return () => {
            window.removeEventListener('resize', (event) => handleResize(event));
        };
    }, [handleResize]);
    console.log(breackPoints);
    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <Plx parallaxData={bannerSun(breackPoints)}>
                        <div className="Home-banner-layer Home-banner-sun"></div>
                    </Plx>
                    <Plx parallaxData={bannerClould1(breackPoints)}>
                        <div className="Home-banner-layer Home-banner-clould-1"></div>
                    </Plx>
                    <Plx parallaxData={bannerClould2(breackPoints)} className="absolute w-full top-[15%]">
                        <div className="Home-banner-layer Home-banner-clould-2"></div>
                    </Plx>
                    <Plx parallaxData={bannerClould3(breackPoints)} className="absolute w-full top-[15%]">
                        <div className="Home-banner-layer Home-banner-clould-3"></div>
                    </Plx>
                    <Plx parallaxData={bannerClould4(breackPoints)} className="absolute w-full top-[45%]">
                        <div className="Home-banner-layer Home-banner-clould-4"></div>
                    </Plx>
                    <Plx parallaxData={bannerSea(breackPoints)} className="absolute w-full bottom-0">
                        <div className="Home-banner-layer Home-banner-sea"></div>
                    </Plx>
                    <div className="Home-banner-layer Home-banner-wave"></div>
                </div>
                <nav className="Home-navigation place-items-center">
                    <div className="col-span-2">
                        <a href="/" className="Home-logo">
                            <img className="Home-logo-image" alt="logo" />
                        </a>
                    </div>
                    <div className="Home-nav-menu col-span-4 lg:ml-24 xl:ml-44 2xl:ml-60 z-50 my-4 list-none divide-y">
                        <ul className="hidden lg:flex md:space-x-12 2xl:space-x-14" aria-labelledby="dropdown">
                            <li className="active">Home</li>
                            <li>NFTs</li>
                            <li>Roadmap</li>
                            <li>Core Team</li>
                            <li>Investors</li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="Home-wrapper">
                <section>
                    <div className="section-0-content grid grid-cols-6 w-full h-full">
                        <div className="col-span-4 justify-self-start flex flex-col place-content-center h-full ml-10 lg:ml-20 xl:ml-40 2xl:ml-44">
                            <div className="group-of-fish">
                                <Plx parallaxData={groupOfFish1}>
                                    <img className="h-full" src={imageGroupOfFish1} alt="fish" />
                                </Plx>
                            </div>
                            <p className="text-title-1">
                                Scallop is a diverse no-loss
                                <br />
                                protocol on Solana.
                            </p>
                            <p className="text-title-2">Maximizes the potential yield with no principal loss.</p>
                            <div className="flex space-x-8 mt-3 sm:mt-2 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10">
                                <div>
                                    <button className="Home-button button-header">Launch App</button>
                                </div>
                                <div>
                                    <button className="Home-button button-header">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 flex">
                            <div className="group-of-discus-fish self-center"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="group-of-fish">
                        <Plx parallaxData={groupOfFish6}>
                            <img src={imageGroupOfFish5} alt="fish" style={{ transform: 'scaleX(-1)' }} />
                        </Plx>
                    </div>
                    <div className="group-of-zebra-fish">
                        <Plx parallaxData={groupOfFish7}>
                            <img src={imageGroupOfZebraFish} alt="fish" />
                        </Plx>
                    </div>
                    <img alt="A rock" className="section-1-rock-1" />
                    <img alt="A rock" className="section-1-rock-2" />
                    <div className="section-1-content">
                        <div className="absolute bubble-position-1">
                            <div className="relative section-1-bubble-container text-center grid gap-1 place-items-center">
                                <div className="section-1-bubble-container-text-position">
                                    <h5 className="section-1-bubble-container-text-title">Total Value Locked</h5>
                                    <h4 className="section-1-bubble-container-text-number">3,456,789 USD</h4>
                                </div>
                            </div>
                        </div>
                        <div className="absolute two-jellyfish"></div>
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
                <section>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-6/12">
                            <div className="rock-left"></div>
                            <div className="lonely-zebrafish"></div>
                        </div>
                        <div className="w-7/12 xs:w-4/12 flex flex-col self-center justify-self-center mx-auto justify-center sm:w-5/12 text-white md:pr-2 md:w-4/12 max-w-lg">
                            <h3 className="text-xs sm:text-base md:text-lg lg:text-3xl xl:text-4xl mb-4 font-bold">Hermit Crab NFTs</h3>
                            <p className="text-2xs sm:text-xs md:text-sm lg:text-xl xl:text-2xl">
                                4,200 unique Hermit Crabs NFTs created by Scallop Labs, they are the coolest Scallop Decorations which can
                                also be your pet in Scallop Tank in the future🐚🦀!
                            </p>
                            <a
                                href="#hermit-crab"
                                className="bg-gray-300 text-2xs w-1/3 p-1 mt-2 md:mt-5 xl:mt-20 md:text-base md:p-3 md:w-2/3 text-center self-center rounded-lg xl:rounded-xl xl:py-3 xl:text-xl text-black"
                            >
                                Coming Soon
                            </a>
                        </div>
                    </div>
                    <div className="rock-right"></div>
                    <div className="group-of-fish">
                        <Plx parallaxData={groupOfFish3}>
                            <img src={imageGroupOfFish3} className="w-full xl:w-2/3" alt="" />
                        </Plx>
                    </div>
                    <div className="seahorse">
                        <Plx parallaxData={seahorse}>
                            <img src={imageSeahorse} alt="seahorse" />
                        </Plx>
                    </div>
                </section>
                <section>
                    <div className="w-full absolute flex justify-center">
                        <img alt="Roadmap" className="roadmap" />
                        <div className="text-roadmap-1">
                            <h2 className="text-title">2022 Q2</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Mainnet Launch</span>
                                </li>
                                <li>
                                    <span>Scallop IDO</span>
                                </li>
                                <li>
                                    <span>Scallop Token (SCA)</span>
                                </li>
                                <li>
                                    <span>Hermit Crab NFTS</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-2">
                            <h2 className="text-title">2022 Q3</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Scallop Swap</span>
                                </li>
                                <li>
                                    <span>SCA Staking</span>
                                </li>
                                <li>
                                    <span>Decorations Staking</span>
                                </li>
                                <li>
                                    <span>More Scallop Pools</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-3">
                            <h2 className="text-title">2022 Q4</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Scallop Pool V2</span>
                                </li>
                                <li>
                                    <span>Scallop DAO</span>
                                </li>
                                <li>
                                    <span>Scallop Tamagotchi</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img alt="A rock" className="rock-left" />
                    <img alt="A rock right" className="rock-right" />
                    <div className="text-title-section">Roadmap</div>
                </section>
                <section className="flex flex-col w-full">
                    <div className="p-5 w-full mb-20">
                        <div className="group-of-turtle">
                            <Plx parallaxData={groupOfTurtle}>
                                <img className="h-full" src={imageGroupOfTurtle} alt="fish" />
                            </Plx>
                        </div>
                        <div className="group-of-jellyfish">
                            <Plx parallaxData={groupOfJellyfish}>
                                <img src={imageGroupOfJellyfish} alt="fish" />
                            </Plx>
                        </div>
                        <div className="core-team-submarine"></div>
                    </div>
                    <div className="p-5 flex flex-col md:flex-row w-full">
                        <div className="group-of-fish">
                            <Plx parallaxData={groupOfFish4}>
                                <img className="h-full" src={imageGroupOfFish4} alt="fish" />
                            </Plx>
                        </div>
                        <div className="stingray-container">
                            <div className="group-of-stingray" />
                        </div>
                        <div className="p-5 teams">
                            <div className="card-team">
                                <div className="card-profile">
                                    <img alt="Kriss Avatar" className="avatar" src={krissAvatar} />
                                    <div className="title">Team Lead</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Kriss</span>
                                    <div className="card-links">
                                        <a className="twitter" href="https://twitter.com/djchrisssssss"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img alt="Donnie Avatar" className="avatar" src={donnieAvatar} />
                                    <div className="title">Developer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Donnie</span>
                                    <div className="card-links">
                                        <a className="twitter" href="https://twitter.com/MrDonor_donnie"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img alt="Nathan Avatar" className="avatar" src={nathanAvatar} />
                                    <div className="title">Developer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">Nathan</span>
                                    <div className="card-links">
                                        <a className="twitter" href="https://twitter.com/nathanramli"></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-team">
                                <div className="card-profile">
                                    <img alt="June Avatar" className="avatar" src={juneAvatar} />
                                    <div className="title">Designer</div>
                                </div>
                                <div className="card-content">
                                    <span className="card-name">June</span>
                                    <div className="card-links">
                                        <a className="twitter" href="https://twitter.com/ChunnnnHsieh"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="whale"></div>
                    <div className="absolute two-jellyfish"></div>
                    <div className="group-of-fish">
                        <Plx parallaxData={groupOfFish5} className="origin-left">
                            <img src={imageGroupOfFish5} alt="" />
                        </Plx>
                    </div>
                    <div className="content">
                        <h1>Investors</h1>
                    </div>
                </section>
            </main>
            <footer>
                <div className="seabed"></div>
                <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="content">
                        <div className="menu">
                            <a href="https://www.scallop.io/">HOME</a>
                            <a href="https://app.scallop.io/">APP</a>
                            <a href="https://docs.scallop.io/">DOCS</a>
                            <a href="mailto:team@scallop.io">CONTACT US</a>
                        </div>
                        <div className="social-media">
                            <a href="https://t.me/scallop_io">
                                <img src={telegramIcon} alt="" />
                            </a>
                            <a href="https://twitter.com/Scallop_io">
                                <img src={twitterIcon} alt="" />
                            </a>
                            <a href="https://scallopio.medium.com/scallop-c030758d9c40">
                                <img src={mediumIcon} alt="" />
                            </a>
                            <a href="https://discord.com/invite/F7umecFArJ">
                                <img src={discordIcon} alt="" />
                            </a>
                        </div>
                        <div className="logo"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Home;
