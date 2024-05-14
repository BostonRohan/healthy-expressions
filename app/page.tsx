import { H2, P, List, H3 } from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-24 px-4">
      <header>
        <h1 className="text-[15vw] mb-8 sm:leadning-normal leading-[15vw] font-black tracking-tight sm:text-7xl sm:text-center">
          Healthy Expressions
        </h1>
      </header>
      <p className="max-w-3xl mx-auto text-gray-500 sm:text-center">
        Healthy Expressions brings together artists of color, healthcare
        partners, educators, and IT professionals to heal racial trauma through
        six workshops, fostering community engagement in{" "}
        <span className="text-green-500 font-medium">
          Charlotte&apos;s Freedom/Wilkinson Corridor
        </span>
        .
      </p>
      <main className="space-y-24 pb-24">
        <div className="absolute inset-0 -z-10 h-screen w-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]" />{" "}
        <section className="max-w-3xl mx-auto sm:pl-8">
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
            Each <span className="text-green-500">workshop</span> will address
            the racial trauma in disenfranchised communities using a specific
            theme:
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
        </section>
        <section className="max-w-3xl mx-auto sm:pl-8">
          <H2>Our Mission</H2>
          <P>
            This project aims to grow artists into teachers who can create fun
            and experiential space to address common barriers and misperceptions
            of affordability, accessibility, and necessity associated with
            healing, education, and the arts in marginalized communities.
          </P>
        </section>
        <section className="max-w-3xl mx-auto sm:pl-8 space-y-4">
          <H2>Frequently Asked Questions</H2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                When will Healthy Expressions Workshops be held?
              </AccordionTrigger>
              <AccordionContent>
                Pending funding, our first Healthy Expressions workshop will
                happen in July, and will offer a new theme and facilitator each
                month throughout the 6 month series.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I become a Healthy Expressions Facilitator?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Healthy Expressions is looking for artists of color who are
                interested in upgrading their offering within community using a
                trauma informed, healing approach. All artists must be from
                within the greater Charlotte area, and be willing to be recorded
                sharing their workshop offering. All artists will be compensated
                for their time. To be considered, please send your inquiry to
                <Link
                  href="mailto:c.rohan.yoga@gmail.com"
                  className="underline"
                >
                  {" "}
                  c.rohan.yoga@gmail.com
                </Link>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I be a part of the Healthy Expressions Community?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Pending funding, our first Healthy Expressions workshop will
                happen in July, and will offer a new theme and facilitator each
                month throughout the 6 month series.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Where will Healthy Expressions meet?{" "}
              </AccordionTrigger>
              <AccordionContent>
                To make workshops accessible in communities of most need, all of
                our meetings will take place at{" "}
                <i>QC Family Tree, 2910 Parkway Ave, Charlotte, NC 28208</i>.{" "}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
