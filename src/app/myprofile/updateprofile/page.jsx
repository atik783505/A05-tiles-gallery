'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";

const page = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        const { data, error } = await authClient.updateUser({
            name,
            image
        })
        if (error) {
            alert("Update failed!");
            return;
        }

        if (data) {
            window.location.href = '/myprofile';
        }
    }
    return (
        <div className="py-10">
            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input name='name' placeholder="Enter your name" />
                </TextField>
                <TextField
                    name="image"
                    type="url"
                >
                    <Label>Image URL</Label>
                    <Input name="image" placeholder="URL" />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default page;