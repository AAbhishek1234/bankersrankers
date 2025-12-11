import { useEffect, useRef, useState } from "react";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Bank PO Complete",
    description: "Comprehensive preparation for SBI PO, IBPS PO, and other bank PO examinations with expert guidance.",
    duration: "6 Months",
    students: "5000+",
    rating: "4.9",
    features: ["Video Lectures", "Mock Tests", "Interview Prep", "Doubt Sessions"],
    popular: true,
  },
  {
    title: "Bank Clerk Mastery",
    description: "Master all aspects of Bank Clerk exams including IBPS Clerk and SBI Clerk with our proven methodology.",
    duration: "4 Months",
    students: "4500+",
    rating: "4.8",
    features: ["Practice Questions", "Speed Tests", "Study Material", "Live Classes"],
    popular: false,
  },
  {
    title: "RBI Grade B",
    description: "Specialized coaching for RBI Grade B examination covering both Phase I and Phase II preparation.",
    duration: "8 Months",
    students: "2000+",
    rating: "4.9",
    features: ["Expert Faculty", "Current Affairs", "ESI & FM", "Case Studies"],
    popular: false,
  },
  {
    title: "Complete Banking Bundle",
    description: "All-in-one package covering PO, Clerk, RBI, and other banking examinations at discounted pricing.",
    duration: "12 Months",
    students: "3500+",
    rating: "5.0",
    features: ["All Courses", "Priority Support", "1-on-1 Mentoring", "Job Assistance"],
    popular: true,
  },
];

const CoursesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary font-semibold text-lg mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of expertly designed courses tailored for banking examination success
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={cn(
                "group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {course.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-secondary rounded-full text-xs font-bold text-secondary-foreground">
                  Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full group/btn" variant="outline">
                View Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <Button size="lg" variant="default">
            View All Courses
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
