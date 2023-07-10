  import React , {useState}from "react";
  import Navbar from "../Navbar";
  import axios from "axios";

  export const NewProducts = (props) => {
  const [productName, setProductName] = useState('')
  const [productImage, setProductImage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Furniture')
  const [condition, setCondition] = useState('New')
  const {userToken} = props

  const onCategoryChange = (e) => {
      setCategory(e.target.value)
  }

  const onConditionChange = (e) => {
      setCondition(e.target.value)
  }
  console.log(userToken)

  const handleClick = (e) => {
      // axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/products` ,{productName,productImage,description,price,category,condition}) 
      // axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/products`,{ headers:{Authorization:`Bearer ${userToken}`}})
      axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/products`, {
        productName: productName,
        description: description,
        price:price,
        category:category,
        condition:condition,
        productImage:productImage,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    //   .then(r => {
    //     })
    
    //   .catch(err => console.log(err))
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
  <input 
                type="file" 
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
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