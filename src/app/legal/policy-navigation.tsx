"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

import { POLICIES } from "./policies";

type PolicyNavigationProps = {
  currentSlug: string;
};

export default function PolicyNavigation({ currentSlug }: PolicyNavigationProps) {
  const router = useRouter();
  const currentPolicy = useMemo(() => POLICIES.find((policy) => policy.slug === currentSlug), [currentSlug]);

  return (
    <aside className="md:w-64 md:shrink-0 md:sticky md:top-32 md:self-start">
      <div className="mb-6 md:hidden">
        <label htmlFor="policy-selector" className="mb-2 block text-sm font-medium text-gray-700">
          Select policy
        </label>
        <select
          id="policy-selector"
          value={currentPolicy?.slug ?? ""}
          onChange={(event) => router.push(`/${event.target.value}`)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-[#FD870B] focus:outline-none focus:ring-2 focus:ring-[rgba(253,135,11,0.35)]"
        >
          {POLICIES.map((policy) => (
            <option key={policy.slug} value={policy.slug}>
              {policy.title}
            </option>
          ))}
        </select>
      </div>
      <nav className="hidden md:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Policies</p>
        <ul className="mt-4 space-y-2">
          {POLICIES.map((policy) => {
            const isActive = policy.slug === currentSlug;
            return (
              <li key={policy.slug}>
                <Link
                  href={`/${policy.slug}`}
                  className={`block rounded-md px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-[#FFE5C0] font-medium text-[#FD870B]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {policy.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
