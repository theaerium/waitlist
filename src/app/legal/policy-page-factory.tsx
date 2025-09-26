import { readFile } from "fs/promises";
import path from "path";

import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PolicyNavigation from "./policy-navigation";
import { findPolicy } from "./policies";

const docsDirectory = path.join(process.cwd(), "..", "app", "docs");

export function createPolicyMetadata(slug: string): Metadata {
  const policy = findPolicy(slug);

  if (!policy) {
    return {};
  }

  return {
    title: `${policy.title} | Aerium`,
    description: `Read Aerium's ${policy.title}.`,
  };
}

export function createPolicyPage(slug: string) {
  return async function PolicyPage() {
    const policy = findPolicy(slug);

    if (!policy) {
      notFound();
    }

    const filePath = path.join(docsDirectory, policy.fileName);
    const file = await readFile(filePath, "utf8");

    return (
      <main className="mx-auto w-full max-w-6xl px-4 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <PolicyNavigation currentSlug={slug} />
          <div className="flex-1">
            <header className="mb-10 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#FD870B]">Legal</p>
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{policy.title}</h1>
            </header>
            <article className="legal-content">
              <ReactMarkdown>{file}</ReactMarkdown>
            </article>
          </div>
        </div>
      </main>
    );
  };
}
