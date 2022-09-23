import { markList, products } from "../../data";
import { productTypes } from "../types/productTypes";

const initialState = {
  products: products,
  filteredProducts: products,
  checkboxState: ``,
  sortState: ``,
  filters: markList,
  view:'grid',
};

 const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.FILTERBYSELECT:
      return { ...state, filteredProducts: payload };

    case productTypes.FILTERBYSTATE:
      return {
        ...state,
        checkboxState: payload.value,
        filteredProducts: payload.variantProducts,
      };
    case productTypes.FILTERBYSORT:
      return {
        ...state,
        sortState: payload.value,
        filteredProducts: payload.filteredProducts,
      };
    case productTypes.FILTERBYCHECKBOX:
      return {
        ...state,
        filteredProducts: payload,
      };
    case productTypes.CHANGEVIEW:
      return {
        ...state,
        view: payload,
      };
    case productTypes.FILTERBYTEXT:
      return {
        ...state,
        filteredProducts: payload,
      };
    case productTypes.UPDATEFILTERS:
      return {
        ...state,
        filters: payload,
      };
    case productTypes.RESETFILTERS:
      return {
        ...state,
        filters: payload
      };
    case productTypes.FILTERBYRANGE:
      return {
        ...state,
        filteredProducts: payload,
      };
    case productTypes.RESET:
      return {
        ...state,
        filteredProducts: products,
        checkboxState: ``,
        sortState: ``,
        view: "grid",
      };
    default:
      return state;
  }
}

export default productsReducer
