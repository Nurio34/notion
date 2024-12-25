import Image from "next/image";

const trusted = [
  "/hero/affirm-gr.svg",
  "/hero/remote-gr-v2.svg",
  "/hero/1password-gr.svg",
  "/hero/figma-gr.svg",
];

function Hero() {
  return (
    <main className="grid grid-cols-2 gap-x-[2vw] px-[12vw] py-[4vh]">
      <section>
        <h1 className=" text-7xl font-bold">The happier workspace</h1>
        <p className=" text-2xl py-[1vh] font-semibold">
          Write. Plan. Collaborate. With a little help from AI.
        </p>
        <div className=" flex items-center gap-[2vw] py-[2vh]">
          <button
            type="button"
            className=" btn text-lg font-semibold btn-primary"
          >
            Get Notion free
          </button>
          <button
            type="button"
            className=" btn text-lg font-semibold text-primary"
          >
            Request a demo
          </button>
        </div>
        <div className="py-[1vh] font-semibold text-gray-500">
          <h2>Trusted by teams at</h2>
          <ul className="flex items-center gap-[2vw] py-[2vh]">
            {trusted.map((src) => (
              <figure key={src} className="relative w-24 h-10">
                <Image fill src={src} alt="" />
              </figure>
            ))}
          </ul>
        </div>
      </section>
      <video
        width={640}
        className=" self-center"
        src="https://www.notion.com/front-static/pages/product/super-duper/hero/hero-illustration.mp4"
        autoPlay
        loop
        muted
      ></video>
      <figure className="relative w-full h-[717px] col-span-full border-2 rounded-lg overflow-hidden">
        <Image fill src={"/hero/Projects-V2.webp"} alt="" />
      </figure>
    </main>
  );
}

export default Hero;
