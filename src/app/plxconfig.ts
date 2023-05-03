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
        bannerClould5: bannerElement === null ? [] : bannerClould5(breackPoints, bannerElement),
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

const bannerClould5 = (breackPoints: { [index in endpoint]: boolean }, bannerElement: Element) => {
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
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 560,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -200,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 400,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 400,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 300,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 300,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: -15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 300,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '100%',
                easing: 'ease',
                properties: [
                    {
                        startValue: 0,
                        endValue: -10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 200,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -120,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '80%',
                easing: 'ease',
                properties: [
                    {
                        startValue: 0,
                        endValue: -10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 100,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -80,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '80%',
                easing: 'ease',
                properties: [
                    {
                        startValue: 0,
                        endValue: -10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 100,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -80,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                duration: '80%',
                easing: 'ease',
                properties: [
                    {
                        startValue: 0,
                        endValue: -45,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 2.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 100,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -250,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionTwoRightFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -700,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -580,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -580,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '30%',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.6,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -40,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: '30%',
                duration: '170%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 15,
                        endValue: 120,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.6,
                        endValue: 8,
                        property: 'scale',
                    },
                    {
                        startValue: -60,
                        endValue: -520,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -40,
                        endValue: -580,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                end: 'section:nth-child(4) .rock-left',
                easing: 'easeInOut',
                properties: [
                    {
                        startValue: 0,
                        endValue: 17,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -10,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'section:nth-child(4) .rock-left',
                duration: '30%',
                easing: 'easeOut',
                properties: [
                    {
                        startValue: 17,
                        endValue: 42,
                        property: 'rotate',
                    },
                    {
                        startValue: 1.1,
                        endValue: 2.7,
                        property: 'scale',
                    },
                    {
                        startValue: -30,
                        endValue: -100,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: -10,
                        endValue: -150,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionFourLeftFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 4,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 4,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 4,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 270,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 160,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 3.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 220,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 135,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
            {
                start: 'self',
                duration: '40%',
                properties: [
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'opacity',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionFiveRightTurtle = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                duration: '100%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 0,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 0.01,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -35,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionSixLeftFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 10,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -15,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 10,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -15,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 10,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -15,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 20,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -10,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 40,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 25,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 20,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1.1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: 40,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: 0,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionSixRightFish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -120,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -120,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -120,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -65,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -75,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 10,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -65,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 20,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -65,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -90,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -80,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -50,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'section:nth-child(8) .whale',
                duration: '20%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 15,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -60,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 0,
                        endValue: -30,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionSixLeftjellyfish = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -30,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -15,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -25,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.75,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -25,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'self',
                duration: '50%',
                properties: [
                    {
                        startValue: 0,
                        endValue: 2.5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: 0,
                        endValue: -20,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};

const sectionSixWhale = (breackPoints: { [index in endpoint]: boolean }) => {
    let data: any = [];

    if (breackPoints['5xl']) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -10,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -50,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 30,
                        endValue: -75,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['4xl']) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -10,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -50,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 30,
                        endValue: -75,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['3xl']) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -10,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -50,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 30,
                        endValue: -75,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints['2xl']) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -20,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -35,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 20,
                        endValue: -65,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xl) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -20,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -35,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 20,
                        endValue: -70,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.lg) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -25,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -35,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 20,
                        endValue: -60,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.md) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -30,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 10,
                        endValue: -50,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.sm) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -30,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 10,
                        endValue: -50,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else if (breackPoints.xs) {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -30,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 10,
                        endValue: -50,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    } else {
        data = [
            {
                start: 'section:nth-child(8) .group-of-manta ',
                end: 'footer',
                properties: [
                    {
                        startValue: 0,
                        endValue: 5,
                        property: 'rotateZ',
                    },
                    {
                        startValue: -25,
                        endValue: 0,
                        property: 'rotate',
                    },
                    {
                        startValue: 1,
                        endValue: 1,
                        property: 'scale',
                    },
                    {
                        startValue: -20,
                        endValue: -30,
                        unit: '%',
                        property: 'translateX',
                    },
                    {
                        startValue: 10,
                        endValue: -50,
                        unit: '%',
                        property: 'translateY',
                    },
                ],
            },
        ];
    }

    return data;
};
