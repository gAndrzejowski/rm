// @flow
const button = (bg :string) => ({
  cursor: 'pointer',
  color: 'white',
  textTransform: 'uppercase',
  textAlign: 'center',
  display: 'block',
  backgroundColor: bg,
  marginLeft: 10,
  border: 'none',
  padding: ['.2em', '1ch'],
  userSelect: 'none',
  outline: 'none',
});
const styles = {
  'btnActive, search': button('firebrick'),
  btnInactive: button('grey'),
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    color: 'white',
    background: '#000',
    padding: '1em',
    border: 'none',
    borderBottom: [3, 'solid', 'firebrick'],
    marginBottom: '1em',
  },
};

export default styles;
