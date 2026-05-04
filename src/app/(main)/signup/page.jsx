'use client'
import { authClient, signOut } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Fieldset, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { email } from "better-auth";
import { useRouter } from "next/navigation";
import { handleGoggle } from "../login/page";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import logo from '../../../image/toppng.com-google-multicolor-g-letter-icon-1000x1000.png'
import Image from "next/image";

const Signup = () => {
    const [isVisible, setIsVisible] = useState(false);
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-gray-500 text-sm mt-1">Join us to explore premium tiles</p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => value.length < 3 ? "Name must be at least 3 characters" : null}
                    >
                        <Label className="text-gray-700 font-medium">Name</Label>
                        <Input
                            name="name"
                            placeholder="John Doe"
                            className="mt-1"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                    </TextField>

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

                    <TextField name="image" type="text">
                        <Label className="text-gray-700 font-medium">Image URL</Label>
                        <Input
                            name="image"
                            placeholder="https://example.com/photo.jpg"
                            className="mt-1"
                        />
                    </TextField>

                    <TextField isRequired className="w-full" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                name="password"
                                className="w-full"
                                type={isVisible ? "text" : "password"}
                                placeholder="enter your password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
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
                        className="w-full bg-gray-200 text-black border border-blue-500 font-medium py-6 rounded-xl flex items-center justify-center gap-2"
                    >
                        <Image src={logo} alt="logo" width={20} height={20}></Image>
                        Google
                    </Button>

                    <div className="flex justify-center gap-1.5 text-sm mt-2">
                        <span className="text-gray-500">Already have an account?</span>
                        <Link href="/login" className="text-blue-600 font-bold hover:underline">
                            Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Signup;