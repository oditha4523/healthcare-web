import { useState } from 'react';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Jennifer Adams',
            role: 'Heart Surgery Patient',
            image: 'JA',
            rating: 5,
            text: "The cardiac team at MediCare saved my life. From the initial diagnosis to post-surgery care, every step was handled with utmost professionalism and compassion. I'm forever grateful.",
            color: 'from-rose-400 to-pink-500',
        },
        {
            id: 2,
            name: 'Michael Thompson',
            role: 'Orthopedic Patient',
            image: 'MT',
            rating: 5,
            text: "After my sports injury, I thought my athletic career was over. Dr. Brown and his team proved me wrong. The rehabilitation program was excellent, and I'm back to playing professionally.",
            color: 'from-blue-400 to-cyan-500',
        },
        {
            id: 3,
            name: 'Sarah Williams',
            role: 'Pediatric Care',
            image: 'SW',
            rating: 5,
            text: "As a mother of three, finding a reliable pediatric care center was crucial. MediCare has been amazing with my children. The doctors are patient, kind, and truly care about their young patients.",
            color: 'from-emerald-400 to-teal-500',
        },
        {
            id: 4,
            name: 'David Chen',
            role: 'Neurology Patient',
            image: 'DC',
            rating: 5,
            text: "The neurology department is exceptional. They used cutting-edge technology to diagnose my condition accurately and created a treatment plan that has significantly improved my quality of life.",
            color: 'from-purple-400 to-violet-500',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        What Our{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Patients Say
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Real stories from real patients who have experienced the quality
                        of care at MediCare.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 ${activeIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''
                                }`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-slate-600 leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                    {testimonial.image}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                                    <p className={`text-sm bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent font-medium`}>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`} />
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6">Trusted by thousands of patients worldwide</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="flex items-center gap-2">
                            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="font-semibold text-slate-600">Healthcare Excellence Award</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span className="font-semibold text-slate-600">HIPAA Certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-semibold text-slate-600">ISO 9001 Certified</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
