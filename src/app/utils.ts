export type endpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export const checkBreakpoint = (endpoint?: endpoint) => {
    const screens: { [index in endpoint]: string } = {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
    };

    const matches = Object.entries(screens).reduce((results: any, [name, size]) => {
        const mediaQuery = `(min-width: ${size})`;

        results[name] = window.matchMedia(mediaQuery).matches;

        return results;
    }, {});

    if (!endpoint) {
        return matches;
    }

    return matches[endpoint];
};
