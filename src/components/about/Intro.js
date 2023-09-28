import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/intro/backgroundPic.jpeg" alt="image" />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Will Campbell</h3>
        <span>Full Stack Software Engineer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          I'm a full stack engineer with a degree in Environmental Science and Economics from Colby College.
          I was born in NYC, grew up in Norwich, Vermont and have also lived in Cambridge, England and Salamanca, Spain.
          In 2023, after graduating from college and finishing 6 months of backpacking across Europe and Asia, I pursued my passion for software engineering by enrolling in a full-time, full stack bootcamp at App Academy.
          During my time there, I honed my technical skills and gained significant experience in JavaScript, React, Redux, Python, Flask, PostgreSQL, Express, Node.js, CSS, HTML, and other technologies.
          Currently, I'm actively self-learning Solidity.
          In my free time I love long-distance hiking, exploring new cuisines, playing squash, bocce, skiing, and listening to podcasts.
          Welcome to my page!
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>01.07.1990</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>32</span>
              </li> */}
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span> 948 TurnpikeRd, Norwich, VT</span>
              </li> */}
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:wpcampbell1@gmail.com"
                  >
                    wpcampbell1@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+1 802 359 3222"
                  >
                    +1 802 359 3222
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Github:
                </span>
                <span><a
                  className="text-[#767676] transition-all duration-300 hover:text-black"
                  href="https://github.com/wpcamp/"
                >wpcamp</a></span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  LinkedIn:
                </span>
                <span><a
                  className="text-[#767676] transition-all duration-300 hover:text-black"
                  href="https://www.linkedin.com/in/will-campbell22/"
                >will-campbell22</a></span>
              </li>
              {/* <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  wellfound:
                </span>
                <span>TBD</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/campbell.pdf" download>
          <span>Download Resume</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
