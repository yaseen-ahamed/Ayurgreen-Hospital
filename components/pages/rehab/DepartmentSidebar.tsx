"use client";

import React from "react";
import {
  Activity, Bone, Brain, Accessibility, Stethoscope, Network, Zap, Dna,
  Scale, ShieldAlert, HeartPulse, Target, Flame, Sprout, Lightbulb, Heart,
  Leaf, Dumbbell, Bot, Puzzle, MessageCircle, Headset, Sun, MapPin, Footprints,
  Waves, Baby, Ruler, ShieldPlus, Utensils, HeartHandshake, Smile, Pill,
  BrainCircuit, Microscope, Hammer, Ear, Syringe, Droplet, Wind, LucideIcon
} from "lucide-react";

interface SpecialityItem {
  name: string;
  icon: LucideIcon;
  href: string;
  color: string;
  id: string;
}

// 1. Specialities List
export const specialitiesList: SpecialityItem[] = [
  { id: "stroke",            name: "Stroke",                      icon: Activity,      href: "/stroke-rehab",                  color: "#E91E63" },
  { id: "hemiplegia",        name: "Hemiplegia",                  icon: Accessibility, href: "/hemiplegia",                  color: "#00BCD4" },
  { id: "spinal-cord",       name: "Spinal Cord Injury",          icon: Bone,          href: "/spinal-cord-injury",            color: "#9C27B0" },
  { id: "tbi",               name: "Traumatic Brain Injury",      icon: Brain,         href: "/traumatic-brain-injury",        color: "#FF9800" },
  { id: "quadriplegia",      name: "Quadriplegia & Paraplegia",   icon: Accessibility, href: "/quadriplegia-paraplegia",     color: "#3F51B5" },
  { id: "post-surgical",     name: "Post-Surgical Complications", icon: Stethoscope,   href: "/post-surgical-complications",   color: "#009688" },
  { id: "mnd",               name: "Motor Neuron Diseases",       icon: Network,       href: "/motor-neuron-diseases",         color: "#607D8B" },
  { id: "cerebral-palsy",    name: "Cerebral Palsy",              icon: Sprout,        href: "/cerebral-palsy",                color: "#E040FB" },
  { id: "parkinsons",        name: "Parkinson's Disease",         icon: Zap,           href: "/parkinsons-disease",            color: "#FFEB3B" },
  { id: "myopathy",          name: "Myopathy",                    icon: Dna,           href: "/myopathy",                      color: "#8BC34A" },
  { id: "muscular-dystrophy",name: "Muscular Dystrophy",          icon: HeartPulse,    href: "/muscular-dystrophy",            color: "#E91E63" },
  { id: "disc-spine",        name: "Disc & Spine Problems",       icon: Bone,          href: "/disc-spine-problems",           color: "#FF5722" },
  { id: "sciatica",          name: "Sciatica",                    icon: Zap,           href: "/sciatica",                      color: "#795548" },
  { id: "obesity",           name: "Obesity",                     icon: Scale,         href: "/obesity",                       color: "#F44336" },
  { id: "post-covid",        name: "Post-Covid Complications",    icon: ShieldAlert,   href: "/post-covid-complications",      color: "#FFC107" },
  { id: "osteoarthritis",    name: "Osteoarthritis",              icon: Target,        href: "/osteoarthritis",                color: "#9E9E9E" },
  { id: "rheumatoid",        name: "Rheumatoid Arthritis",        icon: Flame,         href: "/rheumatoid-arthritis",          color: "#FF5722" },
  { id: "developmental-delay", name: "Developmental Delay",       icon: Sprout,        href: "/developmental-delay",           color: "#8BC34A" },
  { id: "psychological",     name: "Psychological Problems",      icon: Lightbulb,     href: "/psychological-problems",        color: "#FFEB3B" },
  { id: "autism",            name: "Autism",                      icon: Heart,         href: "/autism",                        color: "#E91E63" },
  { id: "psychiatry",        name: "Psychiatry",                  icon: Brain,         href: "/psychiatry",                    color: "#9C27B0" },
];

