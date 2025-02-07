import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const TransactionHistory = async({ searchParams: { id, page }}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
	const loggedIn = await getLoggedInUser();
	const accounts = await getAccounts({
		userId: loggedIn.$id
	})

	if(!accounts) return;
	
	const accountsData = accounts?.data;
	const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

	const account = await getAccount({appwriteItemId}) 
  return (
    <section className='transactions'>
      <div className='transactions-header'>
        <HeaderBox title="" subtext="" />
      </div>

      <div className='space-y-6'>
        <div className='transactions-account'>
          <div>
            <h2>

            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransactionHistory