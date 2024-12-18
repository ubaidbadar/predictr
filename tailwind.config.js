/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        inherit: "inherit",
        nav: 'var(--nav-height)',
        '1px': 'var(--border-width-1)',
        '2px': 'var(--border-width-2)',
        cont: 'var(--cont)',
        nav: 'var(--nav-height)',
        "nav-space": 'calc(var(--nav-height) + 1rem)'
      },
      order: {
        initial: 'initial'
      }
    },
    borderWidth: {
      0: '0',
      1: 'var(--border-width-1)',
      2: 'var(--border-width-2)'
    },
    colors: {
      current: "currentColor",
      inherit: "inherit",
      none: "transparent",
      primary: {
        "0": "#024BAC",
        "1": "#CCDFF7",
        "2": "#E9F1FC"
      },
      dark: {
        0: "#000000",
        1: "#151B26",
        2: "#101010"
      },
      secondary: {
        "0": "#FFC803"
      },
      green: {
        "0": "#4BB54B",
        "1": "#00E983",
        "2": "#BAEBAE",
        "3": "#0AC171"
      },
      light: {
        "0": "#E7E7E7",
        "1": "#F0F3F5",
        "2": "#DADFE3",
        "3": "#B8B8B8",
        "4": "#D9D9D9",
        5: "#F7F7F7",
        6: "#EFF0F1",
        7: "#F6F8F9"
      },
      surface: '#fff',
      gray: {
        0: "#505050",
        1: "#717272",
        2: "#999999",
      },
      red: {
        "0": "#E33F3F",
        "1": "#FBBABA"
      }
    },
    fontSize: {
      "8xl": "clamp(3.25rem, 6vw, 5rem)",
      "7xl": "4rem",
      "6xl": "clamp(2rem, 7vw, 3.25rem)",
      "5xl": "3rem",
      "4xl": "clamp(2rem, 4vw, 2.5rem)",
      "3xl": ["clamp(1.375rem, 3vw, 2rem)", "1.2"],
      "2xl": "1.75rem",
      xl: "clamp(1.375rem, 5vw, 1.5rem)",
      lg: "1.25rem",
      md: "1.125rem",
      base: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
      xxs: "0.6875rem",
      exs: "0.625rem"
    },
    zIndex: {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
    },
    borderRadius: {
      inherit: "inherit",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      full: '9999px'
    },
    lineHeight: {
      0: 0,
      1: 0.5,
      2: 0.75,
      3: 1,
      4: 1.2,
      5: 1.35,
      6: 1.5,
      7: 1.75
    },
    boxShadow: {
      0: "0 0 0.17rem rgba(255, 255, 255, 0.25)",
      1: "0 0.31rem 0.81rem 0 #00000012",
      2: "0 0 0.0625em 0 #00000040",
      3: "0 0.625rem 1.25rem 0 #00000040",
      4: "0 0.125rem 0.25rem 0 #00000040",
      5: "0 0.0625rem 0.125rem 0 #00000040"
    },
    flex: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
    }
  },
  plugins: [],
  important: true
}
