"use client";
import { useState } from "react";
import { company } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

type FormData = {
  name: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const inputCls =
  "w-full border border-border rounded px-4 py-3 text-navy text-sm placeholder:text-slate/40 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/15 transition bg-white";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // ponytail: mailto fallback until EmailJS is wired up
    const subject = encodeURIComponent(
      `Quote Request — ${form.service || "General"} | ${form.company || form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${company.email2}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-off-white py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="" className="text-center mb-8 lg:mb-14">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-serif text-navy text-[28px] sm:text-4xl font-bold">
            Request a Quote
          </h2>
          <p className="text-slate mt-3 max-w-lg mx-auto">
            Tell us your requirement and we'll get back to you with pricing and
            timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div data-reveal="" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="ACME Industries"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select a service</option>
                    <option>Laser Cutting — Mild Steel</option>
                    <option>Laser Cutting — Aluminium</option>
                    <option>Laser Cutting — Stainless Steel</option>
                    <option>CNC Bending</option>
                    <option>Laser Cutting + CNC Bending</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Message / Requirement
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Material, thickness, quantity, dimensions — or share your drawing on WhatsApp."
                  className={`${inputCls} resize-y`}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center text-base py-4"
              >
                Send Quote Request
                <span className="material-symbols-outlined text-lg">send</span>
              </Button>

              {sent && (
                <p className="text-teal text-sm text-center font-medium">
                  ✓ Request sent — we'll be in touch shortly.
                </p>
              )}
            </form>
          </div>

          {/* Contact details */}
          <div data-reveal="" data-reveal-delay="150" className="lg:col-span-2">
            <div className="bg-off-white rounded-lg border border-border p-6 space-y-6 h-full">
              {/* WhatsApp CTA */}
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-teal text-white p-4 rounded-lg hover:bg-teal-dark transition-colors"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-semibold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/65 text-xs mt-0.5">
                    Fastest way to share drawings & get a quote
                  </p>
                </div>
              </a>

              {/* Details */}
              <div className="space-y-5">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-teal text-xl shrink-0 mt-0.5">
                    phone
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${company.phone1}`}
                      className="text-navy text-sm font-medium hover:text-teal block"
                    >
                      {company.phone1}
                    </a>
                    <a
                      href={`tel:${company.phone2}`}
                      className="text-navy text-sm font-medium hover:text-teal block"
                    >
                      {company.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-teal text-xl shrink-0 mt-0.5">
                    mail
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.email1}`}
                      className="text-navy text-sm font-medium hover:text-teal block"
                    >
                      {company.email1}
                    </a>
                    <a
                      href={`mailto:${company.email2}`}
                      className="text-navy text-sm font-medium hover:text-teal block"
                    >
                      {company.email2}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-teal text-xl shrink-0 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                      Address
                    </p>
                    <p className="text-navy text-sm leading-relaxed">
                      {company.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        company.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal text-xs font-medium hover:text-teal-dark mt-1 inline-block"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-teal text-xl shrink-0 mt-0.5">
                    schedule
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-1">
                      Working Hours
                    </p>
                    <p className="text-navy text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-slate text-xs mt-0.5">
                      Sunday by appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
