// app/foundations/page.tsx
import Image from "next/image";
import { TopicCard } from "@/app/components/ResourceCard";

type Topic = {
  title: string;
  blurb: string;
};

const topics: Topic[] = [
  {
    title: "The Four Noble Truths and The Noble Eightfold Path",
    blurb:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Commentaries",
    blurb:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Three Marks and Dependent Origination (Intro)",
    blurb:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
];

export default function AdvancedPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-12 xl:px-20">
      {/* Heading */}
      <section className="mx-auto max-w-7xl py-10 sm:py-12 lg:py-16">
        <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-rose-900/90">
          Advanced Buddhist teachings
        </h1>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl space-y-5 lg:space-y-6">
        {topics.map((t, i) => (
          <TopicCard key={i} title={t.title} blurb={t.blurb} />
        ))}
      </section>
      <div className="h-12 lg:h-16" />
    </main>
  );
}
