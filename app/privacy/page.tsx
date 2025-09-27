import Layout from '../../components/ui/Layout';

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
            
            <h2>1. Introduction</h2>
            <p>
              AI Workforce Academy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Profile information and preferences</li>
              <li>Communication history with our support team</li>
            </ul>

            <h3>2.2 Usage Information</h3>
            <p>We automatically collect certain information about your use of our Service:</p>
            <ul>
              <li>Course progress and completion data</li>
              <li>Time spent on lessons and activities</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Website usage patterns and analytics</li>
            </ul>

            <h3>2.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, including:
            </p>
            <ul>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for personalized content</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>Providing and maintaining our Service</li>
              <li>Processing payments and managing subscriptions</li>
              <li>Personalizing your learning experience</li>
              <li>Communicating with you about your account and our services</li>
              <li>Providing customer support</li>
              <li>Improving our Service and developing new features</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            
            <h3>4.1 Third-Party Service Providers</h3>
            <p>We may share your information with trusted third-party service providers who assist us in:</p>
            <ul>
              <li>Payment processing (Stripe, PayPal)</li>
              <li>Email communications (SendGrid, Mailchimp)</li>
              <li>Analytics and performance monitoring (Google Analytics)</li>
              <li>Customer support tools</li>
              <li>Cloud hosting and data storage</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to:</p>
            <ul>
              <li>Court orders or legal processes</li>
              <li>Government requests or investigations</li>
              <li>Protection of our rights and property</li>
              <li>Safety of our users or the public</li>
            </ul>

            <h3>4.3 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
            </p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate security measures to protect your information:</p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Secure payment processing</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods as required by law or for legitimate business purposes.
            </p>

            <h2>7. Your Rights and Choices</h2>
            
            <h3>7.1 Access and Control</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h3>7.2 Cookie Preferences</h3>
            <p>
              You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
            </p>

            <h3>7.3 Marketing Communications</h3>
            <p>
              You can unsubscribe from marketing emails at any time by clicking the unsubscribe link or contacting us directly.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>

            <h2>10. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>

            <h2>11. European Privacy Rights</h2>
            <p>
              If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul>
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>AI Workforce Academy</strong></p>
              <p className="mb-2">Email: privacy@aiworkforceacademy.com</p>
              <p className="mb-2">Address: 123 Innovation Drive, Tech City, TC 12345</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Data Protection Officer: dpo@aiworkforceacademy.com</p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your privacy. If you have any concerns or questions about how we handle your data, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
