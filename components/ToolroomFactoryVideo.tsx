import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";

export function ToolroomFactoryVideo() {
  return (
    <div className="relative aspect-video h-auto w-full overflow-hidden rounded-md bg-black lg:aspect-auto lg:h-full lg:min-h-[28rem]" data-toolroom-factory-video>
      <LazyAutoplayVideo
        ariaLabel="Arktech injection mold manufacturing and toolroom process"
        className="absolute inset-0 h-full w-full object-cover object-center"
        controls
        poster="/images/injection-mold-manufacturing/mold-manufacturing-video-poster.webp"
        preload="metadata"
        src="/videos/injection-mold-manufacturing/mold-manufacturing.mp4"
      />
    </div>
  );
}
