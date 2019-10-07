import Head from 'next/head';

const Layout = ({ title, description, children }) => (
  <div className="flex items-center justify-center min-h-screen">
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={description} />
    </Head>
    <main className="max-w-md px-12 lg:px-0">{children}</main>
  </div>
);

export default Layout;
