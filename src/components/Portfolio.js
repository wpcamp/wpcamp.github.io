import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/coinPort.png",
    title: "coinClone",
    text: [
      "Full stack project made using a React/Redux JS front-end and a Python Flask back-end.",
      "This project utilizes two cryptocurrency real-time price APIs, and allows users to create watchlists of their favorite cryptocurrencies, buy and sell cryptocurrencies with a virtual balance, and watch their portfolio grow over time.",
    ],
    socials: [],
    date: "September 2023",
    category: "Solo Project",
    url: "https://coinclone-thesecond.onrender.com/",
    git: "https://github.com/wpcamp/coinClone",
    bigImage: "assets/img/portfolio/coinPort.png",
    images: ["assets/img/portfolio/coinShow.png", "assets/img/portfolio/coinWatch.png"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/uberRest.png",
    title: "VancouberEats",
    text: [
      "VancouberEats was a group project made using a React/Redux JS front-end and a Python Flask back-end.",
      "This UberEats clone allows users to create an account, create or search for restaurants, order food, and leave reviews.",
    ],
    socials: [],
    date: "August 2023",
    url: "https://vancouvereats.onrender.com/",
    git: "https://github.com/EricSapsford/UberEats-Clone",
    category: "Group Project",
    bigImage: "assets/img/portfolio/uberRest.png",
    images: ["assets/img/portfolio/uberOrder.png", "assets/img/portfolio/uberHome.png"],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/airSpot.png",
    title: "NotAirbnb",
    text: [
      "NotAirbnb is a solo project made using a React/Redux JS front-end and a Express JS back-end.",
      "This Airbnb clone allows users to create an account, search for listings, book listings, and leave reviews. NotAirbnb utlizes Google Maps API to display listings on a map.",
    ],
    socials: [],
    url: "https://not-airbnb-sqh8.onrender.com/",
    git: "https://github.com/wpcamp/not-airbnb-clone",
    date: "July 2023",
    category: "Solo Project",
    bigImage: "assets/img/portfolio/airHome.png",
    images: ["assets/img/portfolio/airSpot.png", "assets/img/portfolio/airRev.png"],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Full Stack Projects"}
              />
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="coinClone"
                    data-category="Solo Project"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/thumbs/openWallet.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="VancouberEats"
                    data-category="Group Project"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/thumbs/uberEats.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="NotAirbnb"
                    data-category="Solo Project"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/thumbs/notAirbnb.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
