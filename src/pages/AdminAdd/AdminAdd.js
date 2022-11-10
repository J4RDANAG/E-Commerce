import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { ref, getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "./AdminAdd.scss";
import AdminAside from "../../components/AdminAside/AdminAside";

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
        Price: Number(data.Price),
      });
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="position-aside">
        <AdminAside />
        <div className="container">
          <form autoComplete="off" className="form-group" onSubmit={handleAdd}>
            <h2>ADD PRODUCTS</h2>
            <label htmlFor="product-Title">Product Title</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleInput}
              id="Title"
            />

            <label htmlFor="product-Description">Product Description</label>
            <textarea
              type="text"
              className="form-control text-area"
              required
              onChange={handleInput}
              id="Description"
            />

            <label htmlFor="product-Price">Product Price</label>
            <input
              type="number"
              className="form-control"
              required
              onChange={handleInput}
              id="Price"
            />

            <label htmlFor="product-Brand">Product Brand</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleInput}
              id="Brand"
            />

            <label htmlFor="product-Size">Product Size</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleInput}
              id="Size"
            />

            <label htmlFor="product-img">Product Image</label>
            <input
              type="file"
              className="form-control"
              multiple="multiple"
              id="images"
              required
              onChange={(e) => setFiles(e.target.files)}
            />

            <button type="submit" className="btn">
              ADD
            </button>
          </form>
          {error && <span className="error-msg">{error}</span>}
        </div>
      </div>
    </>
  );
}
