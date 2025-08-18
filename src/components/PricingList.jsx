import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-2 [&>h4]:last:text-color-2 [&>h4]:odd:text-color-2"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          {/*<p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>*/}

          {/*<div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">ETB&nbsp;</div>
                <div className="text-[2.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>*/}

          <Button
            className="w-full mb-6"
            href={item.price ? "https://gobezacademy.com/parent-subscription" : "https://gobezacademy.com/student-registration/new"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "get Started"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
