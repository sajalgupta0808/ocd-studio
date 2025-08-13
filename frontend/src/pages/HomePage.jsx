import React from 'react';
import thumbnail from '../assets/background/thumbnail.png'
import carousel from '../assets/componets-bg/carousel.png'
import carwash from '../assets/componets-bg/carwash.png'
import bike from '../assets/componets-bg/bike.png'


import bg1 from '../assets/componets-bg/bg1.png'
import bg2 from '../assets/componets-bg/bg2.png'
import bg3 from '../assets/componets-bg/bg3.png'
import bg4 from '../assets/componets-bg/bg4.png'
import bg5 from '../assets/componets-bg/bg5.png'
import bg6 from '../assets/componets-bg/bg6.png'
import bg7 from '../assets/componets-bg/bg7.png'
import f1 from '../assets/componets-bg/f1.png'
import f2 from '../assets/componets-bg/f2.png'
import f3 from '../assets/componets-bg/f3.png'
import f4 from '../assets/componets-bg/f4.png'
import f5 from '../assets/componets-bg/f5.png'
import CallToaction from '../components/common/Calltoaction';
import Feature from '../components/common/Feature';
import { Services } from '../components/common/Services';
import bannervideo from '../assets/background/banner.mp4'
import Testimonials from './Testimonials';
import MoreCustomersSay from './MoreTestimonials';
import AboutPage from './AboutPage';
import OCD from '../assets/componets-bg/OCD.jpg'
import OCD1 from '../assets/componets-bg/OCD1.jpg'
import ContactSection from './ContactSection';
import QuickContactSection from './QuickContactSection';
import FloatingContactButtons from './FloatingContactButtons';
import ServicesSection from './ServicesSection';
import NanoGr from './NanoGr';
import Blogs from './Blogs';

