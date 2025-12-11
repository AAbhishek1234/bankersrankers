

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "SBI PO — Selected",
    feedback:
      "Bankers Rankers Academy transformed my preparation journey. The structured approach and regular mock tests helped me crack SBI PO in my first attempt.",
  },
  {
    name: "Rahul Verma",
    role: "IBPS Clerk — Selected",
    feedback:
      "I struggled with quantitative aptitude, but the shortcut tricks taught here made all the difference. The study material is crystal clear and highly effective.",
  },
  {
    name: "Anjali Patel",
    role: "RBI Grade B — Selected",
    feedback:
      "The RBI Grade B course is exceptional. ESI & FM were covered in-depth with excellent integration of current affairs.",
  },
  {
    name: "Vikram Singh",
    role: "IBPS PO — Selected",
    feedback:
      "Mentors monitored my progress and provided personalized guidance. Cleared IBPS PO with a great score thanks to them!",
  },
  {
    name: "Sneha Reddy",
    role: "SBI Clerk — Selected",
    feedback:
      "Online classes were as effective as offline. The interview preparation module boosted my confidence massively.",
  },
];

export default function TestimonialSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: !isMobile,
    speed: 700,
    autoplaySpeed: 3500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-[#f3f7ff] overflow-hidden">
      {/* Fix container overflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d1b4c]">
          What Our <span className="text-blue-700">Students Say</span>
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-12">
          Hear from candidates who achieved their banking career dreams
        </p>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="px-2 sm:px-4" // LESS PADDING = NO HORIZONTAL SCROLL
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.12}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
              >
                <div className="bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all p-6 sm:p-8 min-h-[320px] flex flex-col">
                  
                  {/* Quote Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
                    <Quote className="w-7 h-7" />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                    "{t.feedback}"
                  </p>

                  {/* Name + Badge */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-yellow-400 text-white flex items-center justify-center font-bold rounded-full">
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {t.name}
                      </h4>
                      <p className="text-blue-700 text-sm font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
