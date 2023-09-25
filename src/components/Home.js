import SectionContainer from "./SectionContainer";
const socialIcon = [
  {
    id: 1,
    iconName: "icon-github-squared",
    link: "https://github.com/wpcamp",
  },
  // {
  //   id: 2,
  //   iconName: "icon-angellist",
  //   link: "https://twitter.com/",
  // },
  {
    id: 2,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/will-campbell22/",
  },
  {
    id: 3,
    iconName: "icon-mail-squared",
    link: "mailto:wpcampbell1@gmail.com",
  },
  
  
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                // data-img-url="assets/img/slider/1.jpg"
                data-img-url='assets/img/logo/headshot.PNG'
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Will <span>Campbell</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                Full stack engineer interested in environmental science and economics. 
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
