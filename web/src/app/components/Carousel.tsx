"use client"

import { LaunchData } from "global"
import React from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import RocketCard from "./RocketCard"

const Carousel = (props: LaunchData[]) => {
  const data = Object.values(props)

  return (
    <div className="">
      <Swiper navigation loop autoplay modules={[Navigation]} className="mySwiper h-[500px]">
        {data.map((launch) => (
          <SwiperSlide className="!flex justify-center" key={`${launch.date_unix}_${launch.name}_${launch.rocket}`}>
            <RocketCard {...launch} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
