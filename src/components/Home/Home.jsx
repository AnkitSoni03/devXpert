// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Home() {
//     return (
//         <div className="mx-auto w-full max-w-7xl">
//             <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
//                     <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//                         <h2 className="text-4xl font-bold sm:text-5xl">
//                             Download Now
//                             <span className="hidden sm:block text-4xl">Start Learning</span>
//                         </h2>

//                         <Link
//                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//                             to="/"
//                         >
//                             <svg
//                                 fill="white"
//                                 width="24"
//                                 height="24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fillRule="evenodd"
//                                 clipRule="evenodd"
//                             >
//                                 <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//                             </svg>
//                             &nbsp; Download now
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
//                     <img className="w-105" src="/public/home1.webp" alt="image1" />
//                 </div>
//             </aside>

//             <div className="grid  place-items-center sm:mt-20">
//                 <img className="sm:w-200" src="/public/home4.webp" alt="image2" />
//             </div>

//             <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Start Your Project</h1>
//         </div>
//     );
// }




import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    // Inspiring quotes for developers
    const quotes = [
        { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
        { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
        { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
        { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" }
    ];
    
    // Randomly select a quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    return (
        <div className="mx-auto w-full max-w-7xl bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-gray-800">
                            Build Your Future
                            <span className="hidden sm:block text-4xl mt-2 text-orange-600">Start Coding Today</span>
                        </h2>
                        
                        <p className="text-lg text-gray-700">
                            Transform your ideas into reality with our cutting-edge development tools and expert guidance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
                            <Link
                                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 transition-all shadow-lg hover:shadow-xl"
                                to="/"
                            >
                                <svg
                                    fill="white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                &nbsp; Download now
                            </Link>
                            
                            <Link
                                className="inline-flex items-center px-6 py-3 font-medium border-2 border-orange-700 text-orange-700 rounded-lg hover:bg-orange-50 transition-all"
                                to="/learn"
                            >
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                &nbsp; Browse Courses
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="w-120 object-cover" src="/public/home7.jpg" alt="Developer coding" />
                </div>
            </aside>

            {/* Quote Section */}
            <div className="bg-orange-600 text-white py-12 my-16 shadow-xl">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <svg className="w-12 h-12 mx-auto mb-4 text-white opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-2xl font-medium italic">{randomQuote.text}</p>
                    <p className="mt-4 text-lg">— {randomQuote.author}</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 max-w-6xl mx-auto my-16">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Expert-Led Tutorials</h3>
                    <p className="text-gray-600">Learn from industry professionals with our comprehensive, step-by-step guides.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community Support</h3>
                    <p className="text-gray-600">Join thousands of developers in our vibrant community to share ideas and solve problems together.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Real-World Projects</h3>
                    <p className="text-gray-600">Build your portfolio with practical projects that demonstrate your skills to potential employers.</p>
                </div>
            </div>

            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-200 rounded-lg shadow-2xl" src="/public/home8.jpg" alt="Developers collaborating" />
            </div>

            {/* Call to Action */}
            <div className="text-center py-16 px-4">
                <h1 className="text-center text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 pb-2">Start Your Coding Journey Today</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">Whether you're a beginner or an experienced developer, we have the resources you need to take your skills to the next level.</p>
                
                <Link
                    className="inline-flex text-white items-center px-8 py-4 text-lg font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition-all shadow-lg hover:shadow-xl"
                    to="/signup"
                >
                    Create Free Account
                </Link>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gray-50 py-16 my-16 border-t border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center">
                        <img className="w-24 h-24 rounded-full object-cover mb-6" src="/public/home10.jpg" alt="Testimonial" />
                        <p className="text-lg text-gray-700 text-center italic mb-6">"This platform completely transformed my development skills. The structured courses and supportive community helped me land my dream job as a full-stack developer."</p>
                        <p className="font-bold">- Alex Chen, Software Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}