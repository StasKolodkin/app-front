import { computed, defineComponent, ref } from 'vue'
import { ImagesImages } from '../../../../tools/ImagesImages'
import { useStore } from 'vuex'
import { CategoryList, CategoryProperty } from '../../types/Category';
import { Craft } from '../../types/Craft';
import CraftCart from './CraftCart/CraftCart.vue';

const svg = ImagesImages(require.context('../../assets/svg/', false, /\.(png|jpe?g|svg)$/));
const images = ImagesImages(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));

export default defineComponent({
  components: {
    CraftCart
  },
  data(){
    return{
      svg,
      images, 
    }
  },
  setup(){
    const store = useStore<Craft>();
    const CraftStore = computed(() => store.getters.getCraftStore)

    const getCategoryName = (category: CategoryList): string => {
      return CategoryProperty[category].name;
    };

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
    

    return{
      CraftStore,
      getCategoryName,
      categories,
      searchStore,
      selectedCategory,
      handleCategoryClick,
      filteredCraftStore
    }
  }
});
