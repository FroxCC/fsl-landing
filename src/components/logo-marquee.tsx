import Marquee from "react-fast-marquee";
import Image from "next/image";

export function LogoMarquee() {
  const logos = [
    { name: "express", url: "/logos/icons8-express-js-250.png" },
    { name: "javascript", url: "/logos/icons8-js-250.png" },
    { name: "react", url: "/logos/icons8-react-240.png" },
    { name: "typescript", url: "/logos/icons8-typescript-250.png" },
    { name: "nextjs", url: "/logos/icons8-nextjs-240.png" },
    { name: "django", url: "/logos/icons8-django-384.png" },
    { name: "postgresql", url: "/logos/icons8-postgres-250.png" },
    { name: "tailwind", url: "/logos/icons8-tailwind-css-240.png" },
    { name: "meta", url: "/logos/icons8-meta-250.png" },
    { name: "classroom", url: "/logos/icons8-google-classroom-250.png" },
    { name: "zoom", url: "/logos/icons8-zoom-250.png" },
    { name: "teams", url: "/logos/icons8-teams-250.png" },
    { name: "wordpress", url: "/logos/icons8-wordpress-250.png" },
    { name: "elementor", url: "/logos/icons8-elementor-256.png" },
    { name: "woocommerce", url: "/logos/icons8-woocommerce-384.png" },

  ];

  return (
    <div className="bg-black/50 py-6 backdrop-blur-sm">
      <div className="container mx-auto">
        <Marquee gradient={true} gradientColor="black" speed={40} pauseOnHover={false} loop={0} className="gap-10">
          <div className="flex items-center gap-10">
            {logos.map((logo, idx) => (
              <div key={idx} className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={64}
                  height={64}
                  objectFit="contain"
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
