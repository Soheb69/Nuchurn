import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F5F3ED]">
      {/* Header */}
      <header className="bg-[#2C2C2C] border-b border-[#D4AF37]/20 py-6 px-6">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <a 
            href="/"
            className="flex items-center gap-3 text-[#D4AF37] hover:text-[#D4AF37]/70 transition-colors group"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
            }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-wider text-sm">BACK TO HOME</span>
          </a>
          <h1 
            className="text-[#F5F3ED]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
            }}
          >
            NüChurn
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title Section */}
            <div className="text-center mb-16">
              <h2 
                className="text-[#2C2C2C] mb-4"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                Privacy Policy
              </h2>
              <p className="text-[#2C2C2C]/60 tracking-wider text-sm">
                Last Updated: November 18, 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white shadow-lg p-12 space-y-10">
              {/* Introduction */}
              <section>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  Welcome to NüChurn ("we," "us," or "our"). At NüChurn, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                  <a href="https://www.nuchurn.com" className="text-[#D4AF37] hover:underline">
                    https://www.nuchurn.com
                  </a>{" "}
                  (the "Website").
                </p>
                <p className="text-[#2C2C2C]/80 leading-relaxed mt-4">
                  By using or accessing the Website, you agree to the collection and use of your information in accordance with this Privacy Policy.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  1. Information We Collect
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-6">
                  We may collect different types of information when you interact with our Website, including:
                </p>

                <div className="space-y-6 ml-6">
                  <div>
                    <h4 className="text-[#2C2C2C] font-semibold mb-3">a) Personal Information</h4>
                    <ul className="space-y-2 text-[#2C2C2C]/80">
                      <li>• Name</li>
                      <li>• Email address</li>
                      <li>• Phone number (if provided)</li>
                      <li>• Company or business name</li>
                      <li>• Messages or content submitted via contact forms</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C2C2C] font-semibold mb-3">b) Usage and Technical Data</h4>
                    <ul className="space-y-2 text-[#2C2C2C]/80">
                      <li>• IP address</li>
                      <li>• Browser type and version</li>
                      <li>• Device type and operating system</li>
                      <li>• Pages visited, time spent, and navigation patterns</li>
                      <li>• Referring and exit pages</li>
                      <li>• Analytics data for website performance improvement</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#2C2C2C] font-semibold mb-3">c) Cookies and Tracking Technologies</h4>
                    <p className="text-[#2C2C2C]/80 leading-relaxed mb-2">
                      We use cookies and similar tracking technologies to enhance your experience. This may include:
                    </p>
                    <ul className="space-y-2 text-[#2C2C2C]/80">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Preference cookies to remember your settings</li>
                      <li>• Analytics cookies to understand how you use our Website</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  2. How We Use Your Information
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="space-y-2 text-[#2C2C2C]/80 ml-6">
                  <li>• To provide, operate, and maintain our Website</li>
                  <li>• To respond to your inquiries and contact requests</li>
                  <li>• To send newsletters or promotional updates (only with your consent)</li>
                  <li>• To analyze website usage and improve performance, design, and user experience</li>
                  <li>• To detect, prevent, and address technical issues, fraud, or misuse</li>
                  <li>• To comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  3. Sharing and Disclosure of Your Information
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-4">
                  We do not sell your personal information to third parties. However, we may share your data in the following limited circumstances:
                </p>
                <ul className="space-y-3 text-[#2C2C2C]/80 ml-6">
                  <li>
                    <strong className="text-[#2C2C2C]">Service Providers:</strong> We may share your information with trusted third-party vendors, contractors, or service providers who perform services on our behalf (e.g., website analytics, email marketing platforms, customer support tools).
                  </li>
                  <li>
                    <strong className="text-[#2C2C2C]">Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal processes, such as a court order or government request.
                  </li>
                  <li>
                    <strong className="text-[#2C2C2C]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction, with appropriate confidentiality protections in place.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  4. Data Retention
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-4">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul className="space-y-2 text-[#2C2C2C]/80 ml-6">
                  <li>• Contact form submissions are retained for as long as needed to respond to your inquiry and maintain our business relationship</li>
                  <li>• Analytics data may be stored in aggregate or anonymized form for trend analysis and website improvement</li>
                  <li>• Email marketing data is retained until you unsubscribe or request deletion</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  5. Security of Your Information
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  We take the security of your personal information seriously and implement reasonable organizational, technical, and administrative measures to protect against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  6. Your Privacy Rights
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights with respect to your personal data, including:
                </p>
                <ul className="space-y-2 text-[#2C2C2C]/80 ml-6">
                  <li>• <strong className="text-[#2C2C2C]">Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Correction:</strong> Update or correct inaccurate or incomplete data</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Deletion:</strong> Request deletion of your personal data</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Restriction:</strong> Request that we limit how we use your data</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Object:</strong> Object to certain types of processing</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Data Portability:</strong> Receive your data in a portable format</li>
                  <li>• <strong className="text-[#2C2C2C]">Right to Withdraw Consent:</strong> Withdraw consent where processing is based on your consent</li>
                </ul>
                <p className="text-[#2C2C2C]/80 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  7. Cookies and Tracking Preferences
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  We use cookies to improve your experience on our Website. You can control or delete cookies through your browser settings. Please note that disabling cookies may affect the functionality and performance of certain features on the Website.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  8. Third-Party Links
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  Our Website may contain links to third-party websites or services that are not operated by us. If you click on a third-party link, you will be directed to that party's site. We strongly advise you to review the privacy policy of every website you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  9. Children's Privacy
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  Our Website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. We will take steps to remove such information from our systems.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h3 
                  className="text-[#2C2C2C] mb-4"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  10. Changes to This Privacy Policy
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. When we make changes, we will revise the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically. Your continued use of the Website after any changes constitutes your acceptance of the updated Privacy Policy.
                </p>
              </section>

              {/* Contact Section */}
              <section className="border-t-2 border-[#D4AF37]/20 pt-10">
                <h3 
                  className="text-[#2C2C2C] mb-6"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 600,
                  }}
                >
                  11. Contact Us
                </h3>
                <p className="text-[#2C2C2C]/80 leading-relaxed mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us at:
                </p>
                <div className="bg-[#F5F3ED] p-8 space-y-4">
                  <p className="text-[#2C2C2C]">
                    <strong className="block mb-2">NüChurn</strong>
                  </p>
                  <div className="flex items-center gap-3 text-[#2C2C2C]/80">
                    <Mail size={18} className="text-[#D4AF37]" />
                    <a href="mailto:contact@nuchurn.com" className="hover:text-[#D4AF37] transition-colors">
                      contact@nuchurn.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#2C2C2C]/80">
                    <Phone size={18} className="text-[#D4AF37]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <p className="text-[#2C2C2C]/80 pt-4">
                    We will respond to your inquiry as soon as reasonably possible.
                  </p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="bg-[#D4AF37]/10 p-8 border-l-4 border-[#D4AF37]">
                <p className="text-[#2C2C2C]/80 leading-relaxed">
                  <strong className="text-[#2C2C2C]">Acknowledgment:</strong> By using the NüChurn Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                </p>
              </section>
            </div>

            {/* Back to Home CTA */}
            <div className="text-center mt-12">
              <a 
                href="/"
                className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-3 tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, "", "/");
                  window.dispatchEvent(new PopStateEvent("popstate"));
                  window.scrollTo(0, 0);
                }}
              >
                RETURN TO HOME
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#2C2C2C] py-8 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-[#F5F3ED]/60 text-sm">
            © 2025 NüChurn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}