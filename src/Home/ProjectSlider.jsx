import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectSlider() {
  const projects = [
    {
      title: "Movie App",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Todo App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Calculator App",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
  ];

  return (
    <section className="mt-28">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ProjectSlider;