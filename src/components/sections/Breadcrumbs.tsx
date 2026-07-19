import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-body">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className="text-steel hover:text-flame transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-steel-light">{item.name}</span>
            )}
            {i < items.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-steel-dark" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
