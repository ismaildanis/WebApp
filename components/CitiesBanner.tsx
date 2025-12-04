import GradientText from "./Gradient"

export default function CitiesBanner(){
    const cities = [
        { id: 1, name: "İstanbul" },
        { id: 2, name: "Tekirdağ" },
        { id: 3, name: "Kocaeli" },
        { id: 4, name: "Ankara" },
        { id: 5, name: "Bolu" },
    ]

    return (
        <div className="bg-[var(--campaign-bg)] py-2 w-full overflow-x-hidden">
            <div className="flex items-center space-x-2 sm:space-x-3 py-10">
                <span className="text:xl sm:text-2xl md:text-3xl font-bold text-white">Hizmet Verdiğimiz İller </span>
            </div>
            <div className="flex animate-marquee whitespace-nowrap">
                {[...cities, ...cities].map((city, index) => (
                    <div key={`${city.id}-${index}`} className="flex-shrink-0 mx-4 sm:mx-8 flex items-center space-x-2 sm:space-x-3">
                        <GradientText 
                            colors={["#dbdbdbff", "#c99a44ff", "#8b6b2f", "#4079ff", "#8b6b2f"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-white font-medium text-xs sm:text-sm md:text-lg opacity-80 break-words"
                        >
                            {city.name}
                        </GradientText>
                    </div>
                ))}
                {[...cities, ...cities].map((city, index) => (
                    <div key={`${city.id}-${index}`} className="flex-shrink-0 mx-4 sm:mx-8 flex items-center space-x-2 sm:space-x-3">
                        <GradientText 
                            colors={["#dbdbdbff", "#c99a44ff", "#8b6b2f", "#4079ff", "#8b6b2f"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="text-white font-medium text-xs sm:text-sm md:text-lg opacity-80 break-words"
                        >
                            {city.name}
                        </GradientText>
                    </div>
                ))}
            </div>
        </div>
    )
}