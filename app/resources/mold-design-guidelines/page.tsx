import type { Metadata } from "next";
import { EngineeringResourcePage } from "@/components/EngineeringResourcePage";
import { engineeringResourceByPath } from "@/lib/engineering-resources";
const resource = engineeringResourceByPath.get("/resources/mold-design-guidelines")!;
export const metadata: Metadata = { title: resource.title, description: resource.description, alternates: { canonical: resource.path } };
export default function Page() { return <EngineeringResourcePage resource={resource} />; }
