export const parseEnv = (env: Record<string, string>) => {
  const parsedEnv: Record<string, unknown> = { ...env };

  Object.entries(env).forEach(([key, value]) => {
    if (value == 'true' || value == 'false') parsedEnv[key] = value == 'true' ? true : false;
    else if (/^\d+$/.test(value)) parsedEnv[key] = Number(value);
    else if (value == 'null') parsedEnv[key] = null;
    else if (value == 'undefined') parsedEnv[key] = undefined;
  });
  return parsedEnv;
};

export const env = parseEnv(import.meta.env);

export type CarouselData = {
  logo: {
    alt: string;
    source: string;
    width?: number;
    height?: number;
  };
  message: string;
  profile: {
    image: string;
    title: string;
    subtitle: string;
  };
};

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
