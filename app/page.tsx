export default function Home() {
  return (
    <div className="py-24 px-4 space-y-8 sm:text-center">
      <header>
        <h1 className="text-[15vw] sm:leadning-normal leading-[15vw] font-black tracking-tight sm:text-7xl">
          Healthy Expressions
        </h1>
      </header>
      <main>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]" />{" "}
        <p className="max-w-3xl mx-auto text-gray-500">
          Healthy Expressions brings together artists of color, healthcare
          partners, educators, and IT professionals to heal racial trauma
          through six workshops, fostering community engagement in{" "}
          <span className="text-green-500 font-medium">
            Charlotte&apos;s Freedom/Wilkinson Corridor
          </span>
          .
        </p>
      </main>
    </div>
  );
}
