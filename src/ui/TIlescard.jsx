import { ArrowRight } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react"; // HeroUI components
import Image from "next/image";


const TIlescard = ({ tile }) => {
    return (
        <div>
            <Card className="w-full max-w-[400px] shadow-md border border-gray-100 overflow-hidden group">
                <div className="relative h-60 w-full overflow-hidden rounded-lg">
                    <Image
                        src={tile.image}
                        alt={tile.title || "Tile image"} // অর্থবহ alt টেক্সট দেওয়া ভালো
                        fill // এটি ইমেজকে তার প্যারেন্ট div (h-60) অনুযায়ী জায়গা নিতে বাধ্য করবে
                        className="object-cover transition-transform duration-500 group-hover:scale-105" // object-cover ই ইমেজকে সমানভাবে ফিট করে
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // পারফরম্যান্সের জন্য এটি দেওয়া ভালো
                    />
                </div>

                <Card.Header className="flex-col items-start px-5 pt-5">
                    <div className="flex items-center gap-2 mb-1">
                        <ArrowRight className="text-blue-600 size-4" />
                        <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">
                            Premium Collection
                        </p>
                    </div>
                    <Card.Title className="text-xl font-bold text-gray-900 leading-tight">
                        {tile.title}
                    </Card.Title>
                    <Card.Description className="text-gray-500 text-sm mt-2 line-clamp-2">
                        {tile.description}
                    </Card.Description>
                </Card.Header>

                <Card.Footer className="px-5 pb-5 pt-2 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Price</span>
                        <span className="text-lg font-bold text-black">${tile.price}</span>
                    </div>

                    <button>
                        <Link
                            aria-label={`View ${tile.title} details`}
                            href={`/alltiles/${tile.id}`}
                            className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                        >
                            View Details
                            <Link.Icon className="ml-1 size-3" />
                        </Link>
                    </button>
                </Card.Footer>
            </Card>
            ;
        </div>
    );
};

export default TIlescard;