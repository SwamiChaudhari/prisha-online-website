import { services, serviceCategories } from "@/data/services";
import ServiceCard from "./ServiceCard";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

function getCategoryIcon(iconName: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Fingerprint: Icons.Fingerprint,
    FileText: Icons.FileText,
    Briefcase: Icons.Briefcase,
    Wheat: Icons.Wheat,
    Landmark: Icons.Landmark,
    GraduationCap: Icons.GraduationCap,
    UserCheck: Icons.UserCheck,
    Monitor: Icons.Monitor,
    Shield: Icons.Shield,
    Plane: Icons.Plane,
    Receipt: Icons.Receipt,
    Map: Icons.Map,
  };
  return iconMap[iconName] || Icons.Folder;
}

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Complete range of government and digital services to meet all your
            needs
          </p>
        </div>

        {serviceCategories.map((category) => {
          const categoryServices = services.filter(
            (s) => s.categorySlug === category.slug
          );
          if (categoryServices.length === 0) return null;

          const CatIcon = getCategoryIcon(category.icon);

          return (
            <div key={category.slug} className="mb-12" id={category.slug}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CatIcon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {category.nameMr}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryServices.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.title}
                    category={service.category}
                    shortDesc={service.shortDesc}
                    slug={service.slug}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
