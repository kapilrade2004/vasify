// HOME PAGE SEO (metadata only)
export const metadata = {
  title: "WhatsApp Business API Platform for Automated Engagement",
  description:
    "Supercharge customer engagement with VasifyTech’s automated WhatsApp Business API platform. Our services help you connect, sell, support, and scale your business.",
  openGraph: {
    title: "WhatsApp Business API Platform for Automated Engagement",
    description:
      "Supercharge customer engagement with VasifyTech’s automated WhatsApp Business API platform. Our services help you connect, sell, support, and scale your business.",
    url: "https://vasifytech.com/",
    type: "website",
    siteName: "VasifyTech",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
