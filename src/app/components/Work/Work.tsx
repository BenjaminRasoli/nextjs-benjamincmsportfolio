"use client";
import { TimeLineType, WorksText, WorkType } from "@/types";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.query";

function VerticalTimeLineFunction({ work }: { work: WorkType }) {
  return (
    <VerticalTimelineElement
      key={work._id}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgb(0, 0, 0)",
        color: "#ffffff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
      date={work.date}
      iconStyle={{
        background: "#4F46E5",
      }}
      icon={
        <Image
          src={urlFor(work.image).url()}
          alt="work image"
          width={55}
          height={40}
          className="rounded-[1.8rem] w-fit"
        />
      }
    >
      {work.timeLineText.map((text: TimeLineType) => (
        <div className="max-w-80 break-words" key={text._key}>
          <h1 className="vertical-timeline-element-title text-h1">
            {text.title}
          </h1>
          <h4 className="vertical-timeline-element-subtitle text-h4 pt-1 ">
            {text.location}
          </h4>
          <p className="text-p">{text.description}</p>
        </div>
      ))}
    </VerticalTimelineElement>
  );
}

function Work({ workText, work }: { workText: WorksText[]; work: WorkType[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <div
      id="work"
      className="bg-gradient-to-b from-black to-secondary pt-16 pb-16 scroll-m-20 px-5"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px]">
        {workText.map((workText) => (
          <div className="max-w-3xl pb-10" key={workText._id}>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              ref={ref}
              className="text-p text-white"
            >
              {workText.workText.smallText}
            </motion.p>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              ref={ref}
              className="text-h1 text-tertiary pb-6"
            >
              {workText.workText.bigText}
            </motion.h1>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              ref={ref}
              className="text-p text-white"
            >
              {workText.workText.longText}
            </motion.p>
          </div>
        ))}
        <VerticalTimeline lineColor={"#4F46E5"}>
          {work.map((eachWork) => (
            <VerticalTimeLineFunction key={eachWork._id} work={eachWork} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
