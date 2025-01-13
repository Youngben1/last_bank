import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const page = () => {
	const loggedIn = { firstName: 'Ben', lastName: 'Renny', email: 'benrenny@gmail.com'};


	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
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
