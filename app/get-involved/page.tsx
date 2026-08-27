"use client";

import SectionIntro from "../components/SectionIntro";
import VolunteerCTA from "../components/VolunteerCTA";

export default function GetInvolvedPage() {
  return (
    <article>
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="content-reading">
          <h1>Get Involved</h1>
        </div>
      </section>
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 pb-12 md:pb-16">

      {/* Volunteer Section */}
      <section className="py-10 md:py-16">
        <SectionIntro title="Volunteer With Us" />
        <p className="text-muted-gray text-[17px] leading-[1.6] max-w-[680px]">
          The Foundation is building a network of dedicated volunteers who care
          about wildfire resilience in San Clemente. Every volunteer role will
          have a clear purpose, safe steps, and responsible leaders. We use time,
          money, and other resources with care.
        </p>
        <p className="mt-4 text-muted-gray text-[17px] leading-[1.6] max-w-[680px]">
          We start with work we can do well. We learn as we go and grow only when
          we have the people, partners, and funds to do it right.
        </p>
        <div className="mt-8">
          <VolunteerCTA text="Volunteer With Us" href="/contact" />
        </div>
      </section>

      {/* Community & Partner Interest Form */}
      <section className="py-10 md:py-16">
        <SectionIntro title="Community & Partner Interest" />
        <p className="text-muted-gray text-[17px] leading-[1.6] max-w-[680px] mb-8">
          Interested in learning more, partnering, or volunteering? Fill out the
          form below and we&apos;ll be in touch.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 max-w-[680px]"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Name <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-[7px] border border-gray-300 px-4 py-3 text-[16px] text-gray-900 placeholder-gray-400 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 focus:outline-none transition-colors min-h-[44px]"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Email <span aria-hidden="true" className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-[7px] border border-gray-300 px-4 py-3 text-[16px] text-gray-900 placeholder-gray-400 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 focus:outline-none transition-colors min-h-[44px]"
              placeholder="you@example.com"
            />
          </div>

          {/* Interest Type */}
          <div>
            <label
              htmlFor="interest-type"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Interest Type
            </label>
            <select
              id="interest-type"
              name="interest-type"
              className="w-full rounded-[7px] border border-gray-300 px-4 py-3 text-[16px] text-gray-900 bg-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 focus:outline-none transition-colors min-h-[44px]"
            >
              <option value="volunteer">Volunteer</option>
              <option value="partner">Partner</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-[7px] border border-gray-300 px-4 py-3 text-[16px] text-gray-900 placeholder-gray-400 focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 focus:outline-none transition-colors resize-y min-h-[120px]"
              placeholder="Tell us how you'd like to get involved..."
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-primary-green text-white font-semibold text-[15px] px-6 py-3 rounded-[7px] min-h-[44px] hover:bg-primary-green/90 transition-colors cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      </div>
    </article>
  );
}
