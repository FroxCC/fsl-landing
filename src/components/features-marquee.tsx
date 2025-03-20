import React from "react";
import Marquee from "react-fast-marquee";
import { Code2, Cpu, HeadphonesIcon, Key, ShieldCheck, Sparkles } from "lucide-react";

export function FeaturesMarquee() {
  return (
    <div className="py-10 bg-black justify-center">
      <Marquee gradient={true} gradientColor="black" speed={50} pauseOnHover={false}>
        <div className="flex items-center gap-16">
          <FeatureItem icon={<Cpu className="h-10 w-10 text-teal-400" />} text="Tecnología Avanzada" />
          <FeatureItem icon={<ShieldCheck className="h-10 w-10 text-teal-400" />} text="Seguridad Empresarial" />
          <FeatureItem icon={<Sparkles className="h-10 w-10 text-teal-400" />} text="Innovación Continua" />
          <FeatureItem icon={<HeadphonesIcon className="h-10 w-10 text-teal-400" />} text="Soporte 24/7" />
          <FeatureItem icon={<Key className="h-10 w-10 text-teal-400" />} text="Gestión de Licencias" />
          <FeatureItem icon={<Code2 className="h-10 w-10 text-teal-400" />} text="Desarrollo Personalizado" />
        </div>
      </Marquee>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {

  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <p className="mt-2 text-gray-300 text-sm font-medium">{text}</p>
    </div>
  );
}
