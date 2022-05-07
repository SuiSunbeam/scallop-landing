export type endpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs';

export const checkBreakpoint = (endpoint?: endpoint) => {
    const screens: { [index in endpoint]: string } = {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
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
