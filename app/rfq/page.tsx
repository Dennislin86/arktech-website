import { permanentRedirect } from "next/navigation";

export default function RFQRedirectPage() {
  permanentRedirect("/request-a-quote");
}