const HomePage = () => {
    // Function to extract YouTube video ID from URL

    const getYouTubeVideoId = (url) => {
        if (!url) return null;

        const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    // Function to get YouTube thumbnail URL
    const getYouTubeThumbnail = (videoUrl) => {
        const videoId = getYouTubeVideoId(videoUrl);
        return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
    };

    // Function to render video thumbnail with fallback
    const renderVideoThumbnail = (youtubeUrl = null) => {
        const youtubeThumbnail = getYouTubeThumbnail(youtubeUrl);
        const thumbnailSrc = youtubeThumbnail || thumbnail;

        const handleVideoClick = () => {
            if (youtubeUrl) {
                window.open(youtubeUrl, '_blank');
            }
        };

        return (
            
            <div
                className="relative cursor-pointer group"
                onClick={handleVideoClick}
            >
                <img
                    src={thumbnailSrc}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                    onError={(e) => {
                        // Fallback to default thumbnail if YouTube thumbnail fails to load
                        e.target.src = thumbnail;
                    }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mx-auto">
            <FloatingContactButtons />
            <section className='text-app-white relative min-h-screen overflow-hidden'>
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                >
                    <source src={bannervideo} type="video/mp4" />
                </video>
                
                <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>
                
                <div className='relative z-20 items-center justify-center flex flex-col gap-8 py-20 pt-32 min-h-screen lg:-mt-16 xl:-mt-24'>
                    
                    <div>
                    <h4 className="font-inter font-normal leading-[100%] tracking-[0%] text-center uppercase text-[#FFFFFFB3]">
                        Trusted by Auto Enthusiasts
                    </h4>
                    </div>

                <div>
                <h1 className='font-bebas text-8xl font-extralight text-center mt-2'>
                    Obsessively Detailed. <br /> Driven by perfection.
                </h1>
                </div>


                    <div><p className='font-semibold text-md text-gray-300 text-center'>Premium PPF, ceramic and graphene coatings for your ride. Handled personally by the <br /> founders. No Compromises. Only perfection.  </p></div>
                    <div>
                        <button className='bg-custom-red border-custom-red text-white  font-bold  px-8 py-2 text-lg border-2 rounded-md'>Get a Quote on WhatsApp</button>
                    </div>
                </div>
            </section>

            <section className='relative bg-black py-32'>
            {/* Video positioned to overlap between sections */}
           <div className='absolute -top-48 left-1/2 transform -translate-x-1/2 z-30'>

                <div className='w-[80vw] max-w-[900px] aspect-video'>
                    {renderVideoThumbnail(null)}
                </div>
            </div>
        </section>

        <section id="ServicesSection">
                <ServicesSection columns={4} cardHeight="28rem" cardWidth="420px" />
        </section>

            <section className='text-white px-4 py-16'>
                <div className='flex items-center justify-around  gap-10 '>
                    <div className='flex flex-col gap-4 max-w-2xl h-[600px'>
                        <h1 className='font-bebas pt-28 text-app-white'>
                        <span className='text-7xl'>Premium Detailing</span>
                        <br />
                        <span className='text-custom-red text-5xl'>For Cars & Bikes.</span>
                        </h1>
                        <h1 className='font-bebas text-2xl font-light pt-4 text-app-white'>Every Surface. Every Curve. Every Inch. Perfected.</h1>

                        <p>At OCD Detail Studio, detailing is an obsession. <br />
                            Every vehicle that enters our studio gets a personalized <br/>assessment and a bespoke care plan. No “standard packages.” No<br/> shortcuts.
                            <p className='font-bold'>Whether it’s a supercar, a luxury sedan, or a superbike</p> from your daily driver to your weekend warrior, we treat every vehicle like <br/>our own. At OCD Detail Studio, every vehicle gets founder-led care <br/>using top-tier products like Artdeshine & CarPro.</p>
                            <p>We specialize in 
                            <span className='font-bold'> premium ceramic coatings, graphene coating,<br/> and paint protection film</span> — tailored for 
                            <span className='font-bold'> all cars and bikes.</span>
                            </p>

                        <div className='flex flex-col gap-4 mt-4'>
                        <h2 
                        className='pt-4 text-app-white' 
                        style={{
                            fontFamily: 'Bebas Neue',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            lineHeight: '25px',
                            letterSpacing: '0%',
                            fontSize: '20px', // increased size
                        }}
                        >
                        SPEAK WITH THE FOUNDERS DIRECTLY
                        </h2>

                        <div  className='flex gap-4'>
                        <button className='bg-custom-red border-custom-red text-white font-bold px-8 py-2 text-lg border-2 rounded-md flex items-center justify-center'>
                            Call Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 4.09 1 1 0 0 1 4 3h4.09a1 1 0 0 1 1 .75c.12.5.28 1 .46 1.5l.48 1.23a1 1 0 0 1-.27 1.11l-2.17 2.17a16 16 0 0 0 6.88 6.88l2.17-2.17a1 1 0 0 1 1.11-.27l1.23.48c.5.18 1 .34 1.5.46a1 1 0 0 1 .75 1V16.92z"/>
                            </svg>
                            </button>
                            <button className='bg-custom-red border-custom-red text-white font-medium px-8 py-2 text-lg border-2 rounded-md flex items-center justify-center'>
                            WhatsApp
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.18 1.59 6.01L0 24l6.17-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.07-1.39l-.36-.21-3.65.96.98-3.56-.24-.37A9.95 9.95 0 0 1 2 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.45-7.55c-.3-.15-1.78-.88-2.05-.98-.27-.1-.46-.15-.66.15-.2.3-.76.98-.94 1.18-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.87 1.23 3.07c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.21-.57-.36z"/>
                            </svg>
                            </button>

                        </div>
                        </div>

                    </div>

                        <div className='relative w-[500px] h-[600px] ml-8'>
                {/* Bike image - positioned at top right, now above */}
                <img 
                    src={OCD} 
                    alt="Bike" 
                    className='absolute top-0 right-0 w-[420px] h-auto z-30 rounded-sm shadow-lg' 
                />
                
                <img 
                    src={OCD1} 
                    alt="Car Wash" 
                    className='absolute -bottom-4 -left-20 w-[300px] h-[440px] z-20 rounded-sm shadow-lg' 
                />

                </div>
                </div>
            </section>

            <NanoGr/>

            <section className='py-16 '>
             <CallToaction/>
            </section>

            <section id="testimonials" className="bg-gray-100 py-16">
                <Testimonials />
            </section>

            <section>
                <MoreCustomersSay />
            </section>

            <section className='py-16 flex flex-col items-center justify-center gap-8'>
                <h1 className="font-bebas text-5xl pt-28 text-app-white">
                Why Car & Bike Owners{" "}
                <span className="text-red-600">Trust OCD Detail Studio</span>
                </h1>
              <div className='max-w-7xl mx-auto px-8'>
                    {/* First row - 4 items */}
                    <div className='flex justify-center gap-8 mb-8'>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={f1} alt="Background 1" className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={f2} alt="Background 2" className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={f3} alt="Background 3" className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={f4} alt="Background 4" className='w-full h-auto rounded-lg' />
                        </div>
                    </div>
                    {/* Second row - 3 items centered */}
                    <div className='flex justify-center gap-8'>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={bg5} alt="Background 5" className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={bg6} alt="Background 6" className='w-full h-auto rounded-lg' />
                        </div>
                        <div className='relative flex-1 max-w-xs'>
                            <img src={bg7} alt="Background 7" className='w-full h-auto rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-16 overflow-hidden bg-black'>
                <div className='whitespace-nowrap'>
                    <div className='inline-block animate-scroll'>
                        <span className='font-bebas text-9xl text-gray-600 mr-16'>
                            New Car & Bike Feel. Every Day Drive. Premium Detailing. Zero Compromise. OCD Detail Studio – Mumbai | Gurgaon | Thane.
                        </span>
                        <span className='font-bebas text-9xl text-gray-600 mr-16'>
                            New Car & Bike Feel. Every Day Drive. Premium Detailing. Zero Compromise. OCD Detail Studio – Mumbai | Gurgaon | Thane.
                        </span>
                        <span className='font-bebas text-9xl text-gray-600 mr-16'>
                            New Car & Bike Feel. Every Day Drive. Premium Detailing. Zero Compromise. OCD Detail Studio – Mumbai | Gurgaon | Thane.
                        </span>
                    </div>
                </div>
            </section>
            <section id='AboutUs'>
                <AboutPage/>
            </section>
            <section>
                <Feature/>
            </section>
            <section>
                <Services/>
            </section>
            <section id="ContactSection" className="bg-gray-100 py-16 w-full">
                <ContactSection />
            </section>
            <section id="Blogs">
                <Blogs />
            </section>

            <section id="QuickContact" >
                <QuickContactSection />
            </section>

        </div>
    )
}

export default HomePage
