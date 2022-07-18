import { useState, useEffect, useCallback } from 'react';
import { endpoint, checkBreakpoint } from './utils';

export const usePlxData = () => {
    const [breackPoints, setBreackPoints] = useState<{ [index in endpoint]: boolean }>(checkBreakpoint());
    const [bannerElement, setBannerElement] = useState<Element | null>(null);

    const handleResize = useCallback((event: UIEvent) => {
        setBreackPoints(checkBreakpoint());
    }, []);

    useEffect(() => {
        setBannerElement(document.querySelector('.Home-banner'));
    }, []);

    useEffect(() => {
        window.addEventListener('resize', (event) => handleResize(event));

        return () => {
            window.removeEventListener('resize', (event) => handleResize(event));
        };
    }, [handleResize]);

    return {
        bannerSun: bannerElement === null ? [] : bannerSun(breackPoints, bannerElement),
        bannerClould1: bannerElement === null ? [] : bannerClould1(breackPoints, bannerElement),
        bannerClould2: bannerElement === null ? [] : bannerClould2(breackPoints, bannerElement),
        bannerClould3: bannerElement === null ? [] : bannerClould3(breackPoints, bannerElement),
        bannerClould4: bannerElement === null ? [] : bannerClould4(breackPoints, bannerElement),
        bannerSea: bannerElement === null ? [] : bannerSea(breackPoints, bannerElement),
        sectionOneLeftFish: sectionOneLeftFish(breackPoints),
        sectionTwoRightFish: sectionTwoRightFish(breackPoints),
        sectionFourLeftFish: sectionFourLeftFish(breackPoints),
        sectionFiveRightTurtle: sectionFiveRightTurtle(breackPoints),
        sectionSixLeftFish: sectionSixLeftFish(breackPoints),
        sectionSixRightFish: sectionSixRightFish(breackPoints),
        sectionSixLeftjellyfish: sectionSixLeftjellyfish(breackPoints),
        sectionSixWhale: sectionSixWhale(breackPoints),
    };
};

const bannerSun = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 220,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 210,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 200,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 190,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 180,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 170,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 160,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 140,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 130,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould1 = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -440,
                        endValue: 145,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -370,
                        endValue: 140,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -260,
                        endValue: 135,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -170,
                        endValue: 130,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -120,
                        endValue: 125,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -80,
                        endValue: 120,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -20,
                        endValue: 115,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -10,
                        endValue: 110,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -5,
                        endValue: 105,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
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

const bannerClould2 = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -140,
                        endValue: 250,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -160,
                        endValue: 250,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -80,
                        endValue: 235,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -30,
                        endValue: 220,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: 205,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 30,
                        endValue: 190,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 60,
                        endValue: 175,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 65,
                        endValue: 160,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 35,
                        endValue: 145,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 35,
                        endValue: 130,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould3 = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -160,
                        endValue: 205,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -170,
                        endValue: 195,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -95,
                        endValue: 185,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -50,
                        endValue: 175,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: -10,
                        endValue: 165,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 5,
                        endValue: 155,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 40,
                        endValue: 145,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 50,
                        endValue: 135,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 25,
                        endValue: 125,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 30,
                        endValue: 115,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerClould4 = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 300,
                        endValue: 185,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 185,
                        endValue: 185,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 185,
                        endValue: 185,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 180,
                        endValue: 180,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 180,
                        endValue: 180,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 170,
                        endValue: 170,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 160,
                        endValue: 160,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 150,
                        endValue: 150,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 100,
                        endValue: 105,
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 90,
                        endValue: 100,
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const bannerSea = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
    const bannerHeight = bannerElement.clientHeight;
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 135,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 120,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 105,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 90,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 75,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 60,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 45,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 30,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                end: bannerHeight - 15,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: bannerHeight,
                properties: [
                    {
                        startValue: 0,
                        endValue: -80,
                        property: 'rotateX',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionOneLeftFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionTwoRightFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionFourLeftFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionFiveRightTurtle = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionSixLeftFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionSixRightFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionSixLeftjellyfish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};

const sectionSixWhale = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
    } else if (breackPoints['4xl']) {
    } else if (breackPoints['3xl']) {
        data = [
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
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
    } else if (breackPoints.xl) {
    } else if (breackPoints.lg) {
    } else if (breackPoints.md) {
    } else if (breackPoints.sm) {
    } else if (breackPoints.xs) {
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    // {
                    //     startValue: -20,
                    //     endValue: 10,
                    //     unit: '%',
                    //     property: 'translateX',
                    // },
                    // {
                    //     startValue: 10,
                    //     endValue: 20,
                    //     unit: '%',
                    //     property: 'translateY',
                    // },
                ],
            },
        ];
    }

    return data;
};