import Button from "../components/button";

const Subscribe = () => {
  return (
    <section
      className="max-cotainer 
    flex justify-between items-center
    max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3
        className="text-4xl leading-[68px]
       lg:max-w-md font-palanquin
       font-bold "
      >
        Sign Up From
        <span className="text-coral-red">Updates </span> & NewsLetter
      </h3>
      <div
        className="lg:max-w-[40%]
      w-full flex item-center max-sm:flex-col gap-5
      p-2.5 sm:border sm:border-slate
      rounded-full"
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div
          className="flex 
        max-sm:justify-end items-center
        max-sm:w-full"
        >
          <Button label="Sign Up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
