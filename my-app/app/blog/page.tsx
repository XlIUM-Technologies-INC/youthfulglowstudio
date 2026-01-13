import RootLayout from "@/components/layouts/RootLayout";

export default function BlogPage() {
  return (
    <RootLayout>
      <section className="py-32 text-center bg-[#F5F0E9] min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-[#112250]" style={{fontFamily: 'Playfair Display, serif'}}>Skincare Insights</h1>
        <p className="text-xl md:text-2xl text-[#E0C58F] font-bold tracking-widest uppercase">Coming Soon</p>
        <div className="mt-8 w-24 h-1 bg-[#E0C58F] mx-auto animate-pulse"></div>
      </section>
    </RootLayout>
  );
}
