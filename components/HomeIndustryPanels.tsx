import Image from "next/image";
import Link from "next/link";
import styles from "./HomeIndustryPanels.module.css";

const industries = [
  {
    title: "Robotics & Automation",
    body: "Housings, sensor interfaces & functional components.",
    image: "/images/industries/robotics-automation.png",
    alt: "Industrial robot handling components on an automated production line",
    href: "/industries/robotics",
    position: "42% center"
  },
  {
    title: "Automotive Components",
    body: "Interior trim, control panels & functional plastic parts.",
    image: "/images/industries/Automotive-Components.png",
    alt: "Automotive interior with dashboard controls and molded trim components",
    href: "/industries/automotive-components",
    position: "52% center"
  },
  {
    title: "Smart Home & IoT",
    body: "Device housings, sensor enclosures & control panels.",
    image: "/images/industries/smart-device-housings.png",
    alt: "Smart home cameras hubs sensors and connected control devices",
    href: "/industries/smart-home",
    position: "48% center"
  },
  {
    title: "Home Appliance",
    body: "Appliance housings, control panels & functional parts.",
    image: "/images/industries/home-appliance.png",
    alt: "Home appliances with molded housings and control panels in a kitchen",
    href: "/industries/home-appliance",
    position: "50% center"
  },
  {
    title: "Pet Tech Products",
    body: "Housings and components for connected pet products.",
    image: "/images/industries/pet-lifestyle-product-parts.png",
    alt: "Dog and cat using connected pet feeder water and camera products",
    href: "/industries/pet-tech",
    position: "50% center"
  },
  {
    title: "Consumer Electronics",
    body: "Electronic enclosures, covers & functional plastic parts.",
    image: "/images/industries/consumer-electronics-enclosures.png",
    alt: "Consumer electronics including headphones phone watch camera and speaker",
    href: "/industries/consumer-electronics",
    position: "52% center"
  }
] as const;

export function HomeIndustryPanels() {
  return (
    <div className={styles.track} data-industry-panels>
      {industries.map((industry) => (
        <article className={styles.panel} key={industry.title}>
          <Image
            alt={industry.alt}
            className={styles.image}
            fill
            sizes="(min-width: 1360px) 30vw, (min-width: 640px) 34vw, (min-width: 420px) 50vw, 100vw"
            src={industry.image}
            style={{ objectPosition: industry.position }}
          />
          <Link className={styles.link} href={industry.href}>
            <span aria-hidden="true" className={styles.gradient} />
            <div className={styles.content}>
              <span aria-hidden="true" className={styles.accent} />
              <div className={styles.headingRow}>
                <h3 className={styles.title}>{industry.title}</h3>
                <span aria-hidden="true" className={styles.arrow}>→</span>
              </div>
              <div className={styles.details}>
                <span className={styles.description}>{industry.body}</span>
                <span aria-hidden="true" className={styles.prompt}>Explore</span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
