"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import {useRouter} from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
    

	const formSchema = authFormSchema(type);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	const onSubmit = async (data: z.infer<typeof formSchema>) =>{
		setIsLoading(true);
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		try {
            //Sign up with Appwrite and create plaid link token
        if(type === "sign-up"){
            const newUser = await signUp(data);

            setUser(newUser);
        } 
        if(type === "sign-in"){
            const response = await signIn({email: data.email, password: data.password})

            if(response) router.push("/")
        }
        console.log(values);
		setIsLoading(true);
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
	}

	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-">
				<Link className="flex items-center gap-1 cursor-pointer" href="/">
					<Image src="/icons/logo.svg" alt="logo" height={35} width={35} />
					<h1 className="font-bold text-26 font-ibm-plex-serif text-black-1">
						LastBank
					</h1>
				</Link>

				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                    {user 
                ? 'Link Account'
                : type === 'sign-in'
                  ? 'Sign In'
                  : 'Sign Up'
              }
						<p className="text-16 font-normal text-gray-600">
							{user
								? "Link your account to get started"
								: "Please enter your details"}
						</p>
					</h1>
				</div>
			</header>
			{user ? (
				<div className="flex flex-col gap-4">{/* PlaidLink */}</div>
			) : (
				<>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							{type === "sign-up" && (
								<>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="firstName"
											label="FirstName"
											placeholder="Enter your first name"
										/>
										<CustomInput
											control={form.control}
											name="lastName"
											label="LastName"
											placeholder="Enter your last name"
										/>
									</div>
									<CustomInput
										control={form.control}
										name="address1"
										label="Address"
										placeholder="Enter your specific address"
									/>
                                    <CustomInput
										control={form.control}
										name="city"
										label="City"
										placeholder="Enter your Zanga"
									/>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="state"
											label="State"
											placeholder="Example: Jigs"
										/>
										<CustomInput
											control={form.control}
											name="postalCode"
											label="Postal Code"
											placeholder="Example 930210"
										/>
									</div>
									<div className="flex gap-4">
										<CustomInput
											control={form.control}
											name="dateOfBirth"
											label="Date Of Birth"
											placeholder="DD-MM-YYYY"
										/>
										<CustomInput
											control={form.control}
											name="nin"
											label="NIN"
											placeholder="Example 123456789"
										/>
									</div>
								</>
							)}
							<CustomInput
								control={form.control}
								name="email"
								label="Email"
								placeholder="Enter your email"
							/>

							<CustomInput
								control={form.control}
								name="password"
								label="Password"
								placeholder="Enter your password"
							/>

							<div className="flex flex-col gap-4">
                            <Button type="submit" disabled={isLoading} className="form-btn">
                                {isLoading ? (
                                    <>
                                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                                    Loading...
                                    </>
                                ) : type === 'sign-in' 
                                    ? 'Sign In' : 'Sign Up'}
                            </Button>
							</div>
						</form>
					</Form>

					<footer className="justify-center flex gap-1">
						<p className="font-14 text-normal text-gray-600">
							{type === "sign-in"
								? "Dont have an account?"
								: "Already have an account??"}
						</p>
						<Link
							href={type === "sign-in" ? "/sign-up" : "/sign-in"}
							className="form-link"
						>
							{type === "sign-in" ? "Sign up" : "Sign in"}
						</Link>
					</footer>
				</>
			)}
		</section>
	);
};

export default AuthForm;
