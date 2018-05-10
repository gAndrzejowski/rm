const mockMovies = [
    {
        "id": 185567,
        "title": "Zulu",
        "tagline": "",
        "vote_average": 6.7,
        "vote_count": 200,
        "release_date": "2013-12-04",
        "poster_path": "https://image.tmdb.org/t/p/w500/xg7Dh7mjevDgznqw9JHYccNo9ZQ.jpg",
        "overview": "As a child, Ali Neuman narrowly escaped being murdered by Inkhata, a militant political party at war with Nelson Mandela's African National Congress. Only he and his mother survived the carnage of those years. But as with many survivors, the psychological scars remain.",
        "budget": 16000000,
        "revenue": 0,
        "genres": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "runtime": 110
    },
    {
        "id": 269149,
        "title": "Zootopia",
        "tagline": "Welcome to the urban jungle.",
        "vote_average": 7.7,
        "vote_count": 6795,
        "release_date": "2016-02-11",
        "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
        "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        "budget": 150000000,
        "revenue": 1023784195,
        "genres": [
            "Animation",
            "Adventure",
            "Family",
            "Comedy"
        ],
        "runtime": 108
    },
    {
        "id": 19908,
        "title": "Zombieland",
        "tagline": "This place is so dead",
        "vote_average": 7.2,
        "vote_count": 4509,
        "release_date": "2009-10-07",
        "poster_path": "https://image.tmdb.org/t/p/w500/vUzzDpVrab1BOG3ogxhRGfLN94d.jpg",
        "overview": "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
        "budget": 23600000,
        "revenue": 102391382,
        "genres": [
            "Comedy",
            "Horror"
        ],
        "runtime": 88
    },
    {
        "id": 1949,
        "title": "Zodiac",
        "tagline": "There's more than one way to lose your life to a killer.",
        "vote_average": 7.3,
        "vote_count": 2780,
        "release_date": "2007-03-02",
        "poster_path": "https://image.tmdb.org/t/p/w500/bgLyOROfFQI3FqYL7jQbiaV8lkN.jpg",
        "overview": "The true story of the investigation of the \"Zodiac Killer\", a serial killer who terrified the San Francisco Bay Area, taunting police with his ciphers and letters.  The case becomes an obsession for four men as their lives and careers are built and destroyed by the endless trail of clues.",
        "budget": 65000000,
        "revenue": 84785914,
        "genres": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "runtime": 157
    },
    {
        "id": 97630,
        "title": "Zero Dark Thirty",
        "tagline": "The Greatest Manhunt in History",
        "vote_average": 6.7,
        "vote_count": 2028,
        "release_date": "2012-12-19",
        "poster_path": "https://image.tmdb.org/t/p/w500/yg6IDNucLAEj7E5loTyTnUW2pgb.jpg",
        "overview": "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
        "budget": 40000000,
        "revenue": 132820716,
        "genres": [
            "Thriller",
            "Drama",
            "History"
        ],
        "runtime": 157
    },
    {
        "id": 6795,
        "title": "Zathura: A Space Adventure",
        "tagline": "Adventure Is Waiting",
        "vote_average": 6.1,
        "vote_count": 1080,
        "release_date": "2005-11-06",
        "poster_path": "https://image.tmdb.org/t/p/w500/amqgIuISRBt8tsZM6cTT6gO9WLR.jpg",
        "overview": "After their father is called into work, two young boys, Walter and Danny, are left in the care of their teenage sister, Lisa, and told they must stay inside. Walter and Danny, who anticipate a boring day, are shocked when they begin playing Zathura, a space-themed board game, which they realize has mystical powers when their house is shot into space. With the help of an astronaut, the boys attempt to return home.",
        "budget": 65000000,
        "revenue": 64321501,
        "genres": [
            "Family",
            "Fantasy",
            "Science Fiction",
            "Adventure"
        ],
        "runtime": 101
    },
    {
        "id": 133931,
        "title": "Zambezia",
        "tagline": "Airborne to be wild.",
        "vote_average": 5.2,
        "vote_count": 89,
        "release_date": "2012-06-05",
        "poster_path": "https://image.tmdb.org/t/p/w500/dLZTSTe4czdJ3Fr6vwy8XwVzLF5.jpg",
        "overview": "Set in a bustling bird city on the edge of the majestic Victoria Falls, \"Zambezia\" is the story of Kai - a naïve, but high-spirited young falcon who travels to the bird city of \"Zambezia\" where he discovers the truth about his origins and, in defending the city, learns how to be part of a community",
        "budget": 20000000,
        "revenue": 0,
        "genres": [
            "Comedy",
            "Animation",
            "Adventure",
            "Family"
        ],
        "runtime": 83
    },
    {
        "id": 10358,
        "title": "Zack and Miri Make a Porno",
        "tagline": "What would you do to get out of debt?",
        "vote_average": 6.1,
        "vote_count": 894,
        "release_date": "2008-09-18",
        "poster_path": "https://image.tmdb.org/t/p/w500/zxwEJBhSSu5AuKTTd4ugWaCqmg.jpg",
        "overview": "Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.",
        "budget": 24000000,
        "revenue": 42105111,
        "genres": [
            "Comedy"
        ],
        "runtime": 102
    }
]
export default mockMovies;