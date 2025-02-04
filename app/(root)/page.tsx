import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const page = async () => {
	const loggedIn = await getLoggedInUser();
	const accounts = await getAccounts({
		userId: loggedIn.$id
	})

	if(!accounts) return;
	
	const appwriteItemId = (id as string) || accounts?.data[0]?.appwriteItemId;

	const account = await getAccount({appwriteItemId})


	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.name || "Guest"}
						subtext="Access and manage your funds properly"
					/>

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={3341.20}
                    />
				</header>

				RECENT TRANSACTIONS
			</div>
			<RightSideBar user={loggedIn} transaction={[]} banks={[{currentBalance: 345.24}, {currentBalance: 345.24}]} />
		</section>
	);
};

export default page;
