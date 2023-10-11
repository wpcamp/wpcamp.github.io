const partnersDark = [
  { id: 1, image: "assets/img/partners/other/react.svg", name: "React" },
  { id: 2, image: "assets/img/partners/other/redux-original.svg", name: "Redux" },
  { id: 3, image: "assets/img/partners/other/javascript-js.svg", name: "JavaScript" },
  { id: 4, image: "assets/img/partners/other/github.png", name: "GitHub" },
  { id: 5, image: "assets/img/partners/other/python.svg", name: "Python" },
  { id: 6, image: "assets/img/partners/other/flask.png", name: "Flask" },
  { id: 7, image: "assets/img/partners/other/express-original.svg" },
  { id: 8, image: "assets/img/partners/other/node-js.svg", name: "Node.js" },
  { id: 9, image: "assets/img/partners/other/npm.svg", name: "npm" },
  { id: 10, image: "assets/img/partners/other/sqlite.svg", name: "SQLite" },
  { id: 11, image: "assets/img/partners/other/postgresql.svg", name: "PostgreSQL" },
  { id: 12, image: "assets/img/partners/other/aws.svg", name: "AWS" },
  { id: 13, image: "assets/img/partners/other/git.svg", name: "Git" },
  { id: 14, image: "assets/img/partners/other/postman.svg", name: "Postman" },
  { id: 15, image: "assets/img/partners/other/render.png", name: "Render" },
  { id: 16, image: "assets/img/partners/other/googlemaps.svg", name: "Google Maps API" },
  { id: 16, image: "assets/img/partners/other/css3.svg", name: "CSS3" },
  { id: 17, image: "assets/img/partners/other/html5.svg", name: "HTML5" },
  { id: 18, image: "assets/img/partners/other/json.svg", name: "JSON" }
];

const Partners = () => {

  const handleMouseOver = (event, name) => {
    // Show tooltip on hover
    event.target.setAttribute('data-tooltip', name);
  };

  const handleMouseOut = (event) => {
    // Hide tooltip on mouse out
    event.target.removeAttribute('data-tooltip');
  };

  return (
    <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
      <div className="container">
        {/* <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]"> */}
        {/* <h3 className="text-[20px] font-bold">Proficient in the following technologies:</h3> */}
        {/* </div> */}
        <div className="partners_inner w-full h-auto clear-both float-left">
          <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]">
            {partnersDark.map((partner) => (
              <li
                key={partner.id}
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] leading-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden"

              >
                <div className="list_inner w-full h-full clear-both float-left opacity-50 transition-all duration-300 hover:opacity-100">
                  <img
                    className="max-w-[50%] max-h-[100px] inline-block"
                    src={partner.image}
                    alt={partner.name}
                    onMouseOver={(e) => handleMouseOver(e, partner.name)}
                    onMouseOut={handleMouseOut}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Partners;
