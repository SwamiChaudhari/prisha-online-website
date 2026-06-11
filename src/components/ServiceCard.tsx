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
      <div className="card card-hover group h-full flex flex-col">
        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-100 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300">
            <IconComponent className="w-6 h-6 text-primary-500" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            <span className="text-xs text-gray-500">{category}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 flex-1 leading-relaxed">
          {shortDesc}
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-sm font-medium text-primary-500 group-hover:text-primary-600 inline-flex items-center gap-1 transition-colors">
            Learn More
            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
