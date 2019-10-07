import { Layout } from '../components';

const HomePage = () => (
  <Layout
    title="La Pelle"
    description="La Pelle is an independently owned and operated spa based in Lewiston, New York"
  >
    <div className="text-center">
      <img className="mx-auto mb-12" src="/static/logo.png" />
      <p>
        La Pelle is an independently owned and operated spa by Licensed
        Esthetician <strong>Christina Zaroian</strong> that specializes in
        Facials, Airbrush Tanning, Waxing and Eyelash &amp; Eyebrow Tinting.
      </p>
      <p className="text-xs uppercase text-gray-800">
        <a href="https://goo.gl/maps/z1HJJZSKWezUDSXu8">
          765 Center St. Lewiston, NY
        </a>{' '}
        | <a href="tel:716-807-9706">716-807-9706</a>
      </p>
    </div>
  </Layout>
);

export default HomePage;
