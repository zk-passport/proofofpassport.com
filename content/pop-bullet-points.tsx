import { LINKS } from "@/common/settings";
import { classed } from "@tw-classed/react";
import { ReactNode } from "react";

interface BulletPointProps {
  title: ReactNode;
  description: string;
  url: {
    label: string;
    href: string;
  };
}

export const bulletPoints: BulletPointProps[] = [
  {
    title: (
      <>
        Private <strong>by design</strong>
      </>
    ),
    description:
      "OpenPassport uses zero-knowledge proofs to guarantee privacy. Proofs disclosing specific attributes are generated, and the full passport data never leaves the device. ",
    url: {
      label: "Introduction",
      href: LINKS.INTRODUCTION_TO_ZK,
    },
  },
  {
    title: (
      <>
        Selective <strong>disclosure</strong>
      </>
    ),
    description:
      "Users can selectively disclose specific information about themselves such as age and nationality.",
    url: {
      label: "Read Docs",
      href: LINKS.DOCUMENTATION,
    },
  },
  {
    title: (
      <>
        100% <strong>open source</strong>
      </>
    ),
    description:
      "OpenPassport is 100% open-source and contributor friendly. Its modular architecture allows for easily adding support for new ID documents and applications.",
    url: {
      label: "Github",
      href: LINKS.GITHUB,
    },
  },
];
