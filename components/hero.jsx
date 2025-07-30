import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
  
      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled"); 
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);
  
  return (
    <section className="w-full pt-36 md:pt-48 pb-10 ">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Your AI Career Coach For
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with professional guidance, interview prep,
            Advance AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <SignedOut>
            <SignUpButton>
              <Button variant={"outline"}>Get Started</Button>
            </SignUpButton>
          </SignedOut>
          
          <Link href="https://www.linkedin.com/in/vinitawate/">
            <Button size="1g" className="px-7 h-9">
              LinkedIn
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner.png"}
              width={1280}
              height={720}
              alt="Banner VinZie"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
            <br />
            <p className="text-xs font-bold md:text-1xl lg:text-2xl xl:text-3xl gradient-title">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
