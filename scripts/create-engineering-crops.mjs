import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const source = "public/images/Molding/DFM.png";

const crops = [
  {
    output: "public/images/plastic-injection-molding/wall-thickness-rib-design.webp",
    left: 1275,
    top: 1988,
    width: 520,
    height: 300
  },
  {
    output: "public/images/plastic-injection-molding/draft-undercut-review.webp",
    left: 648,
    top: 1510,
    width: 420,
    height: 300
  },
  {
    output: "public/images/plastic-injection-molding/gate-flow-analysis.webp",
    left: 2530,
    top: 557,
    width: 370,
    height: 300
  },
  {
    output: "public/images/injection-mold-manufacturing/cavity-core-parting.webp",
    left: 628,
    top: 477,
    width: 610,
    height: 390
  },
  {
    output: "public/images/injection-mold-manufacturing/cooling-gate-runner.webp",
    left: 1255,
    top: 954,
    width: 610,
    height: 390
  },
  {
    output: "public/images/injection-mold-manufacturing/ejection-slider-lifter.webp",
    left: 628,
    top: 954,
    width: 610,
    height: 390
  }
];

await Promise.all([
  mkdir("public/images/plastic-injection-molding", { recursive: true }),
  mkdir("public/images/injection-mold-manufacturing", { recursive: true })
]);

await Promise.all(
  crops.map(({ output, ...extract }) =>
    sharp(source)
      .extract(extract)
      .resize(1220, 780, { fit: "contain", background: "#ffffff" })
      .webp({ quality: 84 })
      .toFile(output)
  )
);
