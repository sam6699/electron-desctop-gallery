import CSS from 'electron-css';

const orderTable=CSS({
  borderCollapse: 'collapse',
  marginRight: '5px',
  resize: 'horizontal',
  overflow: 'auto'

});
const product = CSS({
  width: '100px',
  height: '100px',
  resize: 'both',
});
const banner= CSS({
  width:'450px',
  height: '450px',
  marginLeft: '3px',
  resize: 'both'
});
const addButton= CSS({
  backgroundColor: '#3969af', /* Green */
  border: 'none',
  color: 'white',
  padding: '5px 10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '20px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px'

});
const removeButton=CSS({
  backgroundColor: '#af2e2b', /* Green */
  border: 'none',
  color: 'white',
  padding: '5px 12px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '20px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '4px'

});

export{
  removeButton,
  addButton,
  banner,
  orderTable,
  product
}