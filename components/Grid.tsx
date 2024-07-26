import React from 'react'
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from '@/data/index'

const Grid = () => {
  return (
    <section id="About">
      <BentoGrid>{gridItems.map((item) => (
        <BentoGridItem
          id={item.id}
          title={item.title}
          description={item.description}
          key={item.id}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          />
))}</BentoGrid>
    </section>
  )
}

export default Grid