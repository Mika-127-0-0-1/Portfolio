import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Headder from "@/components/Headder";
import Hero from "@/components/Hero";
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProject } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchExperiences } from '@/utils/fetchExperiences';
import Head from 'next/head';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, socials, projects, skills, experiences}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thumb-rounded scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#bd4aff]/80">
      {/* Headder */}
      <Headder 
      socials={socials}
      />
  
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero 
        pageInfo={pageInfo}
        />
      </section>
  
      {/* Adout */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
  
      {/* Experiance */}
      <section id="workexperience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
  
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
  
      {/* Contacts */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='flex items-center justify-center sticky w-full bottom-5'>
          <div className='h-10 w-10 rounded-full hover:bg-[#bd4aff] z-20'>
            <ArrowUpIcon className='filter '/>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      experiences,
      socials,
    },
    // Next.js will attemp to re-generate the page:
    //  -When a request comes in
    //  -At most once every 10 seconds
    revalidate: 100,
  }
}
