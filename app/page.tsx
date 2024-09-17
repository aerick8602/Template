export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen p-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1000] flex items-center justify-center">
        <img
          src="/webpagepng.png"
          alt="Background"
          className="object-cover"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-white">
        <div className="text-2xl">Home Page</div>
      </div>
    </div>
  );
}
