import { H2, P, List, H3 } from "@/components/typography";

export default function Home() {
  return (
    <div className="pt-24 px-4">
      <header>
        <h1 className="text-[15vw] mb-8 sm:leadning-normal leading-[15vw] font-black tracking-tight sm:text-7xl sm:text-center">
          Healthy Expressions
        </h1>
      </header>
      <main>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]" />{" "}
        <p className="max-w-3xl mx-auto text-gray-500 sm:text-center">
          Healthy Expressions brings together artists of color, healthcare
          partners, educators, and IT professionals to heal racial trauma
          through six workshops, fostering community engagement in{" "}
          <span className="text-green-500 font-medium">
            Charlotte&apos;s Freedom/Wilkinson Corridor
          </span>
          .
        </p>
        <article className="mt-56 max-w-3xl mx-auto sm:pl-8">
          <H2>What is Healthy Expressions?</H2>
          <P>
            Healthy Expressions is a new project consisting of cross-sector
            collaborations between six artists of color, healthcare partners,
            educators, and Information technology (IT) professionals committed
            to healing racial trauma. Teaching artists will facilitate six
            workshops to share their art to heal and engage the community within
            the Freedom/Wilkinson Corridor in Charlotte.
          </P>
          <H3 className="text-base text-gray-600 mt-4">
            Each workshop will address the racial trauma in disenfranchised
            communities using a specific theme:
          </H3>
          <List
            items={[
              "Breathwork and Sound",
              "Visualization and Painting",
              "Reiki and Somatic Movement",
              "Meditation and Poetic Expression",
              "Photo Scrapbooking and Journaling",
              "African Drumming and Dance",
            ]}
          />
        </article>
      </main>
    </div>
  );
}
