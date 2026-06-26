import {
  Route,
  Users,
  Car,
  Gauge,
  ArrowLeftRight,
  Diamond,
  SignpostBig,
  ParkingSquare,
  ShieldAlert,
  Scale,
  Octagon,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Route,
  Users,
  Car,
  Gauge,
  ArrowLeftRight,
  Diamond,
  SignpostBig,
  ParkingSquare,
  ShieldAlert,
  Scale,
  Octagon,
  BookOpen,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? BookOpen;
  return <Icon className={className} />;
}
