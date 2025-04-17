import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Happy Place Cannabis</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let's get you back to your Happy Place." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-yellow-100 to-white">
        <h1 className="text-5xl font-display font-bold text-green-800 mb-4">Lost your way?</h1>
        <p className="text-lg text-green-700 mb-8">This page doesn't exist—let's get you back to your Happy Place.</p>
        <Link href="/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md transform hover:scale-105 active:scale-95">
          Return Home
        </Link>
      </div>
    </>
  );
}