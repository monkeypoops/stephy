"use client";

export default function ScrollingLogos() {
  const festivals = [
    "L'Officiel",
    "Forbes",
    "Arts Fuse",
    "Edible Manhattan",
    "Festival of Cinema NYC",
    "Soho London Independent Film Festival",
    "New York Science Fiction Film Festival",
    "New York State International Film Festival",
    "Independent Film Festival Boston",
    "BELIFF Be Epic London International Film Festival",
    "Scottish Queer International Film Festival",
    "New York Lift-Off Film Festival",
    "Romford Horror Film Festival",
    "Silicon Valley Asian Pacific Film Fest",
  ];

  // Function to determine font size based on text length
  const getFontSize = (text: string) => {
    if (text.length <= 12) return "text-base md:text-lg";
    if (text.length <= 20) return "text-sm md:text-base";
    if (text.length <= 30) return "text-xs md:text-sm";
    return "text-[10px] md:text-xs";
  };

  // Triple for seamless looping
  const scrollingFestivals = [...festivals, ...festivals, ...festivals];

  return (
    <div className="w-full overflow-hidden py-2 bg-white relative">
      <div className="animate-scroll inline-block whitespace-nowrap">
        {scrollingFestivals.map((festival, index) => {
          const fontSize = getFontSize(festival);
          const isShort = festival.length <= 12;
          
          return (
            <span
              key={index}
              className={`inline-block mx-4 text-black align-middle ${fontSize} ${isShort ? 'font-medium' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {festival}
            </span>
          );
        })}
      </div>
    </div>
  );
}