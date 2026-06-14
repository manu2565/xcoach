// "use client";

// import { useState } from "react";
// import { Play } from "lucide-react";

// const videos = [
//   {
//     id: 1,
//     title: "Corporate Presentation",
//     thumbnail:
//       "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
//     video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//   },
//   {
//     id: 2,
//     title: "Manufacturing Process",
//     thumbnail:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
//     video: "https://www.youtube.com/embed/ysz5S6PUM-U",
//   },
//   {
//     id: 3,
//     title: "Factory Tour",
//     thumbnail:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
//     video: "https://www.youtube.com/embed/jNQXAC9IVRw",
//   },
//   {
//     id: 4,
//     title: "Product Showcase",
//     thumbnail:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
//     video: "https://www.youtube.com/embed/tgbNymZ7vqY",
//   },
// ];

// export default function VideoSliderSection() {
//   const [activeVideo, setActiveVideo] = useState(videos[0]);

//   return (
//     <section className="relative overflow-hidden bg-white py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <span className="mb-3 inline-block rounded-full border border-gray-200 px-4 py-2 text-sm font-medium">
//             Video Gallery
//           </span>

//           <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
//             Explore Our Visual Stories
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             Watch our latest videos, product showcases, company insights,
//             manufacturing processes and success stories.
//           </p>
//         </div>

//         {/* Main Layout */}
//         <div className="grid gap-8 lg:grid-cols-[1.8fr_0.8fr]">

//           {/* Featured Video */}
//           <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
//             <div className="aspect-video">
//               <iframe
//                 src={activeVideo.video}
//                 title={activeVideo.title}
//                 className="h-full w-full"
//                 allowFullScreen
//               />
//             </div>

//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-gray-900">
//                 {activeVideo.title}
//               </h3>
//             </div>
//           </div>

//           {/* Video List */}
//           <div className="space-y-4">
//             {videos.map((video) => (
//               <button
//                 key={video.id}
//                 onClick={() => setActiveVideo(video)}
//                 className={`group flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${
//                   activeVideo.id === video.id
//                     ? "border-black bg-black text-white"
//                     : "border-gray-200 bg-white hover:shadow-lg"
//                 }`}
//               >
//                 <div className="relative h-24 w-36 overflow-hidden rounded-xl">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                     <Play size={20} fill="white" color="white" />
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold">
//                     {video.title}
//                   </h4>

//                   <p
//                     className={`mt-1 text-sm ${
//                       activeVideo.id === video.id
//                         ? "text-white/80"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     Watch Video
//                   </p>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";

const videos = [
    {
        id: 1,
        title: "Corporate Presentation",
        thumbnail:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 2,
        title: "Manufacturing Process",
        thumbnail:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
        id: 3,
        title: "Factory Tour",
        thumbnail:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
        video: "https://www.youtube.com/embed/jNQXAC9IVRw",
    },
    {
        id: 4,
        title: "Product Showcase",
        thumbnail:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
];

export default function VideoSliderSection() {
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    // Auto-slide only on mobile & tablet
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                startAutoSlide();
            }
        };

        let interval;

        const startAutoSlide = () => {
            interval = setInterval(() => {
                setActiveVideo((prev) => {
                    const currentIndex = videos.findIndex(
                        (video) => video.id === prev.id
                    );

                    const nextIndex = (currentIndex + 1) % videos.length;
                    return videos[nextIndex];
                });
            }, 5000);
        };

        if (window.innerWidth < 1024) {
            startAutoSlide();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
            {/* Background Effects */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
                        Video Gallery
                    </span>

                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Explore Our Visual Stories
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
                        Watch our latest videos, product showcases, manufacturing
                        processes, company insights and success stories.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid gap-8 lg:grid-cols-[1.8fr_0.8fr]">
                    {/* Featured Video */}
                    <div className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                        <div className="aspect-video">
                            <iframe
                                key={activeVideo.id}
                                src={`${activeVideo.video}?rel=0`}
                                title={activeVideo.title}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <div className="border-t border-gray-100 p-6">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {activeVideo.title}
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Click any video thumbnail to watch instantly.
                            </p>
                        </div>
                    </div>

                    {/* Desktop Sidebar / Mobile Horizontal Slider */}
                    <div className="flex gap-4 overflow-x-auto pb-2 lg:block lg:space-y-4 lg:overflow-visible">
                        {videos.map((video) => (
                            <button
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                className={`group flex min-w-[290px] items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 lg:min-w-full ${activeVideo.id === video.id
                                    ? "scale-[1.02] border-black bg-black text-white shadow-xl"
                                    : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-xl"
                                    }`}
                            >
                                <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-xl">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                                            <Play
                                                size={16}
                                                fill="currentColor"
                                                className="ml-0.5 text-black"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold">{video.title}</h4>

                                    <p
                                        className={`mt-1 text-sm ${activeVideo.id === video.id
                                            ? "text-white/70"
                                            : "text-gray-500"
                                            }`}
                                    >
                                        Watch Video
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Dots */}
                <div className="mt-8 flex justify-center gap-2 lg:hidden">
                    {videos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeVideo.id === video.id
                                ? "w-8 bg-black"
                                : "w-2.5 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}