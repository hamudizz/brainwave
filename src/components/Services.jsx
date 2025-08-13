import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import YouTube from "react-youtube";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Smart Learning."
          text="Local Impact. Real Results."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smart Learning"
                height={730}
                src={service2}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Digital Learning</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Boosts Academic Performance Learn Anytime, Anywhere Supports Parents & Teachers.
              </p>
              {/*<ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>*/}
            </div>

{/*            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
*/}          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service1}
                  className="h-full w-full object-contain"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              {/*<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Parent Portal</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Get reports on course progress of your child and realtime Smart Testing Results any time 
                </p>
              </div>
              <PhotoChatMessage />
              */}

              
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">All Subjects and All Grades</h4>
                <p className="body-2 mb-[2rem] text-n-3">

Ethiopia launches its first all-in-one digital learning platform, revolutionizing education from Pre-K to High School. This national initiative breaks down barriers by providing equitable access to high-quality, curriculum-aligned resources, including core subjects like Math, Science, English, Amharic, and Social Studies, along with digital literacy and critical thinking tools. Designed for diverse learners, it features interactive lessons, multimedia content, adaptive assessments, and teacher support tools. Built for accessibility, it works on low-cost devices and offers offline functionality, ensuring learning continues even with limited internet.                </p>

                {/*<ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>*/}
              </div>

             
            </div>
          </div>

          <Gradient />
        </div>
      </div>
      <div className="container mt-20">
        <Heading
          title="Watch How It Works"
          text="See how Gobez Academy Platform can transform student's learning experience."
        />
        <div className="flex justify-center mt-10" >
          <YouTube
            videoId="8D9NwmE3RxI"
            opts={{
              height: '390',
              width: '100%',
              playerVars: {
                autoplay: 1,
                loop: 1,
                playlist: '8D9NwmE3RxI',
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
                cc_load_policy: 0,
                iv_load_policy: 3,
                disablekb: 1,
                enablejsapi: 1,
                controls: 0,
              },
            }}
            className="w-full max-w-3xl"
          />
        </div>
      </div>

    </Section>
  );
};

export default Services;
