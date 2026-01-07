const Process = () => {
    const steps = [
        {
            step: '01',
            title: 'Check Doctor Profile',
            description: 'Browse through our team of expert doctors and their specializations to find the perfect match for your needs.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            step: '02',
            title: 'Request Consultation',
            description: 'Fill out a simple form with your health concerns and preferred appointment time for initial consultation.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            step: '03',
            title: 'Schedule Meeting',
            description: 'Choose from available time slots and receive instant confirmation for your appointment with the doctor.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            step: '04',
            title: 'Get Your Solution',
            description: 'Meet with your doctor, receive expert diagnosis, and get a personalized treatment plan for recovery.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm mb-4 backdrop-blur-sm">
                        How It Works
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        4 Easy Steps And Get{' '}
                        <span className="text-cyan-200">Your Solution</span>
                    </h2>
                    <p className="text-lg text-white/80">
                        Getting quality healthcare has never been easier. Follow these simple
                        steps to connect with our expert medical professionals.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-white/20">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-cyan-200/40 to-white/40" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Step Card */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                                    {/* Step Number */}
                                    <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-white/30 transition-colors">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white text-center mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/70 text-center text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow - Mobile/Tablet */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <svg className="w-6 h-6 text-white/40 rotate-90 sm:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Get Started Now
                    </a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300/10 rounded-full blur-3xl" />
        </section>
    );
};

export default Process;
