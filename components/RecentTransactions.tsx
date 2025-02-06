import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const RecentTransactions = ({ accounts, transactions = [], appwriteItemId, page = 1 }: RecentTransactionsProps) => {
  return (
    <section className='recent-transactions'>
        <header className='flex items-center justify-between'>
            <h2 className='recet-transactions-label'>
                Recent Transactions
            </h2>
            <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">
                View all
            </Link>
        </header>
    </section>
  )
}

export default RecentTransactions