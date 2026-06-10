import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Testimonials() {
  const reviews = [
    {
      name: "John Doe",
      text: "Amazing work and professional communication.",
    },
    {
      name: "Alex Smith",
      text: "Delivered the project before deadline.",
    },
    {
      name: "David",
      text: "Highly recommended React developer.",
    },
  ];

  return (
    <section className="mt-28">
      <h2 className="text-4xl font-bold text-center mb-10">
        Client Reviews
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-4xl mx-auto p-10 border rounded-3xl text-center">
              <p className="text-xl italic">
                "{review.text}"
              </p>

              <h3 className="mt-6 text-2xl font-bold text-blue-400">
                {review.name}
              </h3>

              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;