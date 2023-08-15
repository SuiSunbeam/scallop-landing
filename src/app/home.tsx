import { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { Menu } from '@headlessui/react';
import { ArrowUpIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { usePlxData } from '@/app/plxconfig';
import krissAvatar from '@/assets/images/avatar-kriss.png';
import annAvatar from '@/assets/images/avatar-ann.png';
import shawnAvatar from '@/assets/images/avatar-shawn.png';
import donnieAvatar from '@/assets/images/avatar-donnie.png';
import nathanAvatar from '@/assets/images/avatar-nathan.png';
import robertAvatar from '@/assets/images/robert.jpeg';
import yiluAvatar from '@/assets/images/yilu.jpeg';
import zhuangAvatar from '@/assets/images/avatar-zhuang.png';
import stevenAvatar from '@/assets/images/avatar-steven.png';
import twitterCommunity from '@/assets/images/community-twitter.svg';
import telegramCommunity from '@/assets/images/community-telegram.svg';
import discordCommunity from '@/assets/images/community-discord.svg';
import mediumCommunity from '@/assets/images/community-medium.svg';
import moveBitLogo from '@/assets/images/backer-movebit.svg';
import otterSecLogo from '@/assets/images/backer-ottersec.svg';

import Carousel from './carousel';
import '@/app/styles/home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselData } from './utils';

const dataSlider: CarouselData[] = [
  {
    logo: {
      source: otterSecLogo,
      alt: 'OtterSec',
    },
    message:
      '"The Scallop team was a pleasure to work with. They care deeply about security and it was a great experience working closely with them to ship robust, secure products."',
    profile: {
      image: robertAvatar,
      title: 'Robert Chen',
      subtitle: 'OtterSec',
    },
  },
  {
    logo: {
      source: moveBitLogo,
      alt: 'Movebit',
    },
    message:
      '"The Scallop project is one of my favorite Defi projects in Sui Network. It is a great pleasure to work with them. The tech team behind Scallop is with rich experience in Move. I am looking forward to collaborating more with Scallop!"',
    profile: {
      image: yiluAvatar,
      title: 'Yi Lu',
      subtitle: 'Movebit',
    },
  },
];

const Home = () => {
  const plxData = usePlxData();

  const [showBackToTop, setBackToTop] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.screen.height) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <div className="header-scene">
          <Plx parallaxData={plxData.headerSceneSun} className="header-scene-plx">
            <div className="scene-sun"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould1} className="header-scene-plx">
            <div className="scene-clould-1"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould2} className="header-scene-plx">
            <div className="scene-clould-2"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould3} className="header-scene-plx">
            <div className="scene-clould-3"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould4} className="header-scene-plx">
            <div className="scene-clould-4"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneClould5} className="header-scene-plx">
            <div className="scene-clould-4"></div>
          </Plx>
          <Plx parallaxData={plxData.headerSceneSea} className="header-scene-plx">
            <div className="scene-sea"></div>
          </Plx>
          <div className="scene-wave"></div>
        </div>
        <nav className="header-navigation">
          <a href="/" className="header-logo group">
            <img className="group-hover:animate-shake" alt="Scallop logo" />
            <span>Scallop</span>
          </a>
          <div className="header-navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="https://app.scallop.io/">App</a>
              </li>
              <li>
                <a href="https://docs.scallop.io/">Docs</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#investor">Investor</a>
              </li>
              <li>
                <a href="#message">Message</a>
              </li>
            </ul>
          </div>
          <Menu>
            <Menu.Button className="header-menubar-button">
              <Bars3Icon />
            </Menu.Button>
            <Menu.Items className="header-menubar-items">
              <Menu.Item as="div">
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="https://app.scallop.io/">App</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="https://docs.scallop.io/">Docs</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#about">About</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#team">Team</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#backer">Backer</a>
              </Menu.Item>
              <Menu.Item as="div">
                <a href="#message">Message</a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </nav>
      </header>

      <main className="home-main">
        <div className="main-scene">
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishOne} className="main-scene-plx">
              <img className="scene-groupOfFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-1" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishTwo} className="main-scene-plx">
              <img className="scene-groupOfFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfZebraFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockLeft-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-1" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-4" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-5" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-6" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-seahorse-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-2" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishThree} className="main-scene-plx">
              <img className="scene-groupOfFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-singleJellyFish-1" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfDiscusFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-7" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-8" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-9" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-10" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-11" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockLeft-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-rockRight-3" />
            </Plx>
          </section>
          <section></section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfTurtle} className="main-scene-plx">
              <img className="scene-groupOfTurtle" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-12" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-15" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-submarine" />
            </Plx>
          </section>
          <section>
            <Plx parallaxData={plxData.mainGroupOfFishFour} className="main-scene-plx">
              <img className="scene-groupOfFish-4" />
            </Plx>
            <Plx parallaxData={plxData.mainGroupOfFishFive} className="main-scene-plx">
              <img className="scene-groupOfFish-5" />
            </Plx>
            <Plx parallaxData={plxData.mainGroupOfJellyFishTwo} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-2" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-whale" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfJellyFish-3" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-16" />
            </Plx>
            <Plx parallaxData={[]} className="main-scene-plx">
              <img className="scene-groupOfBubble-17" />
            </Plx>
          </section>
        </div>
        <div className="main-content">
          <section>
            <div className="section-content">
              <p className="text-title-1">Scallop is the Next Generation Money Market</p>
              <p className="text-title-2">
                which emphasizes institutional-grade quality, enhanced composability, and robust
                security.
              </p>
              <div>
                <div className="links-container">
                  <a
                    className="more-button button1"
                    href="https://app.scallop.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch App
                  </a>
                  <a
                    className="more-button button2"
                    href="https://linktr.ee/scallop_io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
                <div className="based-on">
                  <span>Based on</span>
                  <a href="https://sui.io/" target="_blank" rel="noreferrer">
                    <img className="based-on-sui" alt="Sui" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="about">
                About
              </div>
              <img className="about" alt="about" />
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="why-scallop">
                Why Scallop?
              </div>
              <div className="why-scallop">
                <div className="reason-1">
                  <img />
                  <h3>Professional Trader Enabling</h3>
                  <ul>
                    <li>
                      Full-featured 2 Layers SDK for integrate with Sui & Scallop, powered by
                      Programmable Transaction Blocks
                    </li>
                    <li>Zero-cost flash loan</li>
                    <li>Market coins (Collateral token)</li>
                    <li>Scallop Tools</li>
                  </ul>
                </div>
                <div className="reason-2">
                  <img />
                  <h3>Industry Leading Model</h3>
                  <ul>
                    <li>
                      Most optimzied model upon Compound V3, Euler & Solend V2:
                      <ul>
                        <li>Trilinear Interest Rate Model</li>
                        <li>Dynamic Parameters</li>
                        <li>Collateral/Borrow Weights</li>
                        <li>Protected Collateral Vault</li>
                        <li>Borrow/Outflow/Collateralization Limits</li>
                        <li>Multi-TWAP-Oracle Strategy</li>
                        <li>Delayed Model Change</li>
                        <li>Soft Liquidation</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="reason-3">
                  <img />
                  <h3>Security First</h3>
                  <ul>
                    <li>Base on Rust</li>
                    <li>Sui Move - Object Strucuture</li>
                    <li>A team with cybersecurity background & Sui Move CTF contest places</li>
                    <li>Security Partners - Ottersec & MoveBit</li>
                    <li>Multi-Oracle Strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="achievement">
                Achievements
              </div>
              <ul className="achievement">
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble sui-champion-1" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🥇</span>
                    <a
                      href="https://blog.sui.io/grant-recipients-round-one/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      1st DeFi project award an official grant from the Sui Foundation in Nov. 2022.
                    </a>{' '}
                  </div>
                </li>
                <li>
                  <div>
                    <span>🥇</span>
                    <a
                      href="https://blog.sui.io/seoul-builder-house-recap/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      1st place in the Sui Builder House Seoul Hackathon in June 2023. (Scallop
                      Tools)
                    </a>{' '}
                  </div>
                  <div className="right-champion">
                    <img className="champion-bubble sui-champion-2" />
                    <img className="right-champion-line" />
                  </div>
                </li>
                <li>
                  <div>
                    <span>🥇</span>
                    <a
                      href="https://blog.sui.io/seoul-builder-house-recap/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      1st place in the Move Hackathon by WebX Circle track in July 2023.
                    </a>{' '}
                  </div>
                  <div className="left-champion">
                    <img className="champion-bubble sui-champion-2" />
                    <img className="left-champion-line" />
                  </div>
                </li>
                <li>
                  <div className="right-champion">
                    <img className="champion-bubble sui-champion-3" />
                    <img className="right-champion-line" />
                  </div>
                  <div>
                    <span>🥉</span>
                    <a
                      href="https://suictf.movebit.xyz/scoreboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3rd place Best Overall in the Sui x Kucoin Labs Summer Hackathon in July 2023.
                    </a>{' '}
                  </div>
                </li>
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble sui-champion-3" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🥉</span>
                    <a
                      href="https://suictf.movebit.xyz/scoreboard"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3rd place in the Sui x jump_ Builder House Ho Chi Minh City CTF challenge in
                      Mar. 2023.
                    </a>{' '}
                  </div>
                </li>
                <li>
                  <div>
                    <span>🎖️</span>
                    <a
                      href="https://blog.sui.io/seoul-builder-house-recap/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      5th place in the Sui Builder House Denver CTF challenge Mar 2023.
                    </a>
                  </div>
                  <div className="right-champion">
                    <img className="champion-bubble  sui-champion-3" />
                    <img className="right-champion-line" />
                  </div>
                </li>
                <li>
                  <div className="left-champion">
                    <img className="champion-bubble  sui-champion-5" />
                    <img className="left-champion-line" />
                  </div>
                  <div>
                    <span>🎖️</span>
                    <a href="" target="_blank" rel="noreferrer">
                      5th place in the Sui Builder House Seoul Hackathon in June 2023. (Sui Kit)
                    </a>{' '}
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="beyond">
                Beyond Lending & Borrowing
              </div>
              <img className="beyond" />
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="team">
                Scallop Labs
              </div>
              <div className="team-container">
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Kriss Avatar" src={krissAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/djchrisssssss"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Kriss</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Donnie Avatar" src={donnieAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/MrDonor_donnie"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Donnie</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Nathan Avatar" src={nathanAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/nathanramli"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Nathan</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Ann Avatar" src={annAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/sailormoonann"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Ann</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Shawn Avatar" src={shawnAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/XinhaiZeng"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Shawn</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Zhuang Avatar" src={zhuangAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/NFT_ZHUANG"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Zhuang</span>
                  </div>
                </div>
                <div className="team-card">
                  <div className="card-avatar">
                    <img alt="Steven Avatar" src={stevenAvatar} />
                  </div>
                  <div className="card-profile">
                    <div className="profile-links">
                      <a
                        className="twitter"
                        href="https://twitter.com/chen4hao"
                        target="_blank"
                        rel="noreferrer"
                      />
                    </div>
                    <span className="profile-name">Steven</span>
                  </div>
                </div>
              </div>
              <div className="text-team-description">
                A team with cybersecurity, Web2 fintech, DeFi, algorithm contest, quantitative
                trading, and VC backgrounds...
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="backer">
                <a href="https://mystenlabs.com/" target="_blank" rel="noreferrer">
                  <img
                    className="mystenlabs"
                    alt="Mysten Labs"
                    title="Mysten Labs is a company that develops a tech infrastructure platform designed for Web3 adoption, accelerating the development and adoption of decentralized services."
                  />
                </a>
                <a
                  href="https://sui.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="sui-foundation-href"
                >
                  <img
                    className="sui-foundation"
                    alt="Sui Foundation"
                    title="Sui Foundation is an independent organization supporting the Sui community and its projects."
                  />
                </a>
                <a href="https://comma3.co/" target="_blank" rel="noreferrer">
                  <img
                    className="comma3"
                    alt="Comma3"
                    title="Comma3 is a fund for founders. Looking for disruptive innovation entrepreneurs in Web3."
                  />
                </a>
                <a href="https://assembly.partners/" target="_blank" rel="noreferrer">
                  <img
                    className="assembly-partners"
                    alt="Assembly Partners"
                    title="Assembly Partners is a research-driven fund, seeking the next phenomenal infrastructure in the blockchain industry."
                  />
                </a>
                <a href="https://www.creditscend.com/" target="_blank" rel="noreferrer">
                  <img
                    className="credit-scend"
                    alt="Credit Scend"
                    title="Credit Scend is a crypto venture in Singapore firm that thrives on uncovering the hidden gems behind resourceful founders.​"
                  />
                </a>
                <a href="https://www.phdcapital.fund/" target="_blank" rel="noreferrer">
                  <img
                    className="phd-capital"
                    alt="PHD Capital"
                    title="PHD Capital is a Web3 investment fund with a focus on early stage venture across the DeFi, NFT Finance and Layer 1/2 infrastructure space."
                  />
                </a>
                <a href="https://www.lolcapital.io/" target="_blank" rel="noreferrer">
                  <img
                    className="lol-capital"
                    alt="LOL Capital"
                    title="LOL Capital is an independent investment firm specializing in cryptocurrency and metaverse. "
                  />
                </a>
                <a href="https://supraoracles.com/" target="_blank" rel="noreferrer">
                  <img
                    className="supra-oracles"
                    alt="Supra Oracles"
                    title="Supra Oracles is a cross-chain oracle, offering cross-chain data feeds with real-time refresh rates for price feeds."
                  />
                </a>
                <a href="https://osec.io/" target="_blank" rel="noreferrer">
                  <img
                    className="ottersec"
                    alt="OtterSec"
                    title="OtterSec is a blockchain security company focused on identifying and patching critical exploits before our clients go to market."
                  />
                </a>
                <a href="https://www.movebit.xyz/" target="_blank" rel="noreferrer">
                  <img
                    className="movebit"
                    alt="MoveBit"
                    title="MoveBit is a blockchain security company focusing on Move ecosystem security."
                  />
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="section-content">
              <div className="text-title-section" id="message">
                Message
              </div>
              <Carousel items={dataSlider} />
            </div>
          </section>
        </div>
      </main>

      <footer className="home-footer">
        <div className="footer-scene"></div>
        <div className="footer-content">
          <div className="menu">
            <a href="https://www.scallop.io/" target="_blank" rel="noreferrer">
              Home
            </a>
            <a href="https://app.scallop.io/" target="_blank" rel="noreferrer">
              App
            </a>
            <a href="https://docs.scallop.io/" target="_blank" rel="noreferrer">
              Docs
            </a>
            <a href="mailto:team@scallop.io">Contact</a>
          </div>
          <div className="community">
            <a href="https://t.me/scallop_io" target="_blank" rel="noreferrer">
              <img src={telegramCommunity} alt="Scallop Telegram" />
            </a>
            <a href="https://twitter.com/Scallop_io" target="_blank" rel="noreferrer">
              <img src={twitterCommunity} alt="Scallop Twitter" />
            </a>
            <a href="https://medium.com/scallopio" target="_blank" rel="noreferrer">
              <img src={mediumCommunity} alt="Scallop Medium" />
            </a>
            <a href="https://discord.com/invite/F7umecFArJ" target="_blank" rel="noreferrer">
              <img src={discordCommunity} alt="Scallop Discord" />
            </a>
          </div>
          <a href="/" className="footer-logo group">
            <img className="group-hover:animate-shake" alt="Scallop logo" />
            <span>Scallop</span>
          </a>
          <div className="copyright">
            <span>© 2023 Scallop.io</span>
          </div>
        </div>
      </footer>
      {showBackToTop && <ArrowUpIcon className="back-to-top" onClick={handleBackToTop} />}
    </div>
  );
};
export default Home;
