import { Search, Bell, Gamepad2 } from "lucide-react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <header className="h-16 fixed top-0 right-0 left-0 bg-background/80 backdrop-blur-md border-b border-border z-30 px-6 flex items-center justify-between">

            {/* Logo */}
            <div className="h-16 flex items-center justify-center lg:justify-start border-b border-border">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-[var(--secondary)]" />
                </div>
                <span className="hidden lg:block ml-3 font-display font-bold text-xl text-foreground tracking-widest">
                    GAMECENTER
                </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-border rounded-3xl leading-5 bg-gray text-foreground placeholder-muted-foreground outline-none transition-all duration-200 sm:text-sm shadow-inner"
                        placeholder="Search games..."
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full shadow-[0_0_5px_#bc13fe]"></span>
                </button>

                <div className="flex items-center gap-3">
                    <Link href="/login">
                        <Button variant="contained" className="text-muted-foreground hover:text-foreground">Log In</Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="contained" className="text-muted-foreground hover:text-foreground">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
