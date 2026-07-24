import { For } from "solid-js";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Visible breadcrumb navigation component.
 * Usage: <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
 * The last item has no link (current page).
 */
export function Breadcrumb(props: { items: BreadcrumbItem[] }) {
  return (
    <nav
      class="breadcrumb-nav"
      aria-label="Breadcrumb"
      style={{
        background: "#f9fafb",
        "border-bottom": "1px solid #e5e7eb",
        padding: "0.6rem 1.5rem",
        "font-size": "0.82rem",
        color: "#6b7280",
      }}
    >
      <ol
        style={{
          display: "flex",
          "flex-wrap": "wrap",
          "align-items": "center",
          gap: "0.25rem",
          "list-style": "none",
          margin: "0",
          padding: "0",
          "max-width": "1200px",
          "margin-left": "auto",
          "margin-right": "auto",
        }}
      >
        <For each={props.items}>
          {(item, index) => (
            <li style={{ display: "flex", "align-items": "center", gap: "0.25rem" }}>
              {index() > 0 && (
                <span style={{ margin: "0 0.3rem", color: "#9ca3af" }} aria-hidden="true">
                  ›
                </span>
              )}
              {item.href && index() < props.items.length - 1 ? (
                <a
                  href={item.href}
                  style={{
                    color: "#E8821A",
                    "text-decoration": "none",
                    "font-weight": "500",
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span style={{ color: "#374151", "font-weight": "600" }} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          )}
        </For>
      </ol>
    </nav>
  );
}
