import Navbar from "../app/layout/Navbar";
import Hero from "../app/sections/Hero";
import Problem from "../app/sections/Problem";
import Solution from "../app/sections/Solution";
import HowItWorks from "../app/sections/HowItWorks";
import RiseStaff from "../app/sections/RiseStaff";
import Library from "../app/sections/Library";
import Roles from "../app/sections/Roles";
import CEO from "../app/sections/CEO";
import CTA from "../app/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <RiseStaff />
      <Library />
      <Roles />
      <CEO />
      <CTA />
    </>
  );
}
