import { useState } from "react";
import { Plus, X } from "lucide-react";
import StarDivider from "@/components/StarDivider";
import portfolio1 from "@/assets/portfolio1.png";
import portfolio2 from "@/assets/portfolio2.png";
import portfolio3 from "@/assets/portfolio3.png";

const items = [portfolio1, portfolio2, portfolio3, portfolio1, portfolio2, portfolio3];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pb-8">
      <StarDivider title="Portfolio Component" variant="dark" />
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((img, i) => (
            <div
              key={i}
              className="portfolio-item rounded-lg overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Portfolio ${i + 1}`} className="w-full rounded-lg" />
              <div className="portfolio-overlay absolute inset-0 bg-primary/70 flex items-center justify-center rounded-lg">
                <Plus className="text-primary-foreground w-16 h-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/60 flex items-center justify-center animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground bg-primary rounded-full p-2 hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Portfolio preview"
            className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
