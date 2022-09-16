import React, { useContext, useId } from "react";
import ApplicantCard from "../Components/ApplicantCard";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import heroImage from "../Assets/hero-image.png";
import FeatureCard from "../Components/FeatureCard";

type Props = {};

const Home = (props: Props) => {
  const id = useId();
  return (
    <div className="">
      <div className="flex justify-between flex-wrap md:mt-16 mt-6">
        <div className="mt-4">
          <div className="py-2  flex flex-col flex-wrap justify-between gap-12">
            <div>
              <h1 className="text-6xl font-bold text-white">Welcome to </h1>
              <h1 className="text-6xl font-bold text-white">
                My<span className="text-blue">Jobs</span>
              </h1>
            </div>
            <Button
              label="Get Started"
              className="md:max-w-max px-5 font-semibold rounded-md"
            />
          </div>
        </div>
        <img src={heroImage} className="w-full md:w-[522px]" />
      </div>
      <div className="md:mt-20 mt-10">
        <h3 className="text-22">Why us</h3>
        <div className="flex gap-10 flex-col md:flex-row mt-8">
          <FeatureCard
            title="Get More Visibility"
            subTitle="
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque voluptate adipisci earum magni ipsa esse facilis autem sequi enim quod?"
          />
          <FeatureCard
            title="Organize Your Candidates"
            subTitle="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eaque voluptate adipisci earum magni ipsa esse facilis autem sequi enim quod?"
          />
          <FeatureCard
            title="Verify Their Abilities"
            subTitle="
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eaque voluptate adipisci earum magni ipsa esse facilis autem sequi enim quod?"
          />
        </div>
      </div>

      <div className="md:mt-20 mt-10">
        <h3 className="text-22">Companies Who Trust Us</h3>
        <div className="flex flex-wrap gap-10 py-6 justify-center">
          {[
            "goldline",
            "ideaa",
            "kanba",
            "lighting",
            "solaytic",
            "velocity",
            "goldline",
            "ideaa",
            "kanba",
          ].map((img, index) => (
            <img
              key={index + id}
              src={require(`../Assets/companies/${img}.png`)}
              className="w-auto h-16 md:pr-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
