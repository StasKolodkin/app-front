import { computed, defineComponent, ref } from 'vue'
import { ImagesImages } from '../../../../tools/ImagesImages'
import { useStore } from 'vuex'
import { CategoryList, CategoryProperty } from '../../types/Category';
import { Craft } from '../../types/Craft';
import CartStore from './CartStore/CartStore.vue';

const svg = ImagesImages(require.context('../../assets/svg/', false, /\.(png|jpe?g|svg)$/));
const images = ImagesImages(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));

export default defineComponent({
  components: {
    CartStore
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

    const searchQuery = ref("")

    return{
      CraftStore,
      getCategoryName,
      categories,
      searchQuery
    }
  }
});
