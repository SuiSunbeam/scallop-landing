import { useEffect, useState } from 'react';
import Plx from 'react-plx';
import axios from 'axios';
import CountUp from 'react-countup';
import { Popover } from '@headlessui/react';
import krissAvatar from '../resources/images/kriss-avatar.png';
import juneAvatar from '../resources/images/june-avatar.png';
import donnieAvatar from '../resources/images/donnie-avatar.png';
import nathanAvatar from '../resources/images/nathan-avatar.png';
import twitterIcon from '../resources/images/twitter-icon.png';
import telegramIcon from '../resources/images/telegram-icon.png';
import discordIcon from '../resources/images/discord-icon.png';
import mediumIcon from '../resources/images/medium-icon.png';
import { usePlxData } from './plxconfig';
import './index.css';

const Home = () => {
    const plxData = usePlxData();

    const BASE_URL = 'https://api.scallop.io';

    const [totalValue, setTotalValue] = useState(0);
    const [totalPrize, setTotalPrize] = useState(0);

    useEffect(() => {
        document.title = 'Scallop';

        (async () => {
            await axios
                .get(`${BASE_URL}/v1/get-total-value`)
                .then((response) => {
                    setTotalValue(response.data.data);
                })
                .catch((e) => console.log('Failed to fetch total value:', e));

            await axios
                .get(`${BASE_URL}/v1/get-total-prize`)
                .then((response) => {
                    setTotalPrize(response.data.data);
                })
                .catch((e) => console.log('Failed to fetch total prize:', e));
        })();

        return () => {};
    }, []);

    return (
        <div className="Home">
            <header className="Home-header">
                <div className="Home-banner">
                    <Plx parallaxData={plxData.bannerSun} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-sun"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould1} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-1"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould2} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-2"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould3} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-3"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerClould4} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-clould-4"></div>
                    </Plx>
                    <Plx parallaxData={plxData.bannerSea} className="Home-banner-plx">
                        <div className="Home-banner-layer Home-banner-sea"></div>
                    </Plx>
                    <div className="Home-banner-layer Home-banner-wave"></div>
                </div>
                <nav className="Home-navigation">
                    <a href="/" className="Home-logo">
                        <img alt="Scallop logo" />
                    </a>
                    <div className="Home-nav-menu">
                        <ul className="hidden lg:flex md:space-x-12 2xl:space-x-14">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#decorations">Decorations</a>
                            </li>
                            <li>
                                <a href="#roadmap">Roadmap</a>
                            </li>
                            <li>
                                <a href="#core-team">Core Team</a>
                            </li>
                            <li>
                                <a href="#partners">Partners</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className="Home-main">
                <section>
                    <Plx parallaxData={plxData.sectionOneLeftFish} className="image-px">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="group-of-discus-fish" alt="Group of discus fish" />
                    <div className="section-content">
                        <p className="text-title-1">
                            Scallop is a diverse no-loss
                            <br />
                            protocol on Solana.
                        </p>
                        <p className="text-title-2">Maximizes the potential yield with no principal loss.</p>
                        <div>
                            <a className="more-button" href="https://app.scallop.io">
                                Launch App
                            </a>
                            <a className="more-button" href="https://linktr.ee/scallop_io">
                                Read More
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionTwoRightFish} className="image-px">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="group-of-zebra-fish" alt="Group of zebra fish" />
                    <img className="rock-left" alt="Left rock" />
                    <img className="rock-right" alt="Right rock" />
                    <div className="section-content">
                        <div className="bubble-left">
                            <div className="bubble-container">
                                <h5 className="text-title">Next Prize Value</h5>
                                <h4 className="text-number">
                                    <CountUp
                                        start={0}
                                        end={totalPrize}
                                        duration={8}
                                        prefix="≈ "
                                        suffix=" USD"
                                        decimal="."
                                        separator=","
                                        decimals={2}
                                        useEasing={true}
                                    />
                                </h4>
                            </div>
                        </div>
                        <div className="bubble-right">
                            <div className="bubble-container">
                                <h5 className="text-title">Total Value Locked</h5>
                                <h4 className="text-number">
                                    <CountUp
                                        start={0}
                                        end={totalValue}
                                        duration={8}
                                        suffix=" USD"
                                        decimal="."
                                        separator=","
                                        decimals={0}
                                        useEasing={true}
                                    />
                                </h4>
                            </div>
                        </div>
                        <img className="two-jellyfish" alt="Two jellyfish" />
                    </div>
                </section>
                <section>
                    <div className="rock-left"></div>
                    <img className="rock-right" alt="Right rock" />
                    <img className="lonely-zebrafish" alt="Lonely zebrafish" />
                    <img className="seahorse" alt="Seahorse" />
                    <img className="hermit" alt="Hermit crab" />
                    <div className="section-content">
                        {/* <h3 className="text-title-1">&nbsp;</h3> */}
                        <p className="text-title-2">
                            Scallop protocol's native NFTs called Scallop Decorations, their goal is useful on-chain collectibles, Scallop
                            Decorations will show at Scallop Tank and interact with Scallop protocol.
                        </p>
                        <a className="nft-button" href="#hermit-crab">
                            Coming Soon
                        </a>
                    </div>
                    <div className="text-title-section" id="decorations">
                        Scallop Decorations
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionFourLeftFish} className="image-px">
                        <img className="group-of-fish" alt="Group of fish" />
                    </Plx>
                    <img className="lonely-jellyfish" alt="Lonely jellyfish" />
                    <img className="group-of-discus-fish-left" alt="Group of discus fish" />
                    <img className="group-of-discus-fish-right" alt="Group of discus fish" />
                    <img className="rock-left" alt="Left rock" />
                    <img className="rock-right" alt="Right rock" />
                    <div className="roadmap-line" />
                    <div className="section-content">
                        <div className="text-roadmap-1">
                            <h2 className="text-title">2022 Q2</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Scallop Devnet Beta</span>
                                </li>
                                <li>
                                    <span>Hackathon 3.0</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-2">
                            <h2 className="text-title">2022 Q3</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Fossil NFTs</span>
                                </li>
                                <li>
                                    <span>Scallop Tools</span>
                                </li>
                                <li>
                                    <span>Landing Page V2</span>
                                </li>
                                <li>
                                    <span>Scallop Mainnet</span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-roadmap-3">
                            <h2 className="text-title">2022 Q4</h2>
                            <ul className="text-list">
                                <li>
                                    <span>Scallop Swap</span>
                                </li>
                                <li>
                                    <span>?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-title-section" id="roadmap">
                        Roadmap
                    </div>
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionFiveRightTurtle} className="image-px">
                        <img className="group-of-turtle" alt="Group of fish" />
                    </Plx>
                    <img className="core-team-submarine" id="core-team" alt="Core team submarine" />
                    <img className="group-of-manta" alt="Group of manta" />
                    <div className="section-content">
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
                </section>
                <section>
                    <Plx parallaxData={plxData.sectionSixLeftFish} className="image-px">
                        <img className="group-of-fish-left" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={plxData.sectionSixRightFish} className="image-px">
                        <img className="group-of-fish-right" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={plxData.sectionSixLeftjellyfish} className="image-px">
                        <img className="group-of-jelly-fish" alt="Group of fish" />
                    </Plx>
                    <Plx parallaxData={[]} className="image-px">
                        <img className="whale" alt="Whale" />
                    </Plx>
                    <img className="two-jellyfish" alt="Two jellyfish" />
                    <div className="section-content">
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-solana" alt="Solana" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Solana</h2>
                                <p>Scallop protocol is based on Solana.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-metaplex" alt="Metaplex" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Metaplex</h2>
                                <p>
                                    Scallop Decorations and Scallop NFTs are all in Metaplex standard, and we use Metaplex Candy Machine V2
                                    for NFTs minting.
                                </p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-serum" alt="Serum" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Serum</h2>
                                <p>You can trade Scallop Decorations on Serum order book.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-solend" alt="Solend" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Solend</h2>
                                <p>Solend is the main lending protocol that Scallop pools are using.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-switchboard" alt="Switchboard" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Switchboard</h2>
                                <p>Scallop relies on Switchboard for their VRF feeds to pick winners.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-marinade" alt="Marinade" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Marinade</h2>
                                <p>Marinade is the main staking protocol that Scallop pools are using.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-saber" alt="Saber" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Saber</h2>
                                <p>Scallop use Merkle Distributor by Saber team for airdrop tokens.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-aldrin" alt="Aldrin" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Aldrin</h2>
                                <p>Aldrin is the main Scallop Decorations trading exchange by using Serum order book.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-slope" alt="Slope" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Slope</h2>
                                <p>Slope integrate Scallop in their mobile wallet.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-solanafm" alt="SolanaFM" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>SolanaFM</h2>
                                <p>SolanaFM is Scallop's official Solana explorer.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-snowflake" alt="Snowflake" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Snowflake</h2>
                                <p>Scallop is using Snowflake for asset management.</p>
                            </Popover.Panel>
                        </Popover>
                        {/* <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-solvent" alt="Solvent" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Solvent</h2>
                                <p>Scallop will use Solvent to fragments Scallop Decorations.</p>
                            </Popover.Panel>
                        </Popover> */}
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-coral" alt="Coral" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Coral</h2>
                                <p>Scallop use Anchor framework by Coral for Solana program development.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-grape" alt="Grape" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Grape</h2>
                                <p>Scallop use Grape verify bot for the token holder verifications.</p>
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="protocal-img">
                                <img className="protocal-shoebill" alt="Shoebill Coin" />
                            </Popover.Button>
                            <Popover.Panel className="protocal-content">
                                <h2>Shoebill Coin</h2>
                                <p>Shoebill Coin is Scallop's marketing partner in Solana ecosystem.</p>
                            </Popover.Panel>
                        </Popover>
                    </div>
                    <div className="text-title-section" id="partners">
                        Partners & Integrated with
                    </div>
                </section>
            </main>
            <footer>
                <div className="seabed"></div>
                <div className="content">
                    <div className="menu">
                        <a href="https://www.scallop.io/">HOME</a>
                        <a href="https://app.scallop.io/">APP</a>
                        <a href="https://docs.scallop.io/">DOCS</a>
                        <a href="mailto:team@scallop.io">CONTACT</a>
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
                    <img alt="Scallop logo" />
                    <div className="copyright">
                        <span>Copyright © 2021, Scallop</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Home;
