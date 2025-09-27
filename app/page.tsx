import Layout from '../components/ui/Layout';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import HowItWorks from '../components/ui/HowItWorks';
import Pricing from '../components/ui/Pricing';
import Testimonials from '../components/ui/Testimonials';
import CTA from '../components/ui/CTA';
import StructuredData from '../components/seo/StructuredData';

export default function Home() {
  return (
    <Layout>
      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </Layout>
  );
}
