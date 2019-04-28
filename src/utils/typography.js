import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Alfa Slab One',
      styles: [
        '400'
      ]
    },
    {
      name: 'Muli',
      styles: [
        '400'
      ]
    }
  ],
  headerWeight: '400',
  headerFontFamily: [
    'Alfa Slab One',
  ],
  bodyWeight: '400',
  bodyFontFamily: [
    'Muli'
  ],
})

export default typography
