// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Target, Users, Award, BookOpen, Clock, CheckCircle } from "lucide-react";

// const features = [
//   { icon: Target, title: "Focused Curriculum", description: "Our curriculum is designed specifically for banking exams, covering all topics in depth with regular updates based on exam patterns." },
//   { icon: Users, title: "Expert Faculty", description: "Learn from experienced professionals who have cleared banking exams and have years of teaching experience." },
//   { icon: Clock, title: "Flexible Batches", description: "We offer morning, evening, and weekend batches to accommodate working professionals and students." },
//   { icon: Award, title: "Proven Results", description: "With a 95% success rate, we have helped thousands of students achieve their banking career dreams." },
//   { icon: BookOpen, title: "Comprehensive Material", description: "Get access to well-researched study materials, question banks, and practice sets designed by experts." },
//   { icon: CheckCircle, title: "Mock Test Series", description: "Regular mock tests with detailed analysis help you track progress and improve weak areas." },
// ];

// const About = () => {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="gradient-hero pt-32 pb-20">
//         <div className="container mx-auto text-center">
//           <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-lg mb-4">
//             About Us
//           </span>
//           <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
//             Shaping <span className="text-secondary">Banking Careers</span> Since 2012
//           </h1>
//           <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
//             Bankers Rankers Academy is a premier coaching institute dedicated to helping aspirants achieve their dream of working in prestigious banks across India.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
//                 Our <span className="text-primary">Mission & Vision</span>
//               </h2>
//               <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
// Our mission is to provide India’s most reliable, effective, and authentic banking exam coaching to help serious aspirants achieve secure and rewarding careers in the government banking sector.
//               </p>
//               <p className="text-muted-foreground text-lg leading-relaxed mb-8">
//                Our vision is to build a generation of banking professionals who stand out in knowledge and capability. We want to be and remain the most trusted institute for bank exam preparation in India.
//               </p>
//               {/* <Button size="lg">Learn More About Our Approach</Button> */}
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {features.slice(0, 4).map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div key={feature.title} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
//                     <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
//                       <Icon className="h-6 w-6 text-primary-foreground" />
//                     </div>
//                     <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
//                     <p className="text-sm text-muted-foreground">{feature.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
//               Our  <span className="text-primary">Advantages</span>
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Our comprehensive approach to banking exam preparation sets us apart from the rest.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature) => {
//               const Icon = feature.icon;
//               return (
//                 <div key={feature.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
//                   <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
//                     <Icon className="h-7 w-7 text-primary-foreground" />
//                   </div>
//                   <h4 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
//                   <p className="text-muted-foreground">{feature.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <div className="h-16 bg-background" />
//       <Footer />
//     </main>
//   );
// };

// export default About;


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, BookOpen, Clock, CheckCircle } from "lucide-react";

const features = [
  { icon: Target, title: "Focused Curriculum", description: "Our curriculum is designed specifically for banking exams, covering all topics in depth with regular updates based on exam patterns." },
  { icon: Users, title: "Expert Faculty", description: "Learn from experienced professionals who have cleared banking exams and have years of teaching experience." },
  { icon: Clock, title: "Flexible Batches", description: "We offer morning, evening, and weekend batches to accommodate working professionals and students." },
  { icon: Award, title: "Proven Results", description: "With a 95% success rate, we have helped thousands of students achieve their banking career dreams." },
  { icon: BookOpen, title: "Comprehensive Material", description: "Get access to well-researched study materials, question banks, and practice sets designed by experts." },
  { icon: CheckCircle, title: "Mock Test Series", description: "Regular mock tests with detailed analysis help you track progress and improve weak areas." },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-lg mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Shaping <span className="text-secondary">Banking Careers</span> Since 2012
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Bankers Rankers Academy is a premier coaching institute dedicated to helping aspirants achieve their dream of working in prestigious banks across India.
          </p>
        </div>
      </section>

      {/* About Bankers Rankers – Newly Added Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              About <span className="text-primary">Bankers Rankers</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are India’s premier test-preparation institute dedicated exclusively to banking examinations.
              Founded and run by a team of highly experienced subject experts, ex-bankers and industry experts,
              we bring unmatched practical insight, precision and authenticity to bank exam preparation – 
              something no other coaching institute in India offers.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Their first-hand knowledge of banking operations, recruitment expectations and exam
              methodologies ensures that every student learns with absolute clarity, relevance and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Mission & Vision</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our mission is to provide India’s most reliable, effective, and authentic banking exam coaching 
                to help serious aspirants achieve secure and rewarding careers in the government banking sector.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our vision is to build a generation of banking professionals who stand out in knowledge and capability. 
                We want to be and remain the most trusted institute for bank exam preparation in India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Advantages</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to banking exam preparation sets us apart from the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-16 bg-background" />
      <Footer />
    </main>
  );
};

export default About;
