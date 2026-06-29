"use client";

import React from "react";
import {
  Activity,
  Bone,
  Brain,
  Accessibility,
  Stethoscope,
  Network,
  Zap,
  Dna,
  Scale,
  ShieldAlert,
  HeartPulse,
  Target,
  Flame,
  Sprout,
  Lightbulb,
  Heart,
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

export const specialitiesList: SpecialityItem[] = [
  { id: "stroke", name: "Stroke", icon: Activity, href: "/stroke-rehab", color: "#E91E63" },
  { id: "spinal-cord", name: "Spinal Cord Injury", icon: Bone, href: "/spinal-cord-injury.html", color: "#9C27B0" },
  { id: "tbi", name: "Traumatic Brain Injury", icon: Brain, href: "/traumatic-brain-injury.html", color: "#FF9800" },
  { id: "hemiplegia", name: "Hemiplegia", icon: Accessibility, href: "/hemiplegia.html", color: "#00BCD4" },
  { id: "quadriplegia", name: "Quadriplegia & Paraplegia", icon: Accessibility, href: "/quadriplegia-paraplegia.html", color: "#3F51B5" },
  { id: "post-surgical", name: "Post-Surgical Complications", icon: Stethoscope, href: "/post-surgical-complications.html", color: "#009688" },
  { id: "mnd", name: "Motor Neuron Diseases", icon: Network, href: "/motor-neuron-diseases.html", color: "#607D8B" },
  { id: "cerebral-palsy", name: "Cerebral Palsy", icon: Sprout, href: "/cerebral-palsy.html", color: "#E040FB" },
  { id: "parkinsons", name: "Parkinson's Disease", icon: Zap, href: "/parkinsons-disease.html", color: "#FFEB3B" },
  { id: "myopathy", name: "Myopathy", icon: Dna, href: "/myopathy.html", color: "#8BC34A" },
  { id: "disc-spine", name: "Disc & Spine Problems", icon: Bone, href: "/disc-spine-problems.html", color: "#FF5722" },
  { id: "sciatica", name: "Sciatica", icon: Zap, href: "/sciatica.html", color: "#795548" },
  { id: "obesity", name: "Obesity", icon: Scale, href: "/obesity.html", color: "#F44336" },
  { id: "post-covid", name: "Post-Covid Complications", icon: ShieldAlert, href: "/post-covid-complications.html", color: "#FFC107" },
  { id: "muscular-dystrophy", name: "Muscular Dystrophy", icon: HeartPulse, href: "/muscular-dystrophy.html", color: "#E91E63" },
  { id: "osteoarthritis", name: "Osteoarthritis", icon: Target, href: "/osteoarthritis.html", color: "#9E9E9E" },
  { id: "rheumatoid", name: "Rheumatoid Arthritis", icon: Flame, href: "/rheumatoid-arthritis.html", color: "#FF5722" },
  { id: "developmental-delay", name: "Developmental Delay", icon: Sprout, href: "/developmental-delay.html", color: "#8BC34A" },
  { id: "psychological", name: "Psychological Problems", icon: Lightbulb, href: "/psychological-problems.html", color: "#FFEB3B" },
  { id: "autism", name: "Autism", icon: Heart, href: "/autism.html", color: "#E91E63" },
  { id: "psychiatry", name: "Psychiatry", icon: Brain, href: "/psychiatry.html", color: "#9C27B0" }
];

export default function DepartmentSidebar({
  activeSpecialityId,
  onItemClick,
  isOpenMobile = false
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
