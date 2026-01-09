import { categories, NAV_ITEMS } from "../../data/data";

export default function Sidebar() {

  return (
    <aside className="w-20 mt-16 lg:w-60 h-screen float-start bg-card border-border z-40 flex flex-col transition-all duration-300">
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto border-r border-border">
        <div>
          <h3 className="pl-4 mb-2 text-gray-light text-xs font-semibold">MENU</h3>
          {NAV_ITEMS.map((item) => {
            const isActive = window.location.pathname === item.href;
            return (
              <a key={item.href} href={item.href}>
                <div
                  className="flex items-center pr-3 pl-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group relative overflow-hidden text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  <item.icon
                    className=
                    {`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110text-primary ${isActive && "text-[var(--secondary)]"}`}
                  />
                  <span className={`hidden lg:block ml-3 font-medium tracking-wide text-sm ${isActive && "text-[var(--secondary)]"}`}>
                    {item.label}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div>
          <h3 className="pl-4 my-3  text-gray-light text-xs font-semibold">
            CATEGORIES
          </h3>
          {categories.map((item) => {
            return (
              <a key={item.title} href={"#"}>
                <div
                  className="flex items-center pr-3 pl-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group relative overflow-hidden text-muted-foreground hover:text-foreground hover:bg-white/5"
                >
                  <item.Icon
                    className=
                    {`w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110text-primary`}
                  />
                  <span className={`hidden lg:block ml-3 font-medium tracking-wide text-sm`}>
                    {item.title}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
