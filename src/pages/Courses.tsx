import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";

const courses = [
  {
    title: "Bank PO Complete Course",
    description: "Comprehensive preparation for SBI PO, IBPS PO, and other bank PO examinations with expert guidance and complete coverage.",
    duration: "6 Months",
    students: "5000+",
    rating: "4.9",
    price: "₹24,999",
    originalPrice: "₹34,999",
    features: ["200+ Video Lectures", "50+ Mock Tests", "Interview Preparation", "Daily Doubt Sessions", "Complete Study Material", "Current Affairs Updates"],
    popular: true,
  },
  {
    title: "Bank Clerk Mastery",
    description: "Master all aspects of Bank Clerk exams including IBPS Clerk and SBI Clerk with our result-oriented methodology.",
    duration: "4 Months",
    students: "4500+",
    rating: "4.8",
    price: "₹14,999",
    originalPrice: "₹19,999",
    features: ["150+ Video Lectures", "40+ Mock Tests", "Speed Building Tests", "Study Material", "Live Classes", "Performance Analytics"],
    popular: false,
  },
  {
    title: "RBI Grade B Course",
    description: "Specialized coaching for RBI Grade B examination covering both Phase I and Phase II with ESI and FM.",
    duration: "8 Months",
    students: "2000+",
    rating: "4.9",
    price: "₹39,999",
    originalPrice: "₹49,999",
    features: ["300+ Video Lectures", "ESI Coverage", "Finance & Management", "Descriptive Writing", "Interview Prep", "Case Studies"],
    popular: false,
  },
  {
    title: "Complete Banking Bundle",
    description: "All-in-one package covering PO, Clerk, RBI, and other banking examinations at heavily discounted pricing.",
    duration: "12 Months",
    students: "3500+",
    rating: "5.0",
    price: "₹49,999",
    originalPrice: "₹89,999",
    features: ["All Courses Access", "Priority Support", "1-on-1 Mentoring", "Job Assistance", "Lifetime Access", "Certificate"],
    popular: true,
  },
];

const Courses = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto text-center px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-lg mb-4">
            Our Courses
          </span>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6">
            Choose Your Path to <span className="text-secondary">Success</span>
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
            Explore our range of comprehensive courses designed by banking experts to help you crack your dream exam.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="relative bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                {course.popular && (
                  <div className="absolute -top-3 right-4 px-3 py-1 gradient-secondary rounded-full text-xs md:text-sm font-bold text-secondary-foreground">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </span>
                      <span className="flex items-center gap-1 text-secondary">
                        <Star className="h-4 w-4 fill-secondary" />
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{course.price}</div>
                    <div className="text-xs md:text-sm text-muted-foreground line-through">
                      {course.originalPrice}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
                  {course.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {course.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 text-sm md:text-base" variant={course.popular ? "secondary" : "default"}>
                    Enroll Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <Button variant="outline" className="text-sm md:text-base">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Courses;
