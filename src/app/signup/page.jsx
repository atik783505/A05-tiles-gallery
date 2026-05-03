'use client'
import { authClient, signOut } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import { email } from "better-auth";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { handleGoggle } from "../login/page";
import Link from "next/link";
import { toast } from "react-toastify";
const Signup = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log('form data is ', userData)

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            image: userData.image,
            password: userData.password
        })
        signOut()
        if (error) {
            toast.error("Signup error:", error);
            return;
        }

        if (data) {
            toast.success('Singup Succesfull');
            router.push('/login');
        }
    };

    return (
        <div className="w-5/12 mx-auto py-10 flex flex-col justify-center">
            <Form onSubmit={onSubmit} className="flex w-full max-w-md mx-auto flex-col gap-4">
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 5) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input name="name" placeholder="John Doe" />
                    <FieldError />
                </TextField>
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
                    name="image"
                    type="text"
                >
                    <Label>Image URL</Label>
                    <Input name="image" placeholder="eneter your email" />
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
                        Register
                    </Button>
                </div>
                <p className="text-center text-gray-500">OR</p>
                <Button onClick={handleGoggle} className='w-full'><FaGoogle></FaGoogle> login with gogle</Button>
                <div className="flex gap-2">
                    <h2>Don’t have an account?</h2>
                    <Link href='/login' className="text-blue-500">Login</Link>
                </div>
            </Form>
        </div>
    );
};

export default Signup;