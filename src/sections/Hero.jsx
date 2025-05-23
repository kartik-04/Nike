import Button from "../components/button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full  
       p-2 flex xl:flex-row
       flex-col justify-center 
       min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 
        flex flex-col justify-center 
        items-start w-full max-xl:padding-x pt-28"
      >
        <p
          className="text-xl
        font-montserrat text-coral-red
        "
        >
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin
          text-8xl max-sm:text-[72px]
          max-sm:leading-[82px]
          font-bold  "
        >
          <span
            className="xl:bg-white
          xl:whitespace-nowrap
          relative z-10 pr-10"
          >
            The new Arrival
          </span>
          <br />
          <span
            className="text-coral-red 
          inline-block mt-3"
          >
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p
          className="font-monteserrat
          text-slate-gray text-lg
          leading-8 mt-6 mb-14
          sm:max-w-sm"
        >
          Discover stylish nike arrivals, quality comfirt, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconURL={arrowRight} />
        <div
          className="flex justify-starts
        items-starts flex-wrap w-full mt-20
        gap-16"
        >
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p
                className="text-4xl
              font-palanquin font-bold"
              >
                {stats.value}
              </p>
              <p
                className="leading-7
              font-montserrat text-slate-gray"
              >
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1
      flex justify-center items-center
      xl:min-h-screen 
      max-xl:py-40 bg-primary bg-hero
      bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain 
        z-10 relative"
        />
        <div
          className="flex
        sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%]
        max-sm:px-6"
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
