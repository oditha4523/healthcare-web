const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
                            <span className="text-primary font-medium text-sm">Welcome to MediCare</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                            Empowering Lives{' '}
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                Through Health
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                            Experience world-class healthcare with our team of dedicated professionals.
                            We combine cutting-edge technology with compassionate care to deliver
                            the best medical services for you and your family.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book an Appointment
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Learn More
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-800">24/7</p>
                                    <p className="text-sm text-slate-500">Emergency Care</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-800">150+</p>
                                    <p className="text-sm text-slate-500">Expert Doctors</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative lg:pl-8 animate-fade-in">
                        {/* Background Decorations */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />

                        {/* Main Image Container */}
                        <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 lg:p-8">
                            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Doctor Illustration SVG */}
                                <svg className="w-full h-auto" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Background */}
                                    <rect width="500" height="400" fill="url(#hero-gradient)" />

                                    {/* Hospital Building */}
                                    <rect x="280" y="120" width="180" height="200" rx="8" fill="white" fillOpacity="0.9" />
                                    <rect x="295" y="140" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="350" y="140" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="405" y="140" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="295" y="195" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="350" y="195" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="405" y="195" width="40" height="40" rx="4" fill="#0ea5e9" fillOpacity="0.2" />
                                    <rect x="340" y="260" width="60" height="60" rx="4" fill="#0ea5e9" fillOpacity="0.3" />

                                    {/* Medical Cross on Building */}
                                    <rect x="360" y="100" width="20" height="40" rx="2" fill="#0ea5e9" />
                                    <rect x="350" y="110" width="40" height="20" rx="2" fill="#0ea5e9" />

                                    {/* Doctor Figure */}
                                    <ellipse cx="150" cy="350" rx="80" ry="20" fill="#0ea5e9" fillOpacity="0.1" />

                                    {/* Doctor Body */}
                                    <path d="M150 180 C150 180 120 200 120 260 L120 330 C120 335 125 340 130 340 L170 340 C175 340 180 335 180 330 L180 260 C180 200 150 180 150 180Z" fill="white" />
                                    <path d="M150 180 C150 180 120 200 120 260 L120 330 C120 335 125 340 130 340 L170 340 C175 340 180 335 180 330 L180 260 C180 200 150 180 150 180Z" stroke="#0ea5e9" strokeWidth="3" />

                                    {/* Lab Coat Details */}
                                    <path d="M135 220 L135 280" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M165 220 L165 280" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 4" />

                                    {/* Doctor Head */}
                                    <circle cx="150" cy="145" r="40" fill="#fcd5b8" />
                                    <path d="M120 130 Q150 100 180 130" fill="#374151" />
                                    <circle cx="138" cy="145" r="4" fill="#374151" />
                                    <circle cx="162" cy="145" r="4" fill="#374151" />
                                    <path d="M142 160 Q150 168 158 160" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />

                                    {/* Stethoscope */}
                                    <path d="M140 190 Q130 210 135 230" stroke="#374151" strokeWidth="3" fill="none" />
                                    <circle cx="135" cy="235" r="8" fill="#374151" />
                                    <circle cx="135" cy="235" r="4" fill="#6b7280" />

                                    {/* Clipboard */}
                                    <rect x="175" y="250" width="45" height="60" rx="4" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="2" />
                                    <rect x="190" y="260" width="20" height="3" rx="1" fill="#0ea5e9" />
                                    <rect x="185" y="270" width="30" height="2" rx="1" fill="#cbd5e1" />
                                    <rect x="185" y="278" width="25" height="2" rx="1" fill="#cbd5e1" />
                                    <rect x="185" y="286" width="28" height="2" rx="1" fill="#cbd5e1" />
                                    <rect x="185" y="294" width="20" height="2" rx="1" fill="#cbd5e1" />

                                    {/* Heart Rate Line */}
                                    <path d="M40 300 L60 300 L70 280 L80 320 L90 290 L100 310 L110 300 L130 300" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                                    {/* Decorative Elements */}
                                    <circle cx="250" cy="80" r="15" fill="#0ea5e9" fillOpacity="0.3" />
                                    <circle cx="60" cy="120" r="10" fill="#10b981" fillOpacity="0.3" />
                                    <circle cx="420" cy="350" r="12" fill="#06b6d4" fillOpacity="0.3" />

                                    {/* Plus Signs */}
                                    <g fill="#0ea5e9" fillOpacity="0.4">
                                        <rect x="75" y="200" width="15" height="4" rx="2" />
                                        <rect x="80.5" y="194.5" width="4" height="15" rx="2" />

                                        <rect x="240" cy="340" width="12" height="3" rx="1.5" />
                                        <rect x="244.5" y="335.5" width="3" height="12" rx="1.5" />
                                    </g>

                                    <defs>
                                        <linearGradient id="hero-gradient" x1="0" y1="0" x2="500" y2="400" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#f0f9ff" />
                                            <stop offset="0.5" stopColor="#e0f2fe" />
                                            <stop offset="1" stopColor="#ecfeff" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 animate-float z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Appointment</p>
                                        <p className="text-xs text-green-600">Confirmed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-xl p-4 animate-float z-20" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">Health Score</p>
                                        <p className="text-xs text-primary">Excellent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
