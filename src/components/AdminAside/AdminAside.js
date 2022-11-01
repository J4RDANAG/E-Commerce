import {Link} from 'react-router-dom'

export default function AdminAside() {
  return (
    <>
    <aside>
        
      <div>f_cking<br/>sick</div>
      <ul>
        <li><Link to='/'>Home Page</Link></li>
        <li><Link to='/products'>Products Page</Link></li>
        <li><Link to='/admin/products'>Products List</Link></li>
      </ul>
      
    </aside>
    
    </>
    
  )
}