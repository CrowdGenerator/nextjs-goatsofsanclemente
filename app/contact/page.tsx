"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import type { Metadata } from "next";
import SectionIntro from "../components/SectionIntro";

/* ------------------------------------------------------------------
   NOTE: This is a Client Component ("use client"), so we cannot export
   `metadata` from here. Metadata is defined in a sibling layout or
   handled by Next.js defaults. The page content below is the contact
   form described in TICKET-016.
   ------------------------------------------------------------------ */

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data.error || "Something went wrong. Please try again.",
        );
      }

      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-[var(--radius-btn)] border border-gray-300 bg-white px-4 py-3 text-[16px] text-body-charcoal placeholder-muted-gray transition-colors focus:border-primary-green focus:ring-2 focus:ring-primary-green/30 focus:outline-none";

  const labelClasses = "block text-[15px] font-semibold text-body-charcoal mb-2";

  return (
    <article>
      {/* Page Title */}
      <section className="py-10 md:py-24 px-4 sm:px-6">
        <div className="content-reading">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* Intro + Form */}
      <section className="pb-12 md:pb-24 px-4 sm:px-6">
        <div className="content-reading">
          <p className="text-body-charcoal text-[17px] leading-relaxed">
            Have questions about the Foundation, wildfire resilience, or how to
            get involved? We'd love to hear from you. Fill out the form below
            and we'll respond as soon as possible.
          </p>

          {/* Success message */}
          {success && (
            <div
              role="status"
              className="mt-8 rounded-[var(--radius-btn)] border border-secondary-green/30 bg-pale-green px-5 py-4 text-[16px] text-primary-green font-medium"
            >
              Thank you for reaching out! We'll get back to you soon.
            </div>
          )}

          {/* Error message */}
          {error && (
            <div
              role="alert"
              className="mt-8 rounded-[var(--radius-btn)] border border-ochre/30 bg-ochre/5 px-5 py-4 text-[16px] text-ochre font-medium"
            >
              Something went wrong. Please try again or email us directly at{" "}
              <a href="mailto:hello@goatsofsanclemente.com">
                hello@goatsofsanclemente.com
              </a>
            </div>
          )}

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
            noValidate={false}
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className={labelClasses}>
                Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className={labelClasses}>
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className={labelClasses}>
                Subject <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className={labelClasses}>
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                placeholder="Your message…"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </article>
  );
}
