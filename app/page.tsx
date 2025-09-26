import Layout from '../components/ui/Layout';
import Hero from '../components/ui/Hero';
import Features from '../components/ui/Features';
import HowItWorks from '../components/ui/HowItWorks';
import Testimonials from '../components/ui/Testimonials';
import Pricing from '../components/ui/Pricing';
import FAQ from '../components/ui/FAQ';
import CallToAction from '../components/ui/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </Layout>
  );
}
