import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  category: string;
  shortDesc: string;
  slug: string;
  icon: string;
}

function getIcon(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Fingerprint: Icons.Fingerprint,
    CreditCard: Icons.CreditCard,
    Vote: Icons.Vote,
    BookOpen: Icons.BookOpen,
    Car: Icons.Car,
    IndianRupee: Icons.IndianRupee,
    Award: Icons.Award,
    Home: Icons.Home,
    Baby: Icons.Baby,
    FileX: Icons.FileX,
    Heart: Icons.Heart,
    Receipt: Icons.Receipt,
    Building: Icons.Building,
    Store: Icons.Store,
    UtensilsCrossed: Icons.UtensilsCrossed,
    Wheat: Icons.Wheat,
    Sprout: Icons.Sprout,
    Map: Icons.Map,
    Shield: Icons.Shield,
    ShieldCheck: Icons.ShieldCheck,
    Wallet: Icons.Wallet,
    GraduationCap: Icons.GraduationCap,
    FileInput: Icons.FileInput,
    PenTool: Icons.PenTool,
    Briefcase: Icons.Briefcase,
    Wrench: Icons.Wrench,
    UserCheck: Icons.UserCheck,
    Printer: Icons.Printer,
    ScanLine: Icons.ScanLine,
    Camera: Icons.Camera,
    HeartPulse: Icons.HeartPulse,
    Train: Icons.Train,
    Plane: Icons.Plane,
    Landmark: Icons.Landmark,
  };
  return iconMap[iconName] || Icons.FileText;
}

export default function ServiceCard({
  title,
  category,
  shortDesc,
  slug,
  icon,
}: ServiceCardProps) {
  const IconComponent = getIcon(icon);

  return (
    <Link href={`/services/${slug}`}>
      <div className="card-service group h-full flex flex-col">
        <div className="w-12 h-12 bg-royal-50 group-hover:bg-royal-100 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-royal-600 group-hover:text-royal-700 transition-colors duration-300" />
        </div>
        <h3 className="font-bold text-deep-900 group-hover:text-royal-600 transition-colors duration-300 mb-1">
          {title}
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-wider text-royal-500 mb-2">
          {category}
        </span>
        <p className="text-sm text-slate-500 flex-1 leading-relaxed line-clamp-2">
          {shortDesc}
        </p>
        <div className="mt-4 pt-3 border-t border-slate-100 group-hover:border-royal-100 transition-colors duration-300">
          <span className="text-sm font-semibold text-royal-600 group-hover:text-royal-700 inline-flex items-center gap-1 transition-all duration-300">
            Learn More
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}
