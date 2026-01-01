"use client";
import { TimeLineType, WorksText, WorkType } from "@/types";
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
      contentStyle={{
        background: "rgb(0, 0, 0)",
        color: "#ffffff",
        border: "4px solid #ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #ffffff" }}
      date={work.date}
      iconStyle={{
        background: "#ffffff",
        boxShadow: "none",
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={urlFor(work.image).url()}
            alt="work image"
            width={80}
            height={80}
            className="h-auto w-[25px] custom-lg-2:w-[38px] object-contain"
          />
        </div>
      }
    >
      {work.timeLineText.map((text: TimeLineType) => (
        <div className="break-words" key={text._key}>
          <h1 className="text-h4 lg:text-h2 font-bold text-tertiary">
            {text.title}
          </h1>
          <h4 className="text-h5 lg:text-h4 pb-3">{text.position}</h4>
          <h4 className="text-p">{text.location}</h4>
          <p className="text-p">{text.description}</p>
        </div>
      ))}
    </VerticalTimelineElement>
  );
}

function Work({ workText, work }: { workText: WorksText[]; work: WorkType[] }) {
  return (
    <div
      id="work"
      className="bg-gradient-to-b from-secondary via-black outerContainer"
    >
      <div className="container">
        {workText.map((workText) => (
          <ComponentText key={workText._id} textData={workText.workText} />
        ))}
        <VerticalTimeline className="!w-full" lineColor={"#4F46E5"}>
          {work.map((eachWork) => (
            <VerticalTimeLineFunction key={eachWork._id} work={eachWork} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
