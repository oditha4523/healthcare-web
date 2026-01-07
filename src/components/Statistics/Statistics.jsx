const Statistics = () => {
    const stats = [
        {
            number: '12K+',
            label: 'Happy Patients',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'from-green-400 to-emerald-500',
            bgColor: 'bg-green-50',
        },
        {
            number: '150+',
            label: 'Expert Doctors',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'from-blue-400 to-cyan-500',
            bgColor: 'bg-blue-50',
        },
        {
            number: '84%',
            label: 'Healing Success Rate',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'from-purple-400 to-violet-500',
            bgColor: 'bg-purple-50',
        },
        {
            number: '25+',
            label: 'Years Experience',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            color: 'from-orange-400 to-amber-500',
            bgColor: 'bg-orange-50',
        },
    ];

    const testimonialPreview = {
        text: "The care I received was exceptional. The doctors and staff made me feel comfortable throughout my treatment.",
        author: "Sarah Johnson",
        role: "Cardiac Patient",
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Your Health Journey{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Starts Here
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        We're committed to providing the highest quality healthcare services with
                        compassion, expertise, and cutting-edge technology.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                        >
                            <div className={`${stat.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                {stat.number}
                            </h3>
                            <p className="text-slate-600 font-medium">{stat.label}</p>

                            {/* Hover gradient border */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />
                        </div>
                    ))}
                </div>

                {/* Testimonial Preview & CTA */}
                <div className="bg-gradient-to-br from-slate-50 to-cyan-50/50 rounded-3xl p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Testimonial */}
                        <div className="space-y-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-xl lg:text-2xl text-slate-700 font-medium italic">
                                "{testimonialPreview.text}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {testimonialPreview.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">{testimonialPreview.author}</p>
                                    <p className="text-slate-500">{testimonialPreview.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                Ready to Start Your Health Journey?
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Book an appointment today and experience the difference of personalized healthcare.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 w-full justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book Appointment Now
                            </a>
                            <p className="text-center text-sm text-slate-500 mt-4">
                                Free consultation for first-time visitors
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
