import { useState } from 'react';

const Doctors = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const doctors = [
        {
            name: 'Dr. Sarah Mitchell',
            specialty: 'Cardiologist',
            experience: '15+ Years',
            image: 'SM',
            color: 'from-rose-400 to-pink-500',
            socials: { linkedin: '#', twitter: '#' },
        },
        {
            name: 'Dr. James Wilson',
            specialty: 'Neurologist',
            experience: '12+ Years',
            image: 'JW',
            color: 'from-purple-400 to-violet-500',
            socials: { linkedin: '#', twitter: '#' },
        },
        {
            name: 'Dr. Emily Chen',
            specialty: 'Pediatrician',
            experience: '10+ Years',
            image: 'EC',
            color: 'from-emerald-400 to-teal-500',
            socials: { linkedin: '#', twitter: '#' },
        },
        {
            name: 'Dr. Michael Brown',
            specialty: 'Orthopedic Surgeon',
            experience: '18+ Years',
            image: 'MB',
            color: 'from-blue-400 to-cyan-500',
            socials: { linkedin: '#', twitter: '#' },
        },
        {
            name: 'Dr. Jessica Taylor',
            specialty: 'Dermatologist',
            experience: '8+ Years',
            image: 'JT',
            color: 'from-amber-400 to-orange-500',
            socials: { linkedin: '#', twitter: '#' },
        },
        {
            name: 'Dr. Robert Lee',
            specialty: 'Ophthalmologist',
            experience: '14+ Years',
            image: 'RL',
            color: 'from-indigo-400 to-blue-500',
            socials: { linkedin: '#', twitter: '#' },
        },
    ];

    const slidesPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 4,
    };

    const maxSlide = Math.max(0, doctors.length - slidesPerView.desktop);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    };

    return (
        <section id="doctors" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                            Our Team
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                            Meet Our{' '}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Expert Doctors
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            We're dedicated to your well-being with a team of highly qualified
                            and compassionate medical professionals.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                            aria-label="Previous"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                            aria-label="Next"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Doctors Carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / slidesPerView.desktop + 2)}%)`,
                        }}
                    >
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] flex-shrink-0"
                            >
                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                                    {/* Doctor Image */}
                                    <div className={`relative h-64 bg-gradient-to-br ${doctor.color} flex items-center justify-center overflow-hidden`}>
                                        {/* Placeholder Avatar */}
                                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                            <span className="text-4xl font-bold text-white">
                                                {doctor.image}
                                            </span>
                                        </div>

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                                                <a
                                                    href={doctor.socials.linkedin}
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                                                    aria-label="LinkedIn"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                                <a
                                                    href={doctor.socials.twitter}
                                                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                                                    aria-label="Twitter"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Experience Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                            {doctor.experience}
                                        </div>
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">
                                            {doctor.name}
                                        </h3>
                                        <p className={`text-transparent bg-gradient-to-r ${doctor.color} bg-clip-text font-medium`}>
                                            {doctor.specialty}
                                        </p>
                                        <button className="mt-4 w-full py-2.5 border-2 border-slate-200 rounded-full text-slate-600 font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                                            Book Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(maxSlide + 1)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index
                                    ? 'bg-primary w-8'
                                    : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