// 2. Departments List
export const departmentsList: SpecialityItem[] = [
  { id: "ayurveda",             name: "Ayurveda",                   icon: Leaf,           href: "/ayurveda",              color: "#4CAF50" },
  { id: "physiotherapy",        name: "Physiotherapy",              icon: Dumbbell,       href: "/physiotherapy",         color: "#FF9800" },
  { id: "robotic-rehab",        name: "Robotic Rehabilitation",     icon: Bot,            href: "/robotic-rehab",         color: "#00BCD4" },
  { id: "occupational-therapy", name: "Occupational Therapy",       icon: Puzzle,         href: "/occupational-therapy",  color: "#9C27B0" },
  { id: "speech-therapy",       name: "Speech Therapy",             icon: MessageCircle,  href: "/speech-therapy",        color: "#2196F3" },
  { id: "virtual-reality",      name: "Virtual Reality",            icon: Headset,        href: "/virtual-reality",       color: "#E91E63" },
  { id: "yoga-meditation",      name: "Yoga and Meditation",        icon: Sun,            href: "/yoga-meditation",       color: "#FFC107" },
  { id: "acupuncture",          name: "Acupuncture",                icon: MapPin,         href: "/acupuncture",           color: "#F44336" },
  { id: "reflexology",          name: "Reflexology",                icon: Footprints,     href: "/reflexology",           color: "#795548" },
  { id: "hydro-therapy",        name: "Hydro / Aquatic Therapy",    icon: Waves,          href: "/hydro-therapy",         color: "#03A9F4" },
  { id: "pediatrics",           name: "Pediatrics",                 icon: Baby,           href: "/pediatrics",            color: "#E040FB" },
  { id: "slimming-treatment",   name: "Slimming Treatment",         icon: Ruler,          href: "/slimming-treatment",    color: "#009688" },
  { id: "pain-management",      name: "Pain Management",            icon: ShieldPlus,     href: "/pain-management",       color: "#4CAF50" },
  { id: "diet-nutrition",       name: "Diet & Nutrition",           icon: Utensils,       href: "/diet-nutrition",        color: "#FF5722" },
  { id: "counseling",           name: "Counseling",                 icon: HeartHandshake, href: "/counseling",            color: "#E91E63" },
  { id: "dentistry",            name: "Dentistry",                  icon: Smile,          href: "/dentistry",             color: "#00BCD4" },

  { id: "assistive-devices",    name: "Assistive Devices",          icon: Accessibility,  href: "/assistive-devices",     color: "#3F51B5" },
];

// 3. Modern Integrations List
export const integrationsList: SpecialityItem[] = [
  { id: "neurology",           name: "Neurology",           icon: BrainCircuit, href: "/neurology",           color: "#607D8B" },
  { id: "neurosurgery",        name: "Neurosurgery",        icon: Microscope,   href: "/neurosurgery",        color: "#009688" },
  { id: "orthopedic",          name: "Orthopedic",          icon: Hammer,       href: "/orthopedic",          color: "#795548" },
  { id: "ent",                 name: "ENT",                 icon: Ear,          href: "/ent",                 color: "#FF9800" },
  { id: "general-medicine",    name: "General Medicine",    icon: Syringe,      href: "/general-medicine",    color: "#F44336" },
  { id: "urology",             name: "Urology",             icon: Droplet,      href: "/urology",             color: "#03A9F4" },
  { id: "cardiology",          name: "Cardiology",          icon: Heart,        href: "/cardiology",          color: "#E91E63" },
  { id: "respiratory-therapy", name: "Respiratory Therapy", icon: Wind,         href: "/respiratory-therapy", color: "#00BCD4" },
  { id: "neuro-psychology",    name: "Neuro Psychology",    icon: Brain,        href: "/neuro-psychology",    color: "#9C27B0" },
];

interface DepartmentSidebarProps {
  activeSpecialityId: string;
  onItemClick?: () => void;
  isOpenMobile?: boolean;
}

export default function DepartmentSidebar({
  activeSpecialityId,
  onItemClick,
  isOpenMobile = false,
}: DepartmentSidebarProps) {
  // Determine which list and title to show based on the active ID
  let currentList = specialitiesList;
  let title = "Specialities";

  if (departmentsList.some((item) => item.id === activeSpecialityId)) {
    currentList = departmentsList;
    title = "Departments";
  } else if (integrationsList.some((item) => item.id === activeSpecialityId)) {
    currentList = integrationsList;
    title = "Modern Integrations";
  }

  return (
    <aside className={`ayur-qdept-sidebar ${isOpenMobile ? "open" : ""}`}>
      <div className="ayur-qdept-title">{title}</div>
      {currentList.map((item, idx) => {
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
