'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import { email } from "better-auth";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

// for gogle login
export const handleGoggle = async () => {
    await authClient.signIn.social({
        provider: "google",
    });
};


const Login = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log('form data is ', userData)

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        })
        if (error) {
            toast.error(error.message || "Login failed! Please check your credentials.");
            return;
        }

        if (data) {
            toast.success('Login successful!');
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Login</h2>
                    <p className="text-gray-500 text-sm mt-1">Join us to explore premium tiles</p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
    
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Invalid email address" : null}
                    >
                        <Label className="text-gray-700 font-medium">Email</Label>
                        <Input
                            name="email"
                            placeholder="john@example.com"
                            className="mt-1"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Min 8 characters required";
                            if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need one number";
                            return null;
                        }}
                    >
                        <Label className="text-gray-700 font-medium">Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1"
                        />
                        <Description className="text-[10px] text-gray-400 leading-tight">
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                        type="submit"
                    >
                        <Check className="size-5" />
                        Register Now
                    </Button>

                    <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or continue with</span></div>
                    </div>

                    <Button
                        onClick={handleGoggle}
                        variant="bordered"
                        className="w-full border-gray-200 hover:bg-gray-50 font-medium py-6 rounded-xl flex items-center justify-center gap-2"
                    >
                        <FaGoogle className="text-red-500" />
                        Google
                    </Button>

                    <div className="flex justify-center gap-1.5 text-sm mt-2">
                        <span className="text-gray-500">Don’t have an account?</span>
                        <Link href="/signup" className="text-blue-600 font-bold hover:underline">
                            Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;