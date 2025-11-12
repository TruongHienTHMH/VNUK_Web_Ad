// Demo Data:
import React, {useState ,useEffect} from 'react';
import API from '../api';
import ProductForm from './ProductForm';
import { Table, Button } from 'react-bootstrap';
const Product = () => {

    const [products, setProducts] = useState([]);
    const [editing, setEditing] = useState(null);

    const load = async () => {
        try {
            const p = await API.get('/products');
            setProducts(p.data);
        } catch (error) {
            console.log('Lỗi khi tải sản phẩm: ', error)
        }
        
    }

    useEffect( () => {
        load();
    }, [] )

    const remove = async (id) => {
        if(!window.confirm('Bạn có muốn xoá Sản Phẩm này không ? ')) {
            return;
        }

        await API.delete(`/products/${id}`)
            .then((res) => {
                console.log('Thành công: ', res)
            })
            .catch((err) => {
                console.error('Thất bại ', err)
            })
        load();
    }

    const edit = async (id) => {
        const edit = await API.put(`/products/${id}`);
    }
    return (
        // <>  
        //     <ProductForm onSaved = {load} editing = {editing} setEditing = {setEditing}/>
        //     <hr/>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Tên</th>
        //                 <th>Ảnh</th>
        //                 <th>Mô tả</th>
        //                 <th colSpan={2}>Hành động</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //                 {products.map((item) => (
        //                     <tr key={item.id} className="hover:bg-gray-50">
        //                         <td className="border px-4 py-2 text-center">{item.id}</td>
        //                         <td className="border px-4 py-2">{item.name}</td>
        //                         <td className="border px-4 py-2">{item.price}</td>
        //                         <td className="border px-4 py-2">{item.description}</td>
        //                         <td className='text-red-300'>Xoá</td>
        //                         <td className='text-blue-300' onClick={edit(item.id)}>Sửa</td>
        //                     </tr>
        //                 ))}
        //         </tbody>
        //     </table>

        // </>

        <div className="container mt-4">
            <h3>Danh sách sản phẩm</h3>
            <ProductForm onSaved={load} editing={editing} setEditing={setEditing} />
            <Table striped bordered hover className="mt-3">
                <thead><tr><th>#</th><th>Tên</th><th>Giá</th><th>Ảnh</th><th>Hành động</th></tr></thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.image ? <img src={`http://localhost:3001${p.image}`} alt="" width={80} /> : '—'}</td>
                            <td>
                                <Button variant="secondary" size="sm" onClick={() => setEditing(p)}>Sửa</Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => remove(p.id)}>Xóa</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Product;