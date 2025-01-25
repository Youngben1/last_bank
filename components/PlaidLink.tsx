import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button';
import {useRouter} from "next/navigation";
import {PlaidLinkOnSuccess, PlaidLinkOptions} from "react-plaid-link";

const PlaidLink = ({ user, variant }:PlaidLinkProps) => {
    const router = useRouter()
    const [token, setToken] = useState("");

    useEffect(()=>{
        const getLinkedToken = async () => {
            // const data = await createLinkToken(user);

            // setToken(data?.linkToken);
        }
        getLinkedToken();
    }, []);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) =>{
        // await exchangePublicToken({
        //     publicToken: public_token,
        //     user,
        // })

        router.push("/")
    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }
  
    return (
    <>
        {variant === "primary" ? (
            <Button className='plaidlink-primary'>
                Connect bank
            </Button>
        ) : variant === "ghost" ? (
            <Button>
                Connect bank
            </Button>
        ) : (
            <Button>
                Connect bank
            </Button>
        )}
    </>
  )
}

export default PlaidLink