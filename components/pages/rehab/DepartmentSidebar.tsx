"use client";

import React from "react";
import {
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna,
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  LucideIcon
} from "lucide-react";

interface SpecialityItem {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
  id: string;
}

interface DepartmentSidebarProps {
  activeSpecialityId: string;
  onItemClick?: () => void;
  isOpenMobile?: boolean;
}

// As pages are migrated to Next.js, update hrefs from .html to clean routes.
// Current migration status is tracked here — .html = legacy, /slug = migrated.
export const specialitiesList: SpecialityItem[] = [
  { id: "stroke",            name: "Stroke",                      icon: Activity,    href: "/stroke-rehab",                  color: "#E91E63" },
  { id: "hemiplegia",        name: "Hemiplegia",                  icon: Accessibility, href: "/hemiplegia",                  color: "#00BCD4" },
  { id: "spinal-cord",       name: "Spinal Cord Injury",          icon: Bone,        href: "/spinal-cord-injury",            color: "#9C27B0" },
  { id: "tbi",               name: "Traumatic Brain Injury",      icon: Brain,       href: "/traumatic-brain-injury",        color: "#FF9800" },
  { id: "quadriplegia",      name: "Quadriplegia & Paraplegia",   icon: Accessibility, href: "/quadriplegia-paraplegia",     color: "#3F51B5" },
  { id: "post-surgical",     name: "Post-Surgical Complications", icon: Stethoscope, href: "/post-surgical-complications",   color: "#009688" },
  { id: "mnd",               name: "Motor Neuron Diseases",       icon: Network,     href: "/motor-neuron-diseases",         color: "#607D8B" },
  { id: "cerebral-palsy",    name: "Cerebral Palsy",              icon: Sprout,      href: "/cerebral-palsy",                color: "#E040FB" },
  { id: "parkinsons",        name: "Parkinson's Disease",         icon: Zap,         href: "/parkinsons-disease",            color: "#FFEB3B" },
  { id: "myopathy",          name: "Myopathy",                    icon: Dna,         href: "/myopathy",                      color: "#8BC34A" },
  { id: "muscular-dystrophy",name: "Muscular Dystrophy",          icon: HeartPulse,  href: "/muscular-dystrophy",            color: "#E91E63" },
  { id: "disc-spine",        name: "Disc & Spine Problems",       icon: Bone,        href: "/disc-spine-problems",           color: "#FF5722" },
  { id: "sciatica",          name: "Sciatica",                    icon: Zap,         href: "/sciatica",                      color: "#795548" },
  { id: "obesity",           name: "Obesity",                     icon: Scale,       href: "/obesity",                       color: "#F44336" },
  { id: "post-covid",        name: "Post-Covid Complications",    icon: ShieldAlert, href: "/post-covid-complications",      color: "#FFC107" },
  { id: "osteoarthritis",    name: "Osteoarthritis",              icon: Target,      href: "/osteoarthritis",                color: "#9E9E9E" },
  { id: "rheumatoid",        name: "Rheumatoid Arthritis",        icon: Flame,       href: "/rheumatoid-arthritis",          color: "#FF5722" },
  { id: "developmental-delay", name: "Developmental Delay",       icon: Sprout,      href: "/developmental-delay",           color: "#8BC34A" },
  { id: "psychological",     name: "Psychological Problems",      icon: Lightbulb,   href: "/psychological-problems",        color: "#FFEB3B" },
  { id: "autism",            name: "Autism",                      icon: Heart,       href: "/autism",                        color: "#E91E63" },
  { id: "psychiatry",        name: "Psychiatry",                  icon: Brain,       href: "/psychiatry",                    color: "#9C27B0" },
];

export default function DepartmentSidebar({
  activeSpecialityId,
  onItemClick,
  isOpenMobile = false,
}: DepartmentSidebarProps) {
  return (
    <aside className={`ayur-qdept-sidebar ${isOpenMobile ? "open" : ""}`}>
      <div className="ayur-qdept-title">Specialities</div>
      {specialitiesList.map((item, idx) => {
        const IconComponent = item.icon;
        const isActive = item.id === activeSpecialityId;
        return (
          <a
            key={idx}
            href={item.href}
            className={`ayur-qdept-link ${isActive ? "active" : ""}`}
            onClick={onItemClick}
          >
            <IconComponent size={14} style={{ color: item.color }} />
            {item.name}
          </a>
        );
      })}
    </aside>
  );
}
