import Image from "next/image";
import styles from "./EngineeringCoDesignPanels.module.css";

const examples = [
  {
    title: "Bird Feeder Product Concept",
    image: "/images/Engineering/Co-design/Bird-feed-2.jpg",
    alt: "Bird feeder product concept with hanging and pole-mounted configurations",
    position: "50% center"
  },
  {
    title: "Medical Training Device",
    image: "/images/Engineering/Co-design/Medical-device.jpg",
    alt: "Hands using a laparoscopic medical training device",
    position: "55% center"
  },
  {
    title: "Smart Home Device Range",
    image: "/images/Engineering/Co-design/SMARK-HOME-DEVICE.webp",
    alt: "Smart home hub sensors switches and remote controls",
    position: "50% center"
  },
  {
    title: "Robotic Cleaning System",
    image: "/images/Engineering/Co-design/cleaning-machine.webp",
    alt: "Robotic floor cleaner with its docking station",
    position: "42% center"
  },
  {
    title: "Coffee Machine Concept",
    image: "/images/Engineering/Co-design/coffee-maching.jpg",
    alt: "Industrial design sketch of a countertop coffee machine",
    position: "50% 43%"
  },
  {
    title: "Connected Pet Product",
    image: "/images/Engineering/Co-design/dog-house.jpg",
    alt: "Small dog inside an enclosed connected pet product",
    position: "50% center"
  },
  {
    title: "Ultrasound System",
    image: "/images/Engineering/Co-design/medice-b.jpeg",
    alt: "Portable ultrasound system with display and control panel",
    position: "50% 48%"
  },
  {
    title: "Outdoor Climate Product",
    image: "/images/Engineering/Co-design/outdoor-AC-e1753620674893.jpg",
    alt: "Portable outdoor climate unit beside a campsite table",
    position: "58% center"
  }
] as const;

export function EngineeringCoDesignPanels() {
  return (
    <div className={styles.track} role="list">
      {[examples.slice(0, 4), examples.slice(4)].map((row, rowIndex) => (
        <div className={styles.row} key={rowIndex} role="presentation">
          {row.map((example, exampleIndex) => (
            <figure className={styles.panel} key={example.image} role="listitem">
              <Image
                alt={example.alt}
                className={styles.image}
                fill
                loading={rowIndex === 0 && exampleIndex === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1280px) 30vw, (min-width: 420px) 50vw, 100vw"
                src={example.image}
                style={{ objectPosition: example.position }}
              />
              <span aria-hidden="true" className={styles.gradient} />
              <figcaption className={styles.content}>
                <span aria-hidden="true" className={styles.accent} />
                <h4 className={styles.title}>{example.title}</h4>
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
