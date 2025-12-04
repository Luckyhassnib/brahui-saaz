"use client";
import React, { useEffect, useEffectEvent } from "react";
import HeadingBody from "../layout/HeadingBody";
import { Suspense } from "react";
import MainLoader from "../layout/MainLoader";
import { useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import Footer from "../layout/Footer";
import { useInView } from "react-intersection-observer";
const Slide = React.lazy(() => import("../slides/Slide"));
const GenresSlide = React.lazy(() => import("../slides/GenresSlide"));
const NewArtistsSlide = React.lazy(() => import("../slides/NewArtistsSlide"));
const WeekSongsSlice = React.lazy(() => import("../slides/WeekSongsSlide"));

const MainPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {},
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const controls = useAnimationControls();
  const [ref, inView] = useInView({ triggerOnce: true }); // Amount 0.5 means 50% must be visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("Hello");
    } else {
      // controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        animate={controls}
        variants={containerVariants}
        initial="hidden"
        ref={ref}
        className={`flex flex-col gap-y-8 px-9  w-full`}
      >
        <motion.div className={`section-01 `} variants={itemVariants}>
          <HeadingBody link={"/albums"} title={"Artists"} />
          <Suspense fallback={<MainLoader />}>
            <Slide type="artist" />
          </Suspense>
        </motion.div>
        <motion.div variants={itemVariants} className={`section-02 `}>
          <HeadingBody link={"/albums"} title={"New Release"} />
          <Suspense fallback={<MainLoader />}>
            <Slide />
          </Suspense>
        </motion.div>
        <motion.div variants={itemVariants} className={`section-03 `}>
          <HeadingBody link={"/albums"} title={"Top Albums"} />
          <Suspense fallback={<MainLoader />}>
            <Slide />
          </Suspense>
        </motion.div>
        <motion.div variants={itemVariants} className={`section-04`}>
          <div className="w-full grid grid-cols-12 gap-x-4  max-w-7xl mx-auto">
            <Suspense fallback={<MainLoader />}>
              <GenresSlide cols={"col-span-3"} />
            </Suspense>

            <Suspense fallback={<MainLoader />}>
              <WeekSongsSlice cols={"col-span-6"} />
            </Suspense>

            <Suspense fallback={<MainLoader />}>
              <NewArtistsSlide cols={"col-span-3"} />
            </Suspense>
          </div>

          <div>
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MainPage;
