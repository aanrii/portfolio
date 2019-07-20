import Typography from 'typography'

const typography: Typography = new Typography({
  overrideStyles: () => ({
    'h1, h2, h3, h4, h5, h6, p, a': {
      color: '#FCFEFF !important',
    },
    span: {
      color: '#CACBCC',
      'font-size': '16px',
    },
  }),
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
