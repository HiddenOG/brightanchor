"use client";

import Image from "next/image";
import { useState } from "react";

import arrowBtn from "@/public/arrow-icon.svg";

type Props = {
    inputClass: string;
    buttonClass: string;
    buttonLabel: string;
    subjectPlaceholder?: string;
    messagePlaceholder?: string;
    arrowClass?: string;
};

export default function EnquiryForm({
    inputClass,
    buttonClass,
    buttonLabel,
    subjectPlaceholder = "Subject",
    messagePlaceholder = "Message",
    arrowClass = "",
}: Props) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [note, setNote] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");
        setNote("");

        // Hold on to the element: React clears currentTarget once this handler yields.
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (!response.ok) {
                setStatus("error");
                setNote(result.error ?? "Your message could not be sent.");
                return;
            }

            setStatus("sent");
            setNote("Thank you. We have your message and will come back to you shortly.");
            form.reset();
        } catch {
            setStatus("error");
            setNote("Your message could not be sent. Please call us instead.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="name" required placeholder="Your Name" className={inputClass} />
                <input type="email" name="email" required placeholder="Your Email" className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone Number" className={inputClass} />
                <input type="text" name="subject" placeholder={subjectPlaceholder} className={inputClass} />
            </div>

            <textarea
                rows={6}
                name="message"
                required
                placeholder={messagePlaceholder}
                className={`mt-4 ${inputClass}`}
            ></textarea>

            <button type="submit" disabled={status === "sending"} className={buttonClass}>
                {status === "sending" ? "Sending…" : buttonLabel}
                <Image src={arrowBtn} alt="arrowBtn" className={arrowClass} />
            </button>

            {note && (
                <p
                    className={`mt-4 ${status === "error" ? "text-red-400" : "text-[var(--prim-color2)]"}`}
                    role="status"
                >
                    {note}
                </p>
            )}
        </form>
    );
}
