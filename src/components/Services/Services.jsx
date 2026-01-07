const Services = () => {
    const services = [
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Cardiology',
            description: 'Expert heart care with advanced diagnostic tools and personalized treatment plans for all cardiac conditions.',
            color: 'from-red-400 to-rose-500',
            bgColor: 'bg-red-50',
            link: '#',
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Dentistry',
            description: 'Complete dental care from routine checkups to cosmetic procedures, ensuring your perfect smile.',
            color: 'from-cyan-400 to-teal-500',
            bgColor: 'bg-cyan-50',
            link: '#',
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Neurology',
            description: 'Specialized brain and nervous system care with cutting-edge technology and expert neurologists.',
            color: 'from-purple-400 to-violet-500',
            bgColor: 'bg-purple-50',
            link: '#',
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: 'Ophthalmology',
            description: 'Comprehensive eye care services including surgeries, treatments, and vision correction procedures.',
            color: 'from-blue-400 to-indigo-500',
            bgColor: 'bg-blue-50',
            link: '#',
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: 'Laboratory',
            description: 'State-of-the-art diagnostic laboratory with quick and accurate test results for better treatment.',
            color: 'from-amber-400 to-orange-500',
            bgColor: 'bg-amber-50',
            link: '#',
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Pediatrics',
            description: 'Specialized healthcare for infants, children, and adolescents with gentle and caring approach.',
            color: 'from-green-400 to-emerald-500',
            bgColor: 'bg-green-50',
            link: '#',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        Comprehensive{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Medical Solutions
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        We offer a wide range of medical services tailored to meet your health needs
                        with the highest standards of care and expertise.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
                        >
                            {/* Background Gradient on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className={`${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Link */}
                            <a
                                href={service.link}
                                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                            >
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* Decorative Corner */}
                            <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`} />
                        </div>
                    ))}
                </div>

                {/* View All Services */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                        View All Services
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
