  import React , {useState, useRef}from "react";
  import Navbar from "../Navbar";
  import axios from "axios";
  export const NewProducts = (props) => {

  const [productName, setProductName] = useState('')
  const [productImage, setProductImage] = useState()
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Furniture')
  const [condition, setCondition] = useState('New')
  const {userToken} = props
  const inputRef = useRef()

  const onCategoryChange = (e) => {
      setCategory(e.target.value)
  }

  const onConditionChange = (e) => {
      setCondition(e.target.value)
  }
  console.log(userToken)

  const handleClick = (e) => {
    console.log('prueba')

    const formDataImage = new FormData();
    formDataImage.append("upload_preset", "vkkuywfu"); // esto me lo exige cloudinary
    formDataImage.append("file", productImage); // esto es la imagen que seleccione del computador

    //Ya tengo el formData listo, ahora voy a enviarlo a cloudinary
    axios.post(
      "https://api.cloudinary.com/v1_1/nurseryfinds/image/upload",
      formDataImage
    ).then((response) => {

      //Si la imagen sube bien, cloudinary me devuelve unos datos

      //Aqui simplemente voy a imprimir la respuesta de una forma bonita. Para ello uso stringify, null, 2
      //Ya luego vera el resultado
      console.log("🍺", JSON.stringify(response.data, null, 2))


  
      //Aqui guardo la url de la imagen, que cloudinary me dio ✅
      const url_image = response.data.secure_url;

      const formData = {
        productName,
        description,
        price,
        file: { path: url_image},
        category,
        condition
      }

      return axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/products`,formData, {
        headers: {Authorization:`Bearer ${userToken}`}
      })
    })
    .then(() => {
      console.log("✅", "Todo funciono muy bien")
    })
  
    .catch((error) => {
      console.log("❌", "Also salio muy mal: " + error);
    })

    };

  return (
      <div>
        <Navbar count={props.count}/>
        <div className="new-products">
        <div>
  <label className="new-products-label"> 
  <span>Product Name</span>
        <input
                className="new-products-input"
                value={productName}
                onChange={(e) => setProductName(e.target.value)} 
                placeholder="Product Name"
              
          />
          </label>
          </div>
          <div>
          <label className="new-products-label"> 
  <span>Category</span>
              <select onChange={onCategoryChange} value={category} className="select-css"> 
                  <option value="Furniture"> Furniture </option>
                  <option value="Car Seats & Boosters"> Car Seats & Boosters</option>  
                  <option value="Cribs"> Cribs</option>   
                  <option value="Strollers"> Strollers</option>   
                  <option value="Baby Monitors"> Baby Monitors</option>   
                  <option value="Highchairs">Highchairs</option>   
                  <option value="Toys & Books"> Toys & Books</option>   
                  <option value="Clothing"> Clothing</option>    
              </select>
              </label>
          </div>
          <div>
  <label className="new-products-label">
  <span>Description</span>
          <input
                className="new-products-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              
          />
          </label>
          </div>
          <div>
          <label className="new-products-label"> 
  <span>Condition</span>
              <select onChange={onConditionChange} value={condition} class="select-css"> 
                  <option value="New" > New </option>
                  <option value="Like New"> Like New</option>   
                  <option value="Good"> Good</option>   
                  <option value="Fair"> Fair</option>   
              </select>
              </label>
          </div>
          <div>
  <label className="new-products-label">
  <span>Price </span>
          <input
                className="new-products-input"
                value= {price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="$"
                
          />
          </label>
          </div>
          <div>
  <label className="new-products-label">
  <span>Product Image</span>
  <label className="file-select">
  <button className="file-select-2" onClick={()=>inputRef.current.click()} type="button"> Add Photos</button>
  <input 
                type="file" 
                ref={inputRef}
                style={{display:"none"}}
                onChange={e => setProductImage(e.target.files[0])} // Aqui definiste la imagen en el state productImage
                placeholder="Add photos"    
          />
  </label>
    
          </label>
          </div>
          <button onClick={handleClick}
            className="direction-to-new-account-submit-2"
          >
            Create Product
          </button>
        </div>
      </div>
        )
        }