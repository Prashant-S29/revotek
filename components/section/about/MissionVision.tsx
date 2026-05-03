import { aboutUsPageContent } from "@/content/about.json";

export const MissionVision: React.FC = () => {
  const { missionVision } = aboutUsPageContent;

  return (
    <section
      id="about-mission-vision"
      aria-labelledby="mission-vision-heading"
      className="w-full  py-25 px-50 bg-gray-100"
    >
      <div>
        <div className="mb-12 text-center">
          <p
            className="text-lg text-primary font-medium mb-3"
            aria-hidden="true"
          >
            {missionVision.badgeTitle}
          </p>
          <h2
            id="mission-vision-heading"
            className="text-3xl md:text-4xl font-semibold text-primary"
          >
            What Drives Us Every Day
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-tl-[60px] rounded-br-[60px]">
          <div className="bg-white px-10 py-14 flex flex-col gap-6">
            <div
              aria-hidden="true"
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-primary" />
            </div>

            <h3 className="text-2xl font-semibold text-primary">
              {missionVision.mission.heading}
            </h3>

            <p className="text-base text-muted-foreground leading-relaxed">
              {missionVision.mission.description}
            </p>
          </div>

          <div className="bg-primary px-10 py-14 flex flex-col gap-6">
            <div
              aria-hidden="true"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            >
              <div className="w-5 h-5 rounded-full bg-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              {missionVision.vision.heading}
            </h3>

            <p className="text-base text-white/80 leading-relaxed">
              {missionVision.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
