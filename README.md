I am making an online store. This store is called a Mini E-Commerce Store. The Mini E-Commerce Store has a list of products. You can look at all the products in the Mini E-Commerce Store. You can also filter the products to find what you want. The Mini E-Commerce Store has a cart. You can add products to the cart, in the Mini E-Commerce Store. The Mini E-Commerce Store is made with React.
The Product Grid is really useful because it shows you the name of each product how much it costs and if it is, in stock. It does this for 20 products that it gets from the FakeStoreAPI.
You can sort things by price from low to high. You can also look at things by category.. The best part is you can do a combined search. This means you can use the filters together like looking for something in a category and a certain price range with the advanced filters that include price sorting, which is low, to high and category filtering and also the combined search.
When you do not have anything, in your cart it will say "No products found" and "Cart is empty". These messages show up when your cart has nothing in it. The "No products found" message and the "Cart is message are what you see in these empty states.
Technical Information
The performance of the application is better now. We used React.memo. Usecallback to make sure that things do not get re-rendered when they do not need to. This helps React.memo and useCallback to work efficiently and avoid unnecessary re-renders.
Tech Stack: Plain CSS (no UI libraries used) and React (functional components).
Bonus: Cart data is saved with persistence using LocalStorage.
![App Preview](./app-ss.png)
