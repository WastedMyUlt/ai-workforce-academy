import Layout from '../../components/ui/Layout';

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none">
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using AI Workforce Academy ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              AI Workforce Academy provides online courses, training materials, and resources for building AI automation systems. Our service includes:
            </p>
            <ul>
              <li>Access to video courses and written materials</li>
              <li>Downloadable templates and workflow files</li>
              <li>Community access and support</li>
              <li>Progress tracking and dashboard features</li>
              <li>Email support and guidance</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Service, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and update your information to keep it accurate and current</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2>4. Subscription and Payment</h2>
            <h3>4.1 Subscription Plans</h3>
            <p>
              We offer various subscription plans with different features and pricing. All prices are displayed in USD and are subject to change with notice.
            </p>
            
            <h3>4.2 Payment Terms</h3>
            <ul>
              <li>Subscriptions are billed in advance on a monthly or annual basis</li>
              <li>Payment is due immediately upon subscription</li>
              <li>We accept major credit cards and PayPal</li>
              <li>All payments are processed securely through third-party payment processors</li>
            </ul>

            <h3>4.3 Refunds</h3>
            <p>
              We offer a 30-day money-back guarantee for new subscriptions. Refund requests must be submitted within 30 days of initial purchase. Refunds are not available for renewals or after the 30-day period.
            </p>

            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Our Content</h3>
            <p>
              All content provided through the Service, including courses, videos, text, graphics, logos, and software, is owned by AI Workforce Academy or our licensors and is protected by copyright and other intellectual property laws.
            </p>

            <h3>5.2 License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your personal or business use, subject to these Terms.
            </p>

            <h3>5.3 Restrictions</h3>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or distribute our content without permission</li>
              <li>Share your account credentials with others</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove copyright or proprietary notices</li>
            </ul>

            <h2>6. User-Generated Content</h2>
            <p>
              You may submit comments, questions, or other content through the Service. By submitting content, you grant us a worldwide, royalty-free license to use, reproduce, and distribute such content in connection with the Service.
            </p>

            <h2>7. Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>

            <h2>8. Prohibited Uses</h2>
            <p>You may not use the Service:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>

            <h2>10. Disclaimers</h2>
            <p>
              The Service is provided "as is" and "as available" without any warranties of any kind. We do not guarantee that:
            </p>
            <ul>
              <li>The Service will be uninterrupted or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
              <li>The Service will meet your specific requirements</li>
            </ul>

            <h2>11. Limitation of Liability</h2>
            <p>
              In no event shall AI Workforce Academy be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>

            <h2>12. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless AI Workforce Academy from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the Service or violation of these Terms.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2"><strong>AI Workforce Academy</strong></p>
              <p className="mb-2">Email: legal@aiworkforceacademy.com</p>
              <p className="mb-2">Address: 123 Innovation Drive, Tech City, TC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> These terms are effective as of the date listed above. By continuing to use our Service after any changes to these Terms, you agree to be bound by the revised Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
