import { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

export function Services() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const services: Service[] = [
        {
            id: 1,
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#DF6951]">
                    <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM15.75 12C15.75 12.5967 15.5741 13.1816 15.2444 13.6875C14.9148 14.1934 14.4462 14.5993 13.8981 14.8582C13.35 15.117 12.7426 15.2183 12.1521 15.1505C11.5617 15.0827 11.0073 14.8485 10.5606 14.4749L7.25248 17.7825L6.2175 16.7475L9.52499 13.44C9.15138 12.9932 8.91725 12.4388 8.84945 11.8484C8.78164 11.2579 8.88295 10.6505 9.14181 10.1024C9.40067 9.55435 9.80663 9.08573 10.3125 8.75607C10.8184 8.42641 11.4033 8.25056 12 8.25056C12.5967 8.25056 13.1816 8.42641 13.6875 8.75607C14.1934 9.08573 14.5993 9.55435 14.8582 10.1024C15.117 10.6505 15.2184 11.2579 15.1505 11.8484C15.0827 12.4388 14.8486 12.9932 14.475 13.44C14.7225 13.1925 14.9 12.8875 14.9925 12.5475H12.75V11.0475H14.9925C14.9 10.7075 14.7225 10.4025 14.475 10.155C14.0734 9.75338 13.5481 9.50274 12.9863 9.44162C12.4244 9.3805 11.8578 9.51241 11.385 9.81721C10.9121 10.122 10.5614 10.5815 10.3901 11.121C10.2188 11.6605 10.2373 12.2442 10.443 12.7712C10.6486 13.2981 11.0297 13.7347 11.5213 14.0079C12.013 14.2811 12.5843 14.3751 13.1334 14.2738C13.6825 14.1725 14.1751 13.8818 14.5275 13.4475L15.585 14.505C15.0492 15.0409 14.3678 15.4092 13.625 15.5625C14.2954 15.3687 14.8871 14.9708 15.3167 14.4245C15.7463 13.8783 15.9926 13.2116 16.0187 12.5163C16.0448 11.821 15.8493 11.1373 15.4624 10.5616C15.0754 9.98585 14.5171 9.54751 13.8675 9.31247V8.94747C14.2735 9.09931 14.6408 9.33574 14.9451 9.64234C15.2494 9.94894 15.4831 10.3179 15.632 10.725C15.7809 11.1321 15.8414 11.5674 15.8093 12.0005C15.7771 12.4337 15.653 12.8552 15.4451 13.2375C15.6451 12.8525 15.75 12.4275 15.75 12Z" fill="currentColor"/>
                </svg>
            ),
            color: "bg-[#DF6951]/10"
        },
        {
            id: 2,
            title: "Best Flights",
            description: "Engrossed listening. Park gate sell they west hard for the.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#006380]">
                    <path d="M9.5 4.75L9.5 21.25M9.5 4.75C9.5 3.64543 10.3954 2.75 11.5 2.75H17.5C18.6046 2.75 19.5 3.64543 19.5 4.75V21.25M9.5 4.75H4.5C3.39543 4.75 2.5 5.64543 2.5 6.75V19.25C2.5 20.3546 3.39543 21.25 4.5 21.25H9.5M19.5 21.25H14.5M19.5 21.25C20.6046 21.25 21.5 20.3546 21.5 19.25V6.75C21.5 5.64543 20.6046 4.75 19.5 4.75H14.5M14.5 4.75V21.25M14.5 4.75L9.5 4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            color: "bg-[#006380]/10"
        },
        {
            id: 3,
            title: "Local Events",
            description: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#F0BB1F]">
                    <path d="M15 2.25H9C5.27208 2.25 2.25 5.27208 2.25 9V15C2.25 18.7279 5.27208 21.75 9 21.75H15C18.7279 21.75 21.75 18.7279 21.75 15V9C21.75 5.27208 18.7279 2.25 15 2.25ZM20.25 15C20.25 17.8995 17.8995 20.25 15 20.25H9C6.10051 20.25 3.75 17.8995 3.75 15V9C3.75 6.10051 6.10051 3.75 9 3.75H15C17.8995 3.75 20.25 6.10051 20.25 9V15ZM16.8181 8.62123L10.7558 14.6835L7.18188 11.1096L8.24813 10.0433L10.7558 12.5511L15.7519 7.55498L16.8181 8.62123Z" fill="currentColor"/>
                </svg>
            ),
            color: "bg-[#F0BB1F]/10"
        },
        {
            id: 4,
            title: "Customization",
            description: "We deliver outsourced aviation services for military customers.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#006380]">
                    <path d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM15.7803 8.21967C16.0732 8.51256 16.0732 8.98744 15.7803 9.28033L10.5303 14.5303C10.2374 14.8232 9.76256 14.8232 9.46967 14.5303L7.21967 12.2803C6.92678 11.9874 6.92678 11.5126 7.21967 11.2197C7.51256 10.9268 7.98744 10.9268 8.28033 11.2197L10 12.9393L14.7197 8.21967C15.0126 7.92678 15.4874 7.92678 15.7803 8.21967Z" fill="currentColor"/>
                </svg>
            ),
            color: "bg-[#006380]/10"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <p className="text-[#5E6282] font-semibold text-sm tracking-[0.1em] mb-2">CATEGORY</p>
                <h2 className="text-[#14183E] text-4xl font-bold">We Offer Best Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className={`relative p-8 rounded-[28px] ${service.color} transition-all duration-300
                            ${hoveredId === service.id ? 'shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)]' : ''}`}
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: service.id * 0.1 }}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className={`w-16 h-16 rounded-[18px] ${service.color} flex items-center justify-center mb-6`}>
                                {service.icon}
                            </div>
                            <h3 className="text-[#1E1D4C] text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-[#5E6282] text-base leading-relaxed">{service.description}</p>
                        </div>
                        
                        {hoveredId === service.id && (
                            <motion.div 
                                className="absolute -top-2 -right-2 w-4 h-4 bg-[#DF6951] rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}