"use client";

import { useState } from "react";
import CourseCard from "@/components/shared/CourseCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { courses, courseTabs } from "@/constants/courses";

export default function DiscoverCourses() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className="pt-16 lg:pt-[72px]">
      <Container>
        <SectionTitle
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="max-w-[588px]"
        />

        <div className="mt-10 flex flex-col items-center gap-3 lg:mt-[42px] lg:gap-[21px]">
          {courseTabs.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {row.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-3xl px-4 py-3 text-body-m leading-[1.2] font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-lime text-gray-950"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
              {rowIndex === courseTabs.length - 1 && (
                <button
                  type="button"
                  className="py-3 text-body-m leading-[1.2] font-medium text-primary"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid justify-items-center gap-10 md:grid-cols-2 lg:mt-[77px] xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} title={course.title} image={course.image} />
          ))}
        </div>
      </Container>
    </section>
  );
}
