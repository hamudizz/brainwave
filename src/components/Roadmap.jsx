import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import CompanyLogos from "./CompanyLogos";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading title="Main Features"  />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    {/*<Tagline>{item.date}</Tagline>*/}

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        {/*<Button href="/roadmap">Our roadmap</Button>*/}
      </div>

      {/* Subtle Contacts Block */}
      <div className="mt-16 mb-10 px-8 py-10 rounded-2xl shadow-lg max-w-10xl mx-auto border border-n-4/30 backdrop-blur-sm" id="contact-us">
        <h3 className="h3 mb-8 text-center text-n-1">Contact Us</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-n-4">
          <li className="flex items-center gap-3">
            <span className="font-semibold text-n-1 w-24">Email:</span>
            <a href="mailto:Gobezacademy5@gmail.com" className="text-n-14 hover:underline flex items-center gap-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm8 8l8-8H4l8 8zm0 0l8 8H4l8-8z" fill="currentColor" /></svg>
              Gobezacademy5@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold text-n-1 w-24">Phone:</span>
            <a href="tel:+251990909033" className="text-n-14 hover:underline flex items-center gap-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C7.61 22 2 16.39 2 9.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="currentColor" /></svg>
              +251 990 909033
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold text-n-1 w-24">Telegram:</span>
            <a href="https://t.me/Gobezacademyapp" target="_blank" rel="noopener noreferrer" className="text-n-14 hover:underline flex items-center gap-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9.5 16.5l-1.5 4.5 6.5-2.5 7.5-15-22 9 4.5 1.5 13-8.5-8.5 13z" fill="currentColor" /></svg>
              @Gobezacademyapp
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold text-n-1 w-24">WhatsApp:</span>
            <a href="https://wa.me/251990909033" target="_blank" rel="noopener noreferrer" className="text-n-14 hover:underline flex items-center gap-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.272-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.075-.124-.272-.198-.57-.347z" fill="currentColor" /></svg>
              +251 990 909033
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className="font-semibold text-n-1 w-24">Address:</span>
            <span className="text-n-14">Bethel, Addis Ababa, Ethiopia</span>
          </li>
        </ul>
      </div>

      <CompanyLogos className=" relative z-10 mt-20 lg:block md-20" />
    
    </div>
  </Section>
);

export default Roadmap;
