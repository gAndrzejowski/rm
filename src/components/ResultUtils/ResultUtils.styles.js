const styles = {
  resultUtils: {
    background: 'wheat',
    display: 'flex',
    justifyContent: 'space-between',
    padding: ['0.5em', '5vw'],
    '@global p, div': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  sort: {
    width: '20vw',
    '@global div': {
      cursor: 'pointer',
    },
  },
  active: {
    color: ['firebrick', '!important'],
  },
};
export default styles;

