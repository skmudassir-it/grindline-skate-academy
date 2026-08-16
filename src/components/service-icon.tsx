import {
  GraduationCap,
  Zap,
  Tent,
  UserCheck,
  Mountain,
  Building2,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Zap,
  Tent,
  UserCheck,
  Mountain,
  Building2,
  PartyPopper,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? GraduationCap;
  return <Icon className={className} />;
}
