const header = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: 0,
                endValue: 200,
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 1.2,
                property: 'scale',
            },
        ],
    },
];

const bannerLayer1 = [
    {
        start: 0,
        end: 480,
        properties: [
            {
                startValue: 0,
                endValue: 350,
                property: 'translateY',
            },
        ],
    },
];

const bannerLayer2 = [
    {
        start: 0,
        end: 480,
        properties: [
            {
                startValue: 0,
                endValue: 350,
                property: 'translateY',
            },
        ],
    },
];

const bannerLayer3 = [
    {
        start: 0,
        end: 480,
        properties: [
            {
                startValue: 1,
                endValue: 300,
                property: 'translateY',
            },
        ],
    },
];

const bannerLayer4 = [
    {
        start: 0,
        end: 480,
        properties: [
            {
                startValue: 0,
                endValue: 250,
                property: 'translateY',
            },
        ],
    },
];

const mFishSection1 = [
    {
        start: 0,
        duration: 300,
        properties: [
            {
                startValue: 0,
                endValue: 10,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 0.5,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: -300,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 300,
        duration: 300,
        properties: [
            {
                startValue: 10,
                endValue: 20,
                property: 'rotateZ',
            },
            {
                startValue: 0.5,
                endValue: 0,
                property: 'scale',
            },
            {
                startValue: -300,
                endValue: -600,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
];

const mFishSection2 = [
    {
        start: 0,
        duration: 400,
        properties: [
            {
                startValue: 0,
                endValue: -20,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 1.25,
                property: 'scale',
            },
            {
                startValue: -768,
                endValue: 100,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 400,
        duration: 400,
        properties: [
            {
                startValue: -20,
                endValue: -45,
                property: 'rotateZ',
            },
            {
                startValue: 1.25,
                endValue: 0.75,
                property: 'scale',
            },
            {
                startValue: 100,
                endValue: 768,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
];

const mFishSection3 = [
    {
        start: 0,
        end: 800,
        properties: [
            {
                startValue: 140,
                endValue: 140,
                property: 'translateX',
            },
            {
                startValue: 50,
                endValue: 50,
                property: 'translateY',
            },
        ],
    },
    {
        start: 800,
        duration: 400,
        properties: [
            {
                startValue: 0,
                endValue: 5,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 1.5,
                property: 'scale',
            },
            {
                startValue: 140,
                endValue: -100,
                property: 'translateX',
            },
            {
                startValue: 50,
                endValue: -100,
                property: 'translateY',
            },
        ],
    },
];

const mFishSection4 = [
    {
        start: 0,
        end: 1200,
        properties: [
            {
                startValue: 0,
                endValue: 0,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 1200,
        duration: 400,
        properties: [
            {
                startValue: 0,
                endValue: -5,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 1.5,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: 100,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: -100,
                property: 'translateY',
            },
        ],
    },
];

const groupOfFish1 = [
    {
        start: 'self',
        end: '.rock-left',
        properties: [
            {
                startValue: 0,
                endValue: 10,
                property: 'rotateZ',
            },
            {
                startValue: 0.5,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: -20,
                endValue: 10,
                unit: '%',
                property: 'translateX',
            },
            {
                startValue: 10,
                endValue: 20,
                unit: '%',
                property: 'translateY',
            },
        ],
    },
];

const groupOfFish3 = [
    {
        start: 'self',
        duration: '20%',
        properties: [
            {
                startValue: 0.5,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: -20,
                endValue: 10,
                unit: '%',
                property: 'translateX',
            },
        ],
    },
];

const groupOfFish4 = [
    {
        start: 'self',
        duration: '15%',
        properties: [
            {
                startValue: 0.5,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: -20,
                endValue: 10,
                unit: '%',
                property: 'translateX',
            },
        ],
    },
];

const groupOfFish5 = [
    {
        start: 'self',
        end: 'footer',
        properties: [
            {
                startValue: 0.5,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: -20,
                endValue: 10,
                unit: '%',
                property: 'translateX',
            },
        ],
    },
];

const groupOfTurtle = [
    {
        start: 'self',
        duration: '15%',
        properties: [
            {
                startValue: 0.5,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: -20,
                endValue: 10,
                unit: '%',
                property: 'translateX',
            },
        ],
    },
];

const groupOfJellyfish = [
    {
        start: 'self',
        duration: '15%',
        properties: [
            {
                startValue: 0.3,
                endValue: 0.6,
                property: 'scale',
            },
            {
                startValue: 20,
                endValue: -100,
                unit: '%',
                property: 'translateY',
            },
        ],
    },
];

const fishSection1 = [
    {
        start: 0,
        end: 380,
        properties: [
            {
                startValue: 0,
                endValue: 0,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: 200,
                property: 'translateY',
            },
        ],
    },
    {
        start: 480,
        duration: 240,
        properties: [
            {
                startValue: 0,
                endValue: 10,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 0.5,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: -300,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 720,
        duration: 240,
        properties: [
            {
                startValue: 10,
                endValue: 20,
                property: 'rotateZ',
            },
            {
                startValue: 0.5,
                endValue: 0,
                property: 'scale',
            },
            {
                startValue: -300,
                endValue: -600,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
];

const fishSection2 = [
    {
        start: 0,
        end: 380,
        properties: [
            {
                startValue: 0,
                endValue: 0,
                property: 'translateX',
            },
            {
                startValue: 150,
                endValue: 150,
                property: 'translateY',
            },
        ],
    },
    {
        start: 1020,
        duration: 350,
        properties: [
            {
                startValue: 0,
                endValue: -20,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 0.75,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: 750,
                property: 'translateX',
            },
            {
                startValue: 150,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 1370,
        duration: 350,
        properties: [
            {
                startValue: -20,
                endValue: -45,
                property: 'rotateZ',
            },
            {
                startValue: 0.75,
                endValue: 0,
                property: 'scale',
            },
            {
                startValue: 750,
                endValue: 900,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
];

const fishSection3 = [
    {
        start: 0,
        end: 380,
        properties: [
            {
                startValue: 140,
                endValue: 140,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: 200,
                property: 'translateY',
            },
        ],
    },
    {
        start: 1420,
        duration: 300,
        properties: [
            {
                startValue: 0,
                endValue: 5,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 1.5,
                property: 'scale',
            },
            {
                startValue: 140,
                endValue: -100,
                property: 'translateX',
            },
            {
                startValue: 200,
                endValue: -100,
                property: 'translateY',
            },
        ],
    },
];

const fishSection4 = [
    {
        start: 0,
        end: 380,
        properties: [
            {
                startValue: 0,
                endValue: 0,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: 100,
                property: 'translateY',
            },
        ],
    },
    {
        start: 1820,
        duration: 300,
        properties: [
            {
                startValue: 0,
                endValue: -5,
                property: 'rotateZ',
            },
            {
                startValue: 1,
                endValue: 1.5,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: 100,
                property: 'translateX',
            },
            {
                startValue: 100,
                endValue: -100,
                property: 'translateY',
            },
        ],
    },
];

export {
    header,
    bannerLayer1,
    bannerLayer2,
    bannerLayer3,
    bannerLayer4,
    mFishSection1,
    mFishSection2,
    mFishSection3,
    mFishSection4,
    fishSection1,
    fishSection2,
    fishSection3,
    fishSection4,
    groupOfFish1,
    groupOfFish3,
    groupOfFish4,
    groupOfFish5,
    groupOfTurtle,
    groupOfJellyfish,
};
