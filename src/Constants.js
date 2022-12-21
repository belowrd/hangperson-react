export const AlphabetsList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ü",
    "Ö",
    "Ä",
    "ß",
];

export const CategoryList = ["Christmas", "Coding", "Countries", "Colors"];

export const Colors = [
    "fuchsia~Fancy name for a shade of pink.",
    "salmon~Also the name of a fish.",
    "coral~Great Barrier Reef is famous for this.",
    "lavender~Flower used for aromatherapy.",
    "olive~Mediterranean fruit.",
    "peachpuff~Named after Peach.",
    "turquoise~Bluish green phosphate mineral.",
    "sienna~Yellowish brown Earth pigment.",
    "cadetblue~Shade of cyan.",
    "seashell~Found washed up on beaches.",
    "honeydew~Named after a fruit of the melon family.",
    "papayawhip~Named after papaya.",
    "amber~Glistening gem.",
    "beige~Color of natural wool.",
    "plum~Popular form of cake.",
];

export const Countries = [
    "burkina faso~.",
    "morocco~Mountainous country of western North Africa that lies directly across the Strait of Gibraltar from Spain.",
    "ireland~The Emerald Isle of Europe.",
    "austria~Lies in East Central Europe and is surrounded by 8 different countries.",
    "cameroon~.",
    "maldives~Island nation in the Indian ocean.",
    "croatia~The great Nikola Tesla was born here.",
    "malaysia~Home to the Petronas Towers.",
    "denmark~Home to LEGO and handball.",
    "jamaica~Caribbean nation known for its sports achievements.",
    "sweden~Home to Volvo and H&M.",
    "mexico~Famous for its ancient temples and wonderful cuisine.",
    "brazil~Asking artists to tour their country.",
    "iceland~Land of the volcanoes and hot springs.",
    "new zealand~my... PRECIOUS!!.",
    "argentina~Won the WC.",
    "japan~Land of the Rising Sun.",
    "portugal~Part of the Iberian peninsula.",
];

export const Coding = [
    "programmer~A person that writes code.",
    "function~Reusable chunk of code.",
    "array~A list of ordered data.",
    "for loop~A programming tool that is used to repeat a set of instructions.",
    "operator~A special character or series of characters that perform a task in JavaScript.",
    "error~JavaScript throws an...",
    "algorithm~A problemsolvong process.",
    "spiced academy~A coding bootcamp in Berlin.",
    "traffic~Signals transmitted through a communications system.",
    "stylesheet~Can control the layout of multiple web pages at once.",
    "fetch request~.",
    "post request~.",
    "chat gpt~.",
    "artificial intelligence~.",
    "it works on my machine~.",
];

export const Christmas = [
    "santa claus~The OG of Christmas himself.",
    "elf~.",
    "present~.",
    "festive~.",
    "gingerbread house~.",
    "christmas tree~.",
    "wishlist~.",
    "naughty~.",
    "fireplace~.",
    "family~.",
    "snowflake~.",
    "holiday~.",
    "buffet~.",
    "jesus~.",
    "goose~.",
    "turkey~.",
    "mulled wine~.",
    "grinch~.",
];

export const TotalWords = 70;
export const TotalLives = 7;

export const getEmoji = (category) => {
    let emoji = "";
    switch (category) {
        case "Colors":
            emoji = " 🎨";
            break;

        case "Countries":
            emoji = " 🏳️";
            break;

        case "Coding":
            emoji = " 👾";
            break;

        case "Christmas":
            emoji = " 🎄";
            break;
        default:
            emoji = [];
    }
    return emoji;
};
