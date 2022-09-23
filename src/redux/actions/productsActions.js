import { productTypes } from "../types/productTypes";

export const resetAll = () =>( {
  type: productTypes.RESET
})

export const changeView = (value) => {
  return {
    type: productTypes.CHANGEVIEW,
    payload: value
  }
}
export const filterBySelect = (value, products) => {
 const filteredProducts = products.filter((product) => product.city === value);
  return {
    type : productTypes.FILTERBYSELECT,
    payload: filteredProducts
  }
}

export const filterByState = (value, products) => {
  const filteredProducts = products.filter((product) => product.state === value);
  const variantProducts = value === "Все" ? products : filteredProducts;
  return {
    type: productTypes.FILTERBYSTATE,
    payload: { value, variantProducts },
  };
}
export function filterByCheckbox(collections, filters) {
  let newImgs = [];
  let a = 0;
  collections.forEach((img, imgKey) => {
    filters.forEach((filter, filterKey) => {
      if (img.company == filter.title && filter.status == true) {
        newImgs[a] = img;
        a++;
      }
    });
    
  });
  console.log(newImgs);
  return {
    type: productTypes.FILTERBYCHECKBOX,
    payload: newImgs,
  };
}
export const filterByText = (value, products) => {
  const filteredProducts = products.filter(product => product.title.toLowerCase().startsWith(value.toLowerCase()))
  return {
    type: productTypes.FILTERBYTEXT,
    payload: filteredProducts
  }
}
export const resetFilters = (filters) => {
  const newFilters = [...filters]
 newFilters.forEach((filter) => {
   filter.status = false;
});
return {
  type: productTypes.RESETFILTERS,
  payload: newFilters,
};
}
export const updateFilters = (filters) => {
  return {
    type: productTypes.UPDATEFILTERS,
    payload: filters,
  };
}
export const filterBySort = (value, products) => {
  if (value === "по рейтингу") {
   const filteredProducts = [...products].sort((a, b) => b.rating - a.rating);
   return {
    type: productTypes.FILTERBYSORT,
    payload: { value, filteredProducts },
  };
  }
  if (value === "по цене") {
    const filteredProducts = [...products].sort((a, b) => b.price - a.price);
    return {
    type: productTypes.FILTERBYSORT,
    payload: { value, filteredProducts },
  };
  }
  if (value === "по дате объявления") {
    const filteredProducts = [...products].sort((a, b) => {
      const bigger = new Date(b.date).getTime()
      const less = new Date(a.date).getTime();
      return bigger - less
    });
    return {
    type: productTypes.FILTERBYSORT,
    payload: { value, filteredProducts},
  };

  }
  
}

export const filterByRange = (products, first, second) => {
  const filteredProducts = [...products].filter(
    (product) => first <= product.price && product.price <= second
  );

  return {
    type: productTypes.FILTERBYRANGE,
    payload: filteredProducts,
  };
};