<template>
  <div>
    <ul>
      <li>
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductItem from "./ProductItme";

export default {
  components: {
    ProductItem,
  },
  name: "product-list",
  props: {
    products: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style></style>
