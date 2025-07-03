import Link from 'next/link';
import { NextPage } from 'next';

const ThankYouPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-green-800 mb-6">
          Your message has been sent successfully.<br/>
          We'll get back to you shortly.
        </p>
        <Link href="/" className="text-green-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
