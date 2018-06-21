const styles = {
  '@global': {
    header: {
      color: 'beige',
      padding: [0, '5vw', '2em'],
      maxWidth: 1200,
    },
  },
  top: {
    display: 'flex',
    flexFlow: ['row', 'nowrap'],
    justifyContent: 'space-between',
    alignItems: 'center',
    '@global button': {
      color: 'firebrick',
      textTransform: 'uppercase',
      textAlign: 'center',
      display: 'block',
      backgroundColor: 'white',
      marginLeft: 10,
      border: 'none',
      padding: ['.2em', '1ch'],
      userSelect: 'none',
      outline: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
  },
};
export default styles;
