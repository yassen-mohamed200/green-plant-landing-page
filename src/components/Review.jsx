import React, { useEffect, useRef } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import person1 from "../assets/review-1.jpg";
import person2 from "../assets/review-2.jpg";
import person3 from "../assets/review-3.jpg";
import person4 from "../assets/review-4.jpg";
import person5 from "../assets/review-5.jpg";
import plant from '../assets/leaf-3.png'

function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Designer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
      img: person1,
    },
    {
      id: 2,
      name: "Emily Smith",
      role: "Developer",
      text: "Amet consectetur adipisicing elit. Ullam, quos. Dolorem cupiditate dolores vitae sapiente laborum at excepturi libero.",
      img: person2,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Customer",
      text: "Accusamus doloremque dolor asperiores ullam iste, eos architecto, odit explicabo quibusdam.",
      img: person3,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Marketer",
      text: "Repellat provident, consequatur voluptate ipsa velit, nobis perferendis ex temporibus numquam.",
      img: person4,
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Manager",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum modi totam repellendus.",
      img: person5,
    },
  ];

  // 📌 المرجع الخاص بالـ container عشان نتحكم في السكروول
  const scrollRef = useRef(null);

  // 📜 Auto Scroll كل 4 ثواني
  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      // عرض الكارت الواحد (نسبة تقريبة)
      const cardWidth = container.children[0].offsetWidth + 24; // 24 = gap
      scrollAmount += cardWidth;

      // لو وصل للنهاية → ارجع للبداية
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="review" className="py-25 bg-[#0d3b2e] text-white relative overflow-x-hidden">
          <div className="absolute top-[-2px] left-0 w-40 sm:w-36 lg:w-50">
          <img src={plant} alt="plant..." className="w-full h-auto" />
          </div>
      <div className="container mx-auto px-6 ">
        {/* 🟡 العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
            Customer Reviews
          </h2>
          <p className="text-slate-300 lobster-regular text-lg">
            See what our happy customers say
          </p>
          <div className="w-40 h-[1.7px] bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* 🟢 الكروت (Scrollable Horizontally) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] bg-green-800 rounded-xl p-6 flex flex-col justify-between
              relative  shadow-md snap-start hover:scale-105 duration-300"
            >
              <p className="text-slate-200 italic mb-6">{review.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
                />
                <div>
                  <h3 className="text-yellow-500 font-semibold text-lg">
                    {review.name}
                  </h3>
                  <p className="text-slate-300 text-sm">{review.role}</p>
                </div>
              </div>
              <RiDoubleQuotesR className="absolute bottom-4 right-4 text-yellow-500 text-3xl opacity-70" />
            </div>
          ))}
        </div>

        {/* ⚪ مؤشرات (نقاط) */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-800 rounded-full"></span>
          <span className="w-3 h-3 bg-green-800 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;

