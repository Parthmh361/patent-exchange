'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    {
      image: "https://img.indiafilings.com/learn/wp-content/uploads/2017/05/12010531/Section-80-RRB-Deduction.jpg",
      title: "Innovative Solutions",
      description: "Explore the world of patents and innovation."
    },
    {
      image: "https://media.istockphoto.com/id/1422564173/photo/man-adding-a-block-showing-the-words-intellectual-property-on-top-of-other-wooden-block-with.jpg?s=612x612&w=0&k=20&c=25v9VY2RgauWTekhKoi9EWZAKBHYJS8Htcb_J4ugKHs=",
      title: "Protect Your Ideas",
      description: "Secure your intellectual property with us."
    },
    {
      image: "https://media.istockphoto.com/id/1154395726/photo/trademark-registration-concept.jpg?s=612x612&w=0&k=20&c=lMNpvkTL3T-3HRZ07MfujzVECVUb87w96kUwqqox34k=",
      title: "Marketplace for Patents",
      description: "Buy and sell patents with ease."
    }
  ]
  

const useSlideshow = (length: number, interval: number = 5000) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % length)
    }, interval)
    return () => clearInterval(timer)
  }, [length, interval])

  const next = () => setCurrent((prevCurrent) => (prevCurrent + 1) % length)
  const prev = () => setCurrent((prevCurrent) => (prevCurrent - 1 + length) % length)

  return { current, next, prev }
}

export default function HeroSlideshow() {
  const { current, next, prev } = useSlideshow(slides.length)

  return (
    <Card className="w-full overflow-hidden">
      <div className="relative h-[400px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-4xl font-bold mb-4 ">{slide.title}</h2>
              <p className="text-xl text-yellow-500">{slide.description}</p>
            </div>
          </div>
        ))}
        {/* <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button> */}
      </div>
    </Card>
  )
}