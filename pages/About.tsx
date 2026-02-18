import React, { useState, useEffect } from 'react';
import { Briefcase, Figma, MessageSquare, Send, Globe, Music, Clock, Camera, BookOpen } from 'lucide-react';
import { DoodleSpiral, DoodleUnderline, DoodleStar, DoodleArrow, DoodleCircle } from '../components/Doodles';

const About: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', { hour12: false });
  };

  const services = [
    "UX Design", "Product Design", "Service Design", "A11Y", 
    "User Research & Testing", "AI Design", "Design System", 
    "Concepting", "Strategy"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Section 1: The Hero */}
      <section className="mb-32 reveal">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8 leading-tight">
            A page about me, <br />
            <span className="relative inline-block">
              because I deserve it.
              <DoodleUnderline className="absolute -bottom-2 left-0 w-full text-blue-400 opacity-60" />
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-pencil font-serif italic leading-relaxed">
            If I'm not working, I'm probably thinking about my next trip. Or nerding out over fictional books, comics, and fashion. I bridge the gap between creative vision and technical implementation.
          </p>
        </div>
      </section>

      {/* Section 2: Me in Brief (Bento Grid) */}
      <section className="mb-32 reveal">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl font-hand font-bold text-ink transform -rotate-1">Me in brief</h2>
          <div className="h-0.5 flex-grow bg-gray-200 border-dashed border-t-2"></div>
          <span className="font-hand text-xl text-pencil">(02)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card: Profile & Location */}
          <div className="md:col-span-4 sketch-border bg-white p-4 relative flex flex-col items-center justify-between group overflow-hidden h-[450px]">
             <div className="w-full h-2/3 overflow-hidden rounded-lg bg-gray-100 mb-4 border border-ink/10">
                <img 
                  src="https://picsum.photos/400/500?random=10" 
                  alt="Vidhi" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="w-full flex justify-between items-end">
                <div className="space-y-1">
                  <p className="font-hand text-sm text-pencil">Current Location</p>
                  <p className="font-serif font-bold text-lg text-ink">Mumbai, India</p>
                </div>
                <div className="bg-ink text-paper px-3 py-1 rounded-md font-hand text-2xl rotate-2">
                  {formatTime(time)}
                </div>
             </div>
             <DoodleStar className="absolute top-2 right-2 w-8 h-8 text-yellow-400 opacity-40" />
          </div>

          {/* Card: The Manifesto */}
          <div className="md:col-span-8 bg-ink text-paper p-10 rounded-[40px] flex flex-col justify-center relative shadow-xl overflow-hidden min-h-[300px]">
             <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Manifesto<span className="text-blue-400 font-hand text-2xl align-top ml-2">(6)</span></h3>
             <p className="text-xl md:text-2xl font-serif leading-relaxed opacity-90">
               "I've always fallen in love with others' work. Visually stunning, but more importantly design that works. It motivates me, wanting to make the most out of myself. Now I'm working towards being that someone, who can inspire someone else the same way others did to me."
             </p>
             <DoodleSpiral className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 text-white" />
          </div>

          {/* Card: Music Player */}
          <div className="md:col-span-5 sketch-border bg-paper p-6 flex flex-col justify-between h-[280px] relative">
             <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-spin-slow">
                   <Music className="text-blue-600" size={24} />
                </div>
                <div>
                   <p className="font-hand text-blue-600 text-lg">Currently Vibe-ing</p>
                   <h4 className="font-serif font-bold text-xl text-ink">Lady Brown — Nujabes</h4>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="w-full h-1 bg-gray-200 rounded-full relative">
                   <div className="absolute top-0 left-0 h-full bg-ink w-[40%]"></div>
                   <div className="absolute top-[-4px] left-[40%] w-3 h-3 bg-ink rounded-full"></div>
                </div>
                <div className="flex justify-between font-hand text-lg text-pencil">
                   <span>1:13</span>
                   <span>3:19</span>
                </div>
             </div>
             <DoodleCircle className="absolute -right-4 -top-4 w-20 h-20 text-blue-200 -z-10" />
          </div>

          {/* Card: Tools */}
          <div className="md:col-span-7 bg-[#f3f4f6] p-8 rounded-[30px] border-2 border-dashed border-gray-300 relative h-[280px] flex flex-col">
             <h3 className="text-2xl font-serif font-bold text-ink mb-6">Tools I love <span className="text-sm font-hand text-pencil ml-1">(7)</span></h3>
             <div className="flex flex-wrap gap-6 items-center flex-grow">
                <div className="w-14 h-14 bg-white sketch-border flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
                   <Figma size={28} />
                </div>
                <div className="w-14 h-14 bg-white sketch-border flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-all cursor-pointer">
                   <MessageSquare size={28} />
                </div>
                <div className="w-14 h-14 bg-white sketch-border flex items-center justify-center transform rotate-6 hover:rotate-0 transition-all cursor-pointer">
                   <Globe size={28} />
                </div>
                <div className="w-14 h-14 bg-white sketch-border flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-all cursor-pointer">
                   <Camera size={28} />
                </div>
             </div>
             <DoodleArrow className="absolute bottom-4 right-4 w-12 h-12 text-gray-400 opacity-40 transform -rotate-45" />
          </div>

          {/* Card: Services */}
          <div className="md:col-span-12 sketch-border bg-white p-8 relative overflow-hidden">
             <h3 className="text-3xl font-hand font-bold text-ink mb-8">Services <span className="text-sm text-pencil">(9)</span></h3>
             <div className="flex flex-wrap gap-3">
                {services.map((service, idx) => (
                  <span 
                    key={idx} 
                    className="px-6 py-2 border-2 border-ink rounded-full font-serif text-lg hover:bg-ink hover:text-white transition-all cursor-default transform hover:-translate-y-1"
                    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                  >
                    {service}
                  </span>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Film Strip Gallery */}
      <section className="mb-32 reveal">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl font-hand font-bold text-ink transform rotate-1">Visual Interests</h2>
        </div>

        <div className="relative -mx-6 px-6 overflow-x-auto pb-12 scrollbar-hide flex space-x-8">
           {[
             { title: "Comic Collector", img: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?auto=format&fit=crop&q=80&w=500" },
             { title: "Street Photography", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=500" },
             { title: "Fiction Lover", img: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=500" },
             { title: "Fashion Obsessed", img: "https://images.unsplash.com/photo-1529133039905-dc731ca6918f?auto=format&fit=crop&q=80&w=500" }
           ].map((item, idx) => (
             <div key={idx} className="flex-shrink-0 w-[300px] group">
                <div className="bg-white p-2 border-2 border-ink shadow-lg transform group-hover:-rotate-2 transition-transform h-[400px] flex flex-col">
                   <div className="flex-grow bg-gray-100 overflow-hidden mb-4">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   <p className="font-hand text-2xl text-center text-ink">{item.title}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Section 4: Chai & Chat */}
      <section className="reveal text-center py-20 bg-yellow-50 sketch-border relative transform rotate-1">
         <DoodleArrow className="absolute top-0 left-10 w-24 h-24 text-blue-300 opacity-40 transform -rotate-12" />
         <h2 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6">Let's grab a Chai.</h2>
         <p className="text-xl md:text-2xl text-pencil font-serif italic mb-10 max-w-xl mx-auto">
           Whether it's about a project, travel tips for Japan, or discussing the latest fictional worlds, my inbox is always open.
         </p>
         <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="mailto:vvidhi.design@gmail.com" className="sketch-button flex items-center space-x-3 bg-ink text-paper px-8 py-4 text-xl font-hand font-bold hover:scale-105">
               <Send size={20} />
               <span>Say Hello</span>
            </a>
            <div className="font-hand text-2xl text-pencil flex items-center">
               <span className="mr-2">Based in Mumbai</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
         </div>
         <DoodleStar className="absolute bottom-0 right-10 w-16 h-16 text-yellow-400 opacity-40 animate-float" />
      </section>

    </div>
  );
};

export default About;