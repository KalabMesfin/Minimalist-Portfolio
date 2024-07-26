import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3D-Pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="projects">
        A small selection of {' '}
        <span className="text-purple">recent projects</span>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map((project) => ( 
            <div key={project.id} className="sm:h-[42rem] h-[31rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
              <PinContainer title={project.link} href={project.link}>
                <div  className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[13162d]">
                    <img src="/bg.png" alt="bf-img" />
                  </div>
                  <img
                    src={project.img}
                    title={project.title}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {project.des}
                </p>
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div className="border border-whitr/[0
                      2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center" style={{transform: `translateX(-${5 * index * 2}px)`}}>
                     <img
                       src={icon}
                       alt={icon}
                      className="p-2"
                     />
                    </div>
                  ))}
                  <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
                 </div>
                </div>
              </PinContainer>
              
            </div>
))}
        </div>
      </h1>
    </div>
  )
}

export default RecentProjects