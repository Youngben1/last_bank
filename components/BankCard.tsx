import { formatAmount } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const BankCard = ({ account, userName, showBalance=true }:CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link className="bank-card" href="/">
            <div className="bank-card_content">
                <div>
                    <h1 className="text-white text-16 font-semibold">
                        {account.name || userName}
                    </h1>
                    <p className="font-black text-white font-ibm-plex-serif">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-white font-semibold text-12">{userName}</h1>
                        <h2 className="text-white font-semibold text-12">** / **</h2>
                    </div>
                    <p className="text-14 font-semibold tracking-[1.1px] text-white">**** **** **** <span className="text-16">1234</span></p>
                </article>
            </div>

            <div>
                <Image src="/icons/Paypass.svg" alt="paypass" width={20} height={24} />
                <Image src="/icons/mastercard.svg" alt="mastercard" width={45} height={32} className="ml-5" />
            </div>
            <Image src="/icons/lines.png" alt="lines" width={316} height={190} className="absolute top-0 left-0" />
        </Link>

        {/*COPY CARD NUMBERS */}
    </div>
  )
}

export default BankCard