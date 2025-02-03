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
import ComponentText from "../ComponentText/ComponentText";

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
          width={100}
          height={100}
          className="rounded-full w-full h-full object-center transform scale-90"
        />
      }
    >
      {work.timeLineText.map((text: TimeLineType) => (
        <div className="max-w-80 break-words" key={text._key}>
          <h1 className="text-h4 lg:text-h2 font-bold">{text.title}</h1>
          <h4 className="text-h5 lg:text-h4 pb-3">{text.position}</h4>
          <h4 className="text-p">{text.location}</h4>
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
          <ComponentText key={workText._id} textData={workText.workText} />
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
