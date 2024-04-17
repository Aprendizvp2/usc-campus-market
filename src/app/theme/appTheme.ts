interface IAppTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  space: number[];
  fontSizes: number[];
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontWeights: {
    body: number;
    heading: number;
    bold: number;
  };
  lineHeights: {
    body: number;
    heading: number;
  };
  letterSpacings: {
    body: string;
    caps: string;
    heading: string;
  };
  sizes: {
    avatar: number;
  };
  radii: {
    default: string;
    circle: string;
  };
  shadows: {
    card: string;
  };
  variants: {
    avatar: {
      width: string;
      height: string;
      borderRadius: string;
    };
  };
  text: {
    heading: {
      fontFamily: string;
      fontWeight: string;
      lineHeight: string;
      letterSpacing: string;
    };
  };
}

export const appTheme: IAppTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#f3f3f3",
    background: "#fff",
    text: "#000",
    border: "#f3f3f3",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "uppercase",
    heading: "normal",
  },
  sizes: {
    avatar: 48,
  },
  radii: {
    default: "4px",
    circle: "50%",
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
    },
  },
};
