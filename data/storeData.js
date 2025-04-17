const storeData = [
  {
    id: 1,
    name: "Revolution Emporium",
    address: "3081 North State Street, Ukiah, CA 95482",
    coordinates: [39.1649677, -123.2052067],
    distance: "Ukiah"
  },
  {
    id: 2,
    name: "Connected Sacramento",
    address: "2831 Fruitridge Rd, Suite E, Sacramento, CA 95820",
    coordinates: [38.5247212, -121.4769608],
    distance: "Sacramento"
  },
  {
    id: 3,
    name: "The Gas Station Sacramento",
    address: "1750 Iris Ave, Suite 105, Sacramento, CA 95815",
    coordinates: [38.6064, -121.4394],
    distance: "Sacramento"
  },
  {
    id: 4,
    name: "T.H.Chi",
    address: "1300 Clay St, Suite 600, Oakland, CA 94612",
    coordinates: [37.8048398, -122.2723837],
    distance: "Oakland"
  },
  {
    id: 5,
    name: "Oakanna",
    address: "3238 Lakeshore Ave, Oakland, CA 94610",
    coordinates: [37.8107512, -122.2425718],
    distance: "Oakland"
  },
  {
    id: 6,
    name: "GreenWolf Bellflower",
    address: "10040 Artesia Pl, Bldg 1, Bellflower, CA 90706",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 7,
    name: "Velvet Cannabis Martinez",
    address: "4808 Sunrise Dr, Suite A, Martinez, CA 94553",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 8,
    name: "Velvet Cannabis Wilshire",
    address: "12071 Wilshire Blvd, Los Angeles, CA 90025",
    coordinates: [34.0480, -118.4663],
    distance: "Los Angeles"
  },
  {
    id: 9,
    name: "Velvet Cannabis Eagle Rock",
    address: "1118 Colorado Blvd, Los Angeles, CA 90041",
    coordinates: [34.1393, -118.2137],
    distance: "Los Angeles"
  },
  {
    id: 10,
    name: "Dr. Greenthumb's San Diego",
    address: "8760 Campo Road, La Mesa, CA 91941",
    coordinates: [32.7378, -116.9793],
    distance: "San Diego"
  },
  {
    id: 11,
    name: "Movocan",
    address: "1632 Gateway Road, Suite 6, Calexico, CA 92231",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 12,
    name: "Cookies Mendocino",
    address: "1104 State St S, Ukiah, CA 95482",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 13,
    name: "Green Heron",
    address: "2570 Main St, Suite 1, Lakeport, CA 95453",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 14,
    name: "Velvet Cannabis Napa",
    address: "2441 2nd St, Napa, CA 94559",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 15,
    name: "The Prime Leaf",
    address: "836 E Hobsonway, Blythe, CA 92225",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 16,
    name: "One Plant",
    address: "261 Business Park Way, Atwater, CA 95301",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 17,
    name: "One Plant Lompoc",
    address: "119 A St N, Lompoc, CA 93436",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 18,
    name: "The Healing Heart Collective Distro",
    address: "7901 Moss Ave, California City, CA 93505",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 19,
    name: "Leo's World",
    address: "265 L St, Crescent City, CA 95531",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 20,
    name: "The Healing Tree Retail",
    address: "480 3rd St, Lake Elsinore, CA 92530",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 21,
    name: "One Plant Antioch",
    address: "2701 10th St W, Antioch, CA 94509",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 22,
    name: "One Plant Castroville",
    address: "10665 Merritt St, Castroville, CA 95012",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 23,
    name: "One Plant Salinas",
    address: "10031 Reese Cir, Salinas, CA 93907",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 24,
    name: "One Plant Santa Cruz",
    address: "3088 Winkle Ave, Suite C, Santa Cruz, CA 95065",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 25,
    name: "Premium Blossom",
    address: "200 N Main St, Porterville, CA 93257",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 26,
    name: "Puff n' Luff",
    address: "8666 Lindley Ave, Northridge, CA 91325",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 27,
    name: "The Highlands",
    address: "7000 Tesla Road, #A, Livermore, California 94550",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 28,
    name: "Connected Stockton",
    address: "678 North Wilson Way, Stockton, CA 95205",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 29,
    name: "The Gas Station 760",
    address: "1005 E Broadway St, Needles, Ca 92363",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 30,
    name: "Banyan Tree",
    address: "213 E Sierra Ave, Fresno, CA 93710",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 31,
    name: "S & S Vibes",
    address: "1215 South Buena Vista Street, Unit J, San Jacinto, CA 92583",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 32,
    name: "Cannagram",
    address: "2511 Connie Drive, Suite 110, Sacramento, CA 95815",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 33,
    name: "Healthy Herbal Care",
    address: "7123 Sepulveda Blvd, Van Nuys, CA 91405",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 34,
    name: "Herbarium Distribution",
    address: "979 La Brea Ave N, West Hollywood, CA 90038",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 35,
    name: "The Cake House Vista",
    address: "1275 S Santa Fe Ave, Suite 103, Vista, CA 92083",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 36,
    name: "Lakeside Herbal Solutions",
    address: "4345 Mullen Ave, Clearlake, CA 95422",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 37,
    name: "Tahoe Green",
    address: "3930 Lake Tahoe Blvd, South Lake Tahoe, CA 96150",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 38,
    name: "Cali Blaze Co Delivery",
    address: "1492 Railroad St, Oceano, CA 93445",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 39,
    name: "Budology",
    address: "301 State St N, San Jacinto, CA 92583",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 40,
    name: "Elevate Lompoc",
    address: "118 South H St, Lompoc, CA 93436",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 41,
    name: "Sunset Pipeline",
    address: "2165 Irving St, San Francisco, CA 94122",
    coordinates: [37.7634, -122.4835],
    distance: "San Francisco"
  },
  {
    id: 42,
    name: "North Beach Pipeline",
    address: "1335 Grant Ave, San Francisco, CA 94133",
    coordinates: [37.7998, -122.4066],
    distance: "San Francisco"
  },
  {
    id: 43,
    name: "Calm and Collective",
    address: "2515 E Anaheim St, Long Beach, CA 90804",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 44,
    name: "Sol Bay Gardens",
    address: "4690 East 2nd Street, Unit 7, Benicia, CA 94510",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 45,
    name: "Skunkmaster",
    address: "233 E Channel Island Blvd, Port Hueneme, CA 93041",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 46,
    name: "Mystika",
    address: "1763 Ethanac Rd, Perris, CA 92570",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 47,
    name: "Blazed Utopia",
    address: "620 S State St, San Jacinto, CA 92583",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 48,
    name: "JAHnetics",
    address: "1150 Quesada Ave, San Francisco, CA 94124",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 49,
    name: "The Good People Farms",
    address: "5080 Chiles Rd, Suite 6, Davis, CA 95618",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 50,
    name: "HPC",
    address: "501 W Channel Islands Blvd, Unit 302, Port Hueneme, CA 93041",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 51,
    name: "Jayden's Journey",
    address: "5054 Pentecost Dr STE E, Modesto, CA 95356",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 52,
    name: "Squintz x Foreign",
    address: "20505 Roscoe Blvd, #103, Winnetka, CA 91306",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 53,
    name: "The Palm Springs Dispensary",
    address: "690 Garnet Ave W, Palm Springs, CA 92262",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 54,
    name: "MOCA Humboldt",
    address: "204 4th St, Eureka, CA 95501",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 55,
    name: "Confidential Biotherapy Delivery",
    address: "407 North N St, Lompoc, CA 93436",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 56,
    name: "The Coachella Releaf",
    address: "86705 Avenue 54, Unit H, Coachella, CA 92236",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 57,
    name: "Mission Organic Center",
    address: "5258 Mission St, San Francisco, CA 94112",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 58,
    name: "Redbud Apothecary",
    address: "3805 Main St., Kelseyville, CA 95451",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 59,
    name: "High Rollers",
    address: "740 S Vella Rd, Palm Springs, CA 92264",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 60,
    name: "Culture Cannabis Club Jurupa Valley",
    address: "10810 Limonite Ave, Jurupa Valley, CA 91752",
    coordinates: null,
    distance: "TBD"
  },
  {
    id: 61,
    name: "Euphoros",
    address: "2934 N Broadway, Los Angeles, CA 90031",
    coordinates: null,
    distance: "TBD"
  }
];

export default storeData;