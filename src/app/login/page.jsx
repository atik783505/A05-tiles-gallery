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
        <div className="py-10">
            <Form onSubmit={onSubmit} className="flex w-96 mx-auto flex-col gap-4">
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input name="password" placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex justify-center gap-2">
                    <Button className='rounded-sm p-3 w-3/12' type="submit">
                        <Check />
                        Login
                    </Button>
                </div>
                <p className="text-center text-gray-500 text-[20]">OR</p>
                <Button onClick={handleGoggle} className='w-full'><FaGoogle></FaGoogle> login with gogle</Button>
                <div className="flex gap-2">
                    <h2>Don’t have an account?</h2>
                    <Link href='/signup' className="text-blue-500">Register</Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;