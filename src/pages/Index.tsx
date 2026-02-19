import avataaars from "@/assets/avataaars.svg";
import StarDivider from "@/components/StarDivider";

const Index = () => (
  <div className="bg-hero min-h-[calc(100vh-72px)] flex items-center justify-center">
    <div className="text-center">
      <img src={avataaars} alt="Avatar" className="mb-3 mx-auto" width={250} height={265} />
      <StarDivider title="Start Framework" variant="light" />
      <p className="text-hero-foreground">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>
);

export default Index;
