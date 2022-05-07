import { endpoint } from './utils';

const bannerSun = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 720,
                properties: [
                    {
                        startValue: 0,
                        endValue: 425,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 608,
                properties: [
                    {
                        startValue: 0,
                        endValue: 400,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 512,
                properties: [
                    {
                        startValue: 0,
                        endValue: 375,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 300,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 275,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 256,
                properties: [
                    {
                        startValue: 0,
                        endValue: 200,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 192,
                properties: [
                    {
                        startValue: 0,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould1 = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 720,
                properties: [
                    {
                        startValue: 0,
                        endValue: 500,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 608,
                properties: [
                    {
                        startValue: 0,
                        endValue: 450,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 512,
                properties: [
                    {
                        startValue: 0,
                        endValue: 400,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 250,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 250,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 256,
                properties: [
                    {
                        startValue: 0,
                        endValue: 160,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 192,
                properties: [
                    {
                        startValue: 0,
                        endValue: 100,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould2 = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 720,
                properties: [
                    {
                        startValue: 0,
                        endValue: 375,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 608,
                properties: [
                    {
                        startValue: 0,
                        endValue: 325,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 512,
                properties: [
                    {
                        startValue: 0,
                        endValue: 300,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 185,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 175,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 256,
                properties: [
                    {
                        startValue: 0,
                        endValue: 125,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 192,
                properties: [
                    {
                        startValue: 0,
                        endValue: 75,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould3 = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 720,
                properties: [
                    {
                        startValue: 0,
                        endValue: 300,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 608,
                properties: [
                    {
                        startValue: 0,
                        endValue: 275,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 512,
                properties: [
                    {
                        startValue: 0,
                        endValue: 250,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 175,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 170,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 256,
                properties: [
                    {
                        startValue: 0,
                        endValue: 120,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 192,
                properties: [
                    {
                        startValue: 0,
                        endValue: 70,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould4 = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 720,
                properties: [
                    {
                        startValue: 0,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 608,
                properties: [
                    {
                        startValue: 0,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 512,
                properties: [
                    {
                        startValue: 0,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 75,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 352,
                properties: [
                    {
                        startValue: 0,
                        endValue: 85,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 256,
                properties: [
                    {
                        startValue: 0,
                        endValue: 60,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 192,
                properties: [
                    {
                        startValue: 0,
                        endValue: 25,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerSea = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['2xl']) {
        data = [
            {
                start: 0,
                end: 350,
                properties: [
                    {
                        startValue: 0,
                        endValue: -55,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 0,
                end: 325,
                properties: [
                    {
                        startValue: 0,
                        endValue: -60,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 0,
                end: 300,
                properties: [
                    {
                        startValue: 0,
                        endValue: -70,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 0,
                end: 225,
                properties: [
                    {
                        startValue: 0,
                        endValue: -65,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 0,
                end: 200,
                properties: [
                    {
                        startValue: 0,
                        endValue: -60,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 0,
                end: 200,
                properties: [
                    {
                        startValue: 0,
                        endValue: -60,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 0,
                end: 150,
                properties: [
                    {
                        startValue: 0,
                        endValue: -50,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    }

    return data;
};

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
    bannerSun,
    bannerClould1,
    bannerClould2,
    bannerClould3,
    bannerClould4,
    bannerSea,
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
