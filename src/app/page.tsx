import { Cover } from "@/components/Cover";
import { Sommaire } from "@/components/Sommaire";
import { PreviousIssues } from "@/components/PreviousIssues";
import { getSummaries } from "@/lib/summaries";

export default function Home() {
  return (
    <main>
      <Cover />
      <Sommaire summaries={getSummaries()} />
      <PreviousIssues />
    </main>
  );
}
