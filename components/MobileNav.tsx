import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

const MobileNav = ({ user }:MobileNavProps) => {
  return (
    <section className="max-w-[264px] w-full ">
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure</SheetTitle>
                    <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav