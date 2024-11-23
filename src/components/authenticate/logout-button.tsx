import { useSelector } from "react-redux";
import { getIsOpen } from "../navigation/navBarSlice";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LogoutButton() {
  const isOpen = useSelector(getIsOpen);
  return (
    <div>
      <Button asChild>
        <Link href={"/"} className="flex gap-2">
          <LogOut />
          <span
            className={`${!isOpen && "max-md:hidden"} ${isOpen && "hidden"}`}
          >
            Logout
          </span>
        </Link>
      </Button>
    </div>
  );
}
