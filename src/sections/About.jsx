import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20 relative top-72" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Gokul </p>
              <p className="grid-subtext">
                With 4 solid years of experience in Web Development & Software
                Development, I have honed my skills as a Frontend Developer,
                working in various MNCs, international multi-million dollar
                companies with diverse work environments creating dynamic,
                interactive and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={500}
                width={500}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "India",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in India and open to remote work worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-headtext">Web development </p>
              <p className="grid-subtext">
                HTML5, Javascript (ES6), Typescript
              </p>
              <p className="grid-headtext mt-5">Styling frameworks </p>
              <p className="grid-subtext">
                CSS3, SASS, Bootstrap5, Infima, Tailwind CSS, Material UI,
                Styled Components, shadcn/ui
              </p>
              <p className="grid-headtext mt-5">Frameworks </p>
              <p className="grid-subtext">
                React.js, Next.js, Angular, Svelte, SvelteKit, Node.js
              </p>
              <p className="grid-headtext mt-5">Libraries </p>
              <p className="grid-subtext">Redux, Express.js, Mongoose, ngRx</p>
              <p className="grid-headtext mt-5">Databases </p>
              <p className="grid-subtext">
                MongoDB, Firebase, SQL, Hygraph, Supabase
              </p>
              <p className="grid-headtext mt-5">Tools/ IDE </p>
              <p className="grid-subtext">
                VS code, NPM, Git, Github, Postman API, MongoDB Atlas,
                Excalidraw, Netlify
              </p>
              <p className="grid-headtext mt-5">Hands-on experience </p>
              <p className="grid-subtext">
                - OAuth, Clerk, Strapi, Stripe, ASP.NET Core
              </p>
              <p className="grid-subtext">
                English (fluent), German (elementary)
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  className="transition ease-in-out delay-300"
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  gokulchandan24@gmail.com
                </p>
              </div>
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                Chennai, Tamil Nadu,India
              </p>
              <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                https://github.com/code-gritt
                https://willowy-sunshine-70af57.netlify.app
                https://www.linkedin.com/in/gokul-va-14a304a5/
              </p>
              <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                (+91) 9442261178
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
