import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { CategoryList, CategoryProperty } from '../../types/Category';
import { Craft, CraftStore } from '../../types/Craft';
import CraftCart from './CraftCart/CraftCart.vue';

export default defineComponent({
  components: {
    CraftCart
  },
  setup(){
    const store = useStore<Craft>();

    //category
    const getCategoryName = (category: CategoryList): string => {
      return CategoryProperty[category].name;
    };

    //styles
    const hoveredCategory = ref<number | null>(null);

    const handleMouseEnter = (index: number) => {
      hoveredCategory.value = index;
    };

    const handleMouseLeave = () => {
      hoveredCategory.value = null;
    };

    const hoveredItem = ref<number | null>(null);

    const handleMouseEnterItem = (index: number) => {
      hoveredItem.value = index;
    };

    const handleMouseLeaveItem = () => {
      hoveredItem.value = null;
    };

    //filter
    const CraftStore = computed(() => store.getters.getCraftStore)

    const categories = Object.values(CategoryList)
      .filter(value => typeof value === 'string')
      .map(key => CategoryProperty[CategoryList[key as keyof typeof CategoryList]]);

    const searchStore = ref("")

    const selectedCategory = ref<CategoryList | null>(null);

    const handleCategoryClick = (category: CategoryList) => {
      if (selectedCategory.value === category) {
        selectedCategory.value = null;
      } else {
        selectedCategory.value = category;
      }
    };

    const filteredCraftStore = computed(() => {
      const filteredByCategory = selectedCategory.value === null
        ? CraftStore.value
        : CraftStore.value.filter((item: any) => item.category === selectedCategory.value);
      
      return filteredByCategory.filter((item: any) => 
        item.name.toLowerCase().includes(searchStore.value.toLowerCase())
      );
    });

    //add to cart
    const CartArray = ref<Array<{ id: number; uid: number; weight: number; materials: number; quantity: number }>>([]);

    const handleCartClick = (item: CraftStore) => {
      const itemIndex = CartArray.value.findIndex(cartItem => cartItem.uid === item.uid);
      
      if (itemIndex === -1) {
        CartArray.value.push({
          id: item.id,
          uid: item.uid,
          weight: item.weightAmount,
          materials: item.materialsAmount,
          quantity: 1 
        });
      } else {
        CartArray.value.splice(itemIndex, 1);
      }
    };

    const removeCartItem = (uid: number) => {
      const index = CartArray.value.findIndex(item => item.uid === uid);
      if (index !== -1) {
        CartArray.value.splice(index, 1);
      }
    };
    
    const isInCart = (uid: number) => {
      return CartArray.value.some(cartItem => cartItem.uid === uid);
    };

    const emptyCart = () => {
      CartArray.value = [];
    }
    

    return{
      CraftStore,
      getCategoryName,
      categories,
      searchStore,
      selectedCategory,
      handleCategoryClick,
      filteredCraftStore,
      CartArray,
      handleCartClick,
      isInCart,
      handleMouseLeave,
      handleMouseEnter,
      hoveredCategory,
      hoveredItem,
      handleMouseEnterItem,
      handleMouseLeaveItem,
      removeCartItem,
      emptyCart
    }
  }
});
