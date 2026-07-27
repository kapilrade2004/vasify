import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  customItems?: { label: string; href?: string }[];
}

export function Breadcrumbs({ customItems }: BreadcrumbsProps) {
  const { pathname } = useLocation();

  const getBreadcrumbs = () => {
    if (customItems) return customItems;

    const segments = pathname.split("/").filter(Boolean);
    const items = [{ label: "Dashboard", href: "/admin/admin-home-page" }];

    let accumPath = "";
    segments.forEach((segment) => {
      accumPath += `/${segment}`;
      let formattedLabel = segment.replace(/-/g, " ");
      formattedLabel = formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1);

      if (segment === "admin" || segment === "admin-home-page") return;

      items.push({
        label: formattedLabel,
        href: accumPath,
      });
    });

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
      <Link
        to="/admin/admin-home-page"
        className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-300 dark:text-slate-600 flex-shrink-0" />
            {isLast || !item.href ? (
              <span className="text-slate-900 dark:text-slate-100 font-semibold truncate max-w-[150px] md:max-w-[250px]">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate max-w-[120px] md:max-w-[200px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
