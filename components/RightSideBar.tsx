import Link from "next/link";
import Image from "next/image";
import BankCard from "./BankCard";
import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";

const RightSideBar = ({ user, transactions, banks }:RightSidebarProps) => {
    const categories: Categories[] = countTransactionCategories(transactions);

  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner' />
            <div className='profile'>
                <div className='profile-img'>
                    <span className='font-bold text-5xl text-blue-500'>
                        {user.firstName[0]}
                    </span>
                </div>
                <div className='profile-details'>
                    <h1 className='profile-name'>{user.firstName} {user.lastName}</h1>
                    <p className='profile-email'>
                        {user.email}
                    </p>
                </div>
            </div>
        </section>

        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className="header-2">My Banks</h2>
                <Link href="/" className="flex gap-2">
                    <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
                    <h2 className="font-semibold text-gray-600 text-14">Add Bank</h2>
                </Link>
            </div>
            {banks?.length >0 && (
                <div className="gap-5 items-center justify-center relative flex flex-1 flex-col">
                     <div className="relative z-10">
                        <BankCard account={banks[0]} userName={`${user.firstName} {user.lastName}`} showBalance={false} />
                     </div>
                     {banks[1] && (
                        <div className="absolute right-0 top-8 w-[90%] z-0">
                            <BankCard account={banks[1]} userName={`${user.firstName} {user.lastName}`} showBalance={false} />
                        </div>
                     )}
                </div>
            )}

            <div className="flex mt-10 flex-1 flex-col gap-6">
                <h2 className="header-2">
                    Top Categories
                </h2>

                <div className="space-y-5">
                    {categories.map((category, index) =>(
                        <Category key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </section>
    </aside>
  )
}

export default RightSideBar