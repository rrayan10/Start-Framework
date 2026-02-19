import StarDivider from "@/components/StarDivider";

const About = () => (
  <div className="bg-hero min-h-[calc(100vh-72px)] flex items-center justify-center">
    <div>
      <StarDivider title="About Component" variant="light" />
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-hero-foreground">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p className="text-hero-foreground">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
