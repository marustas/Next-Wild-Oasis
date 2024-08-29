import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({children}: { children: React.ReactNode }){
    return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
    <SideNavigation/>
        {children}
    </div>)
}