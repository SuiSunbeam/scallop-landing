import { useState, useEffect } from 'react';
import { endpoint, checkBreakpoint } from '@/app/utils';

export const usePlxData = () => {
  const [breackPoints, setBreackPoints] = useState<{ [index in endpoint]: boolean }>(
    checkBreakpoint()
  );
  const [headerSceneElement, setHeaderSceneElement] = useState<Element | null>(null);

  const handleResize = () => {
    setBreackPoints(checkBreakpoint());
  };

  useEffect(() => {
    setHeaderSceneElement(document.querySelector('.header-scene'));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    headerSceneSun:
      headerSceneElement === null ? [] : headerSceneSun(breackPoints, headerSceneElement),
    headerSceneClould1:
      headerSceneElement === null ? [] : headerSceneClould1(breackPoints, headerSceneElement),
    headerSceneClould2:
      headerSceneElement === null ? [] : headerSceneClould2(breackPoints, headerSceneElement),
    headerSceneClould3:
      headerSceneElement === null ? [] : headerSceneClould3(breackPoints, headerSceneElement),
    headerSceneClould4:
      headerSceneElement === null ? [] : headerSceneClould4(breackPoints, headerSceneElement),
    headerSceneClould5:
      headerSceneElement === null ? [] : headerSceneClould5(breackPoints, headerSceneElement),
    headerSceneSea:
      headerSceneElement === null ? [] : headerSceneSea(breackPoints, headerSceneElement),
    mainGroupOfFishOne: mainGroupOfFishOne(breackPoints),
    mainGroupOfFishTwo: mainGroupOfFishTwo(breackPoints),
    mainGroupOfFishThree: mainGroupOfFishThree(breackPoints),
    mainGroupOfTurtle: mainGroupOfTurtle(breackPoints),
    mainGroupOfFishFour: mainGroupOfFishFour(breackPoints),
    mainGroupOfFishFive: mainGroupOfFishFive(breackPoints),
    mainGroupOfJellyFishTwo: mainGroupOfJellyFishTwo(breackPoints),
  };
};

const headerSceneSun = (breackPoints: { [index in endpoint]: boolean }, sceneElement: Element) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneClould1 = (
  breackPoints: { [index in endpoint]: boolean },
  sceneElement: Element
) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneClould2 = (
  breackPoints: { [index in endpoint]: boolean },
  sceneElement: Element
) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneClould3 = (
  breackPoints: { [index in endpoint]: boolean },
  sceneElement: Element
) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneClould4 = (
  breackPoints: { [index in endpoint]: boolean },
  sceneElement: Element
) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneClould5 = (
  breackPoints: { [index in endpoint]: boolean },
  sceneElement: Element
) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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
        end: scenceHeight,
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

const headerSceneSea = (breackPoints: { [index in endpoint]: boolean }, sceneElement: Element) => {
  const scenceHeight = sceneElement.clientHeight;
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: 'self',
        end: scenceHeight - 135,
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
        end: scenceHeight - 120,
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
        end: scenceHeight - 105,
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
        end: scenceHeight - 90,
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
        end: scenceHeight - 75,
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
        end: scenceHeight - 60,
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
        end: scenceHeight - 45,
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
        end: scenceHeight - 30,
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
        end: scenceHeight - 15,
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
        end: scenceHeight,
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

const mainGroupOfFishOne = (breackPoints: { [index in endpoint]: boolean }) => {
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

const mainGroupOfFishTwo = (breackPoints: { [index in endpoint]: boolean }) => {
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
        end: '.scene-rockLeft-2',
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
        start: '.scene-rockLeft-1',
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

const mainGroupOfFishThree = (breackPoints: { [index in endpoint]: boolean }) => {
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

const mainGroupOfTurtle = (breackPoints: { [index in endpoint]: boolean }) => {
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

const mainGroupOfFishFour = (breackPoints: { [index in endpoint]: boolean }) => {
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
  } else {
    data = [
      {
        start: 'self',
        duration: '50%',
        properties: [
          {
            startValue: 0,
            endValue: 5,
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
  }

  return data;
};

const mainGroupOfFishFive = (breackPoints: { [index in endpoint]: boolean }) => {
  let data: any = [];

  if (breackPoints['5xl']) {
    data = [
      {
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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
        start: '.scene-whale',
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

const mainGroupOfJellyFishTwo = (breackPoints: { [index in endpoint]: boolean }) => {
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
