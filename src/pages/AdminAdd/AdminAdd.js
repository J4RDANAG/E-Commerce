import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default  function AdminAdd  ()  {

    // const [productName, setProductName] = useState('');
    // const [productPrice, setProductPrice] = useState(0);
    // const [productDescription, setProductDescription] = useState('');
    // const [productCategory, setProductCategory] = useState('');
    // const [productImg, setProductImg] = useState(null);
    const [file, setFile] = useState("");
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const uploadFile = () => {
          const name = new Date().getTime() + file.name;
    
          console.log(name);
          const storageRef = ref(storage, file.name);
          const uploadTask = uploadBytesResumable(storageRef, file);
    
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              setPerc(progress);
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
                default:
                  break;
              }
            },
            (error) => {
              console.log(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData((prev) => ({ ...prev, img: downloadURL }));
              });
            }
          );
        };
        file && uploadFile();
      }, [file]);

    // add product
    // const addProduct = async (e) => {
    //     e.preventDefault();
    //    try {
    //     const res = await addDoc(collection(db, "Products"),{
    //         ProductName: productName,
    //         ProductPrice: Number(productPrice),
    //         // ProductImg: url
    //     })
    //    } catch {
    //     console.log(error)
    //    }
    // }
    console.log(data);

    const handleInput = (e) => {
      const id = e.target.id;
      const value = e.target.value;
  
      setData({ ...data, [id]: value });
    };
  
    const handleAdd = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, "Products"), {
          ...data,
          timeStamp: serverTimestamp(),
        });
        navigate(-1)
      } catch (err) {
        console.log(err);
      }
    };

    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={handleAdd}>
                <label htmlFor="product-name">Product Title</label>
                <input type="text" className='form-control' required
                    onChange={handleInput} id='Title' />
                <br />
                <label htmlFor="product-name">Product Description</label>
                <input type="text" className='form-control' required
                    onChange={handleInput} id='Description' />
                <br />
                {/* <label htmlFor="product-name">Category</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br /> */}
                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='form-control' required
                    onChange={handleInput} id='Price' />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="images
                " required
                    onChange={(e) => setFile(e.target.files[0])} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}