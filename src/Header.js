import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <div className="Ap">
        <input type="text" placeholder='Search' style={{ width: 160, border: 4, borderRadius: 4 }} />
        <Link to='/'>Home</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Cart'>Cart{props.countCartItems ? (
          <button className="badge">{props.countCartItems}</button>
        ) : (
          ''
        )}</Link>
      </div>
    </>
  )
}