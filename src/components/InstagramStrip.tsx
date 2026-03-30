const images = [
  "https://static.showit.co/302/LoFiTsodnzp9s0IsUTbwlA/235620/as1a1870.jpg",
  "https://static.showit.co/302/ibTDV_Jgq5nf3igeiI1BhA/235620/as1a1898.jpg",
  "https://static.showit.co/302/hRWADyb8XxFz0ypffbDfKQ/235620/as1a1745.jpg",
  "https://static.showit.co/302/3AzVOiFITlEg0g3szId3zA/235620/as1a1687.jpg",
  "https://static.showit.co/302/y4VHQuDu0q-ZxHt7oKhqqA/235620/as1a1649.jpg",
];

const InstagramStrip = () => (
  <section className="py-12">
    <div className="text-center mb-8">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Follow @</span>
      <h3 className="font-heading text-2xl md:text-3xl font-semibold mt-1">firstandthirddesigns</h3>
    </div>
    <div className="grid grid-cols-5 gap-0">
      {images.map((img, i) => (
        <a
          key={i}
          href="https://instagram.com/firstandthirddesigns"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square overflow-hidden group"
        >
          <img
            src={img}
            alt={`Instagram photo ${i + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </a>
      ))}
    </div>
  </section>
);

export default InstagramStrip;
