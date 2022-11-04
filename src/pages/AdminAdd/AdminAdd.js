import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  uploadBytes,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function AdminAdd() {
  const [files, setFiles] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [urls, setUrls] = useState([]);

  console.log(data);
  useEffect(() => {
    console.log(files);
  }, [files]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // console.log(Number(e.target.value))
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    
     const promises = Array.from(files).map((file) => {
      const storage = getStorage();
      const storageRef = ref(storage, file.name);
      return uploadBytes(storageRef, file).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      });
    });

    const urls = await Promise.all(promises);
    console.log(urls);

    try {
      await addDoc(collection(db, "Products"), {
        ...data,
        timeStamp: serverTimestamp(),
        imgs: urls,
        Price: Number(data.Price)
      });
      // navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={handleAdd}>
        <label htmlFor="product-Title">Product Title</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleInput}
          id="Title"
        />
        <br />
        <label htmlFor="product-Description">Product Description</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleInput}
          id="Description"
        />
        <br />
        <label htmlFor="product-Price">Product Price</label>
        <input
          type="number"
          className="form-control"
          required
          onChange={handleInput}
          id="Price"
        />
        <br />
        <label htmlFor="product-Brand">Product Brand</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleInput}
          id="Brand"
        />
        <br />
        <label htmlFor="product-Size">Product Size</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleInput}
          id="Size"
        />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input
          type="file"
          className="form-control"
          multiple="multiple"
          id="images"
          required
          onChange={(e) => setFiles(e.target.files)}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">
          ADD
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}
