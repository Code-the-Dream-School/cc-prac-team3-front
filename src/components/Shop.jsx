import React , {useState,useEffect}from "react";
import { Link } from "react-router-dom";
import "./App.css"
import{Products} from "./Products"
import { ShoppingCartItem } from "./ShoppingCartItem";
import Navbar from "../Navbar";
import axios from "axios";

  export const Shop = (props) => {
 const {items,setItems}=props
 const [shopItems, setShopItems] = useState([])

 useEffect(() => {
axios.get("http://localhost:8000/api/v1/products") 
    .then(r => r.json())
    .then(r => setShopItems(r?.data))
    .catch(err => console.log(err))
 }, [])
 console.log(shopItems)


    function addTocart(cartItem){
      const newItems = items.map(it => ({...it}))
      const matchItem= newItems.find(item => item.title === cartItem.title)
      if (matchItem){
        matchItem.quantity=matchItem.quantity+cartItem.quantity
        setItems(newItems)
      }else {
        newItems.push(cartItem)
        setItems(newItems)
      }
     
  }
const [selectiedCategory, setselectiedCategory] = useState(null)
const [selectiedSubCategory, setselectiedSubCategory] = useState(null)
function handleCategoryClick(catIndex,subIndex){
  setselectiedCategory(catIndex)
  setselectiedSubCategory(subIndex)
}
const showItems=selectiedCategory!==null && selectiedSubCategory !== null
const products=[

  {
    title:"Clothing & Accesories",
    subCategories:[
      {
        title:"Fotties & Gowns", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="Solid Zip up Footie" value="28.50" imagen="https://images.ctfassets.net/50gzycvace50/a91eaec3169116089b9e92b5dbf4c0e416b9c744225e1808db929457a593429f/4208e7f00c34c11d26187e63fdb1ab61/a91eaec3169116089b9e92b5dbf4c0e416b9c744225e1808db929457a593429f.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Swim diaper" value="30.00" imagen="https://images.ctfassets.net/50gzycvace50/df53f75c621d8a7e512b7f6413091494f68b9e335e58c25420b010a4cd8dd2b6/05ac75d65912f8d5a03f9398c4734afb/df53f75c621d8a7e512b7f6413091494f68b9e335e58c25420b010a4cd8dd2b6.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Dresses", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Short Sleeve" value="40.00" imagen="https://images.ctfassets.net/50gzycvace50/d72f6669c2ffb8de232d57a8abc14cd3ac94f3dbd418bac7a8009cea7c8b6d3d/272dfdadda91b1cf5f9795994238856f/d72f6669c2ffb8de232d57a8abc14cd3ac94f3dbd418bac7a8009cea7c8b6d3d.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="Ruffled Up Baby Dress" value="17.50" imagen="https://images.ctfassets.net/50gzycvace50/d590239a06afae285cfa7e3d4cecc6bd9459ac1f8aa664fa2d9fab4bc0bf67a4/95b799334580cee4f6361fb108af7778/d590239a06afae285cfa7e3d4cecc6bd9459ac1f8aa664fa2d9fab4bc0bf67a4.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
  {
    title:"Nursery",
    subCategories:[
      {
        title:"Mattresses", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="Organic 2-Stage Mattress" value="358.00" imagen="https://images.ctfassets.net/50gzycvace50/b253446ed29b60b3d75180ef33debca6b8c57dcda833104231b010e29a177ddb/d014467b48bf29541d4f468c9bb003aa/b253446ed29b60b3d75180ef33debca6b8c57dcda833104231b010e29a177ddb.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Breathable 2-Stage" value="299.99" imagen="https://images.ctfassets.net/50gzycvace50/ea269486cd82465e696e3e2ba110b60c6af286424494b4c63a91e2a548b38b7e/e9d3efe553646c8a3184a0a81ee6d9e6/ea269486cd82465e696e3e2ba110b60c6af286424494b4c63a91e2a548b38b7e.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Bedding", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Botanical Baby 4-Piece " value="169.99" imagen="https://images.ctfassets.net/50gzycvace50/d72f6669c2ffb8de232d57a8abc14cd3ac94f3dbd418bac7a8009cea7c8b6d3d/272dfdadda91b1cf5f9795994238856f/d72f6669c2ffb8de232d57a8abc14cd3ac94f3dbd418bac7a8009cea7c8b6d3d.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="3 Piece Nursery" value="79.99" imagen="https://images.ctfassets.net/50gzycvace50/4ba9d4062ed67015133bbafd8ef3ba9e6561201f85589174330da200bb778591/c98e9c87305f3571a9b72584ddc192ad/4ba9d4062ed67015133bbafd8ef3ba9e6561201f85589174330da200bb778591.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
  {
    title:"Play & Activity",
    subCategories:[
      {
        title:"Swings", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="MamaRoo Multi-Motion" value="269.99" imagen="https://images.ctfassets.net/50gzycvace50/10d70915028293cd900fd5fbd9065e1fce4e02caa55a1bd41fa9f61908d3d571/2a80ae09bc5de0001ef081b4b522f7a3/10d70915028293cd900fd5fbd9065e1fce4e02caa55a1bd41fa9f61908d3d571.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Nova Baby Swing" value="199.99" imagen="https://images.ctfassets.net/50gzycvace50/80552102f260756c551a6c84eefa1a1824f6e55c46df02ebd8d20dde9ef434bc/e923bcffeee16cd2e1c99e7e038e8bfe/80552102f260756c551a6c84eefa1a1824f6e55c46df02ebd8d20dde9ef434bc.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Playards & Accesories", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Travel Crib Light" value="279.99" imagen="https://images.ctfassets.net/50gzycvace50/43f0f97437b7dd22f954167cdfa70c5d5d7062091f3cc3154e1c088f40cc2660/730593a94541eff4c4c7147b74658d5d/43f0f97437b7dd22f954167cdfa70c5d5d7062091f3cc3154e1c088f40cc2660.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="On-the-Go Baby Dome" value="85.99" imagen="https://images.ctfassets.net/50gzycvace50/db12d6ce5b4fb48351b61a15cc2db7be86f530f2d822802802317ba6e8a598bc/9a3791c4e085ee156a2b3008b4a4d11b/db12d6ce5b4fb48351b61a15cc2db7be86f530f2d822802802317ba6e8a598bc.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
  {
    title:"Nursing & Feeding",
    subCategories:[
      {
        title:"Bottle Feeding", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="Baby Bottle Complete " value="49.99" imagen="https://images.ctfassets.net/50gzycvace50/f3a51fbeb10e7f81014254001a1718dd9278bbdfee7825dc48e34ff183f10031/3a68c18b00ffd4b9c11b06ced158b907/f3a51fbeb10e7f81014254001a1718dd9278bbdfee7825dc48e34ff183f10031.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Natural Feel Silicone" value="22.99" imagen="https://images.ctfassets.net/50gzycvace50/18d6ec7b898da7c5e0699f29208fa42f4b8449f1d34ddfea6e2969e34f82e44f/ef95f88d27cc393cbe0dc119b92bc225/18d6ec7b898da7c5e0699f29208fa42f4b8449f1d34ddfea6e2969e34f82e44f.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Formula & Food Prep", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Formula Pro Advanced" value="199.99" imagen="https://images.ctfassets.net/50gzycvace50/79e06a844d745830e4278a6b41a8b5394f64865790f2d1912cc842aa842f1898/a3c0092ed1599b80d3133dac278fa6d8/79e06a844d745830e4278a6b41a8b5394f64865790f2d1912cc842aa842f1898.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="Formula Pro Mini" value="179.99" imagen="https://images.ctfassets.net/50gzycvace50/18eaec2b31cbc490599f7a828441493dfd5eaf638784c3ddd8106fe84649a0f8/6884d5f9cad3eec1ea62e7ba6018e71f/18eaec2b31cbc490599f7a828441493dfd5eaf638784c3ddd8106fe84649a0f8.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
  {
    title:"Diapering",
    subCategories:[
      {
        title:"Wipes", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="Diaper Box - 100 Diapers " value="39.99" imagen="https://images.ctfassets.net/50gzycvace50/6dc8396c1763f4baaa6eab0c93e58c9c21d5845a241d4b23ce6bfea03cfcc58c/37ea96f5a1e7c5c091a64355b165d00e/6dc8396c1763f4baaa6eab0c93e58c9c21d5845a241d4b23ce6bfea03cfcc58c.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Baby Wipes" value="39.99" imagen="https://images.ctfassets.net/50gzycvace50/3536a0be2bc5c0de72004d1cb9fd96f4acb1e453889e89694bd49e4319b9c185/7ef3ec6adca0f5bfe84e93722e3b908d/3536a0be2bc5c0de72004d1cb9fd96f4acb1e453889e89694bd49e4319b9c185.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Diapers", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Bamboo Viscose" value="94.99" imagen="https://images.ctfassets.net/50gzycvace50/2bc299be91cb95f632f4ff9e8a79e26307f242991ec2a9f59027d406cf732b4e/3df41be45665364b5ccbdeeaf939fcec/2bc299be91cb95f632f4ff9e8a79e26307f242991ec2a9f59027d406cf732b4e.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="Club Box Diapers" value="29.99" imagen="https://images.ctfassets.net/50gzycvace50/935ed41d74f6c77d4edc16a82f29c816752721f785c21ee7758d030e45c7b85f/ba8579d08dcaab466aa145f4e9986754/935ed41d74f6c77d4edc16a82f29c816752721f785c21ee7758d030e45c7b85f.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
  {
    title:"Bath & Potty",
    subCategories:[
      {
        title:"Bath Tubs", 
        items:[ 
            <Products key={1} onAdd={addTocart} title="Soft Sink Baby Bath" value="29.99" imagen="https://images.ctfassets.net/50gzycvace50/762b40f43e1eecfa94727e00db841929ae5486aeb496586a152cb487d3e190df/f57f233ed53cfabd7ba28ae9e541b6e8/762b40f43e1eecfa94727e00db841929ae5486aeb496586a152cb487d3e190df.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={0} onAdd={addTocart} title="Bathtime Bundle" value="89.97" imagen="https://images.ctfassets.net/50gzycvace50/a3a87f08e3370e55930c722c2fbf11ccdd9a474699938c0394d6f2385864dca6/29adeb9c11238dcc5d894eb2c9440af2/a3a87f08e3370e55930c722c2fbf11ccdd9a474699938c0394d6f2385864dca6.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } ,
      {
        title:"Bath Accessories", 
        items:[ 
            <Products key={2} onAdd={addTocart} title="Moby Spout Cover" value="13.99" imagen="https://images.ctfassets.net/50gzycvace50/ab0702149c967a52595c458ee363e52dea90b982dc182e6d40f67f72a33bb084/2be3cabe07eaef5e559faa3903d237df/ab0702149c967a52595c458ee363e52dea90b982dc182e6d40f67f72a33bb084.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
            <Products key={3} onAdd={addTocart} title="Spout Cover" value="15.00" imagen="https://images.ctfassets.net/50gzycvace50/6a46b3a66f1f0ae9a0444a99b347e127d46b3b4f1f558b8b535014d953dd4215/a5463e403d539acf99f74c2a54608e74/6a46b3a66f1f0ae9a0444a99b347e127d46b3b4f1f558b8b535014d953dd4215.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>,
          ]
      } 
    ]
  },
]
return (
<div>
  <Navbar count={props.count}/>
   <div className="cart">
       <div className="links">
      <Link to="/"> Shop </Link>
     <Link to="/CartCheckout"> <ShoppingCartItem count={props.count}/>
     </Link>
   </div>
   </div>
   <div className="shop-wrapper">

  
   <div className="shop-categories">
    <h4 className="shop-categories-title">Categories</h4>
      {products.map((p,i) => <div key={i}>
         <div className="shop-categories-categories">{p.title}</div>
         <div>{p.subCategories.map((s,j)=> <div className="shop-categories-subcategories" key={j} onClick={()=>handleCategoryClick(i,j)}>{s.title}</div>)}</div>
      </div>)}
   </div>
   <div className="shop-products">
   { showItems&&products[selectiedCategory].subCategories[selectiedSubCategory].items}
   </div>
   </div>
   </div>


)
}
