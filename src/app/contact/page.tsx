'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

const formSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email'),
    message: z.string().min(10, 'Message should be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data: FormData) => {
        console.log('Form submitted:', data);
        setSubmitted(true);
        reset();
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/contact-bg.png"
                    alt="Contact Background"
                    fill
                    className="object-cover object-center opacity-30"
                    priority
                />
            </div>

            {/* Form Container */}
            <div className="bg-white/90 backdrop-blur-xl shadow-xl rounded-3xl p-8 sm:p-10 max-w-xl w-full">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">Contact Us</h1>
                <p className="text-center text-gray-600 mb-10">
                    Let’s talk about your idea — we’d love to hear from you!
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <Input {...register('name')} placeholder="Your name" />
                        {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <Input type="email" {...register('email')} placeholder="you@example.com" />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <Textarea
                            {...register('message')}
                            rows={5}
                            placeholder="Tell us what you're working on..."
                        />
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white hover:bg-blue-700"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {submitted && (
                        <p className="text-green-600 text-center mt-4 font-medium">
                            ✅ Thank you! We’ll get back to you shortly.
                        </p>
                    )}
                </form>

                {/* Company Info */}
                <div className="mt-12 text-sm text-gray-600 text-left border-t pt-6">
                    <p className="font-semibold text-gray-800">PixelPulse</p>
                    <p>info@pixelpulse.com</p>
                    <p>Schubertring 5, 1010 Vienna, Austria</p>
                </div>
            </div>
        </section>
    );
}
