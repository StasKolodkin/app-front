import { computed, defineComponent, ref } from 'vue'
import { ImagesImages } from '../../../../../tools/ImagesImages'
import { useStore } from 'vuex'
import { CraftStore } from '../../../types/Craft';
import { CategoryList, CategoryProperty } from '../../../types/Category';

const svg = ImagesImages(require.context('../../../assets/svg/', false, /\.(png|jpe?g|svg)$/));
const images = ImagesImages(require.context('../../../assets/images/', false, /\.(png|jpe?g|svg)$/));

export default defineComponent({
  props: {
    cartItems: {
      type: Array as () => Array<{ id: number; uid: number; weight: number; materials: number; quantity: number }>,
      required: true
    }
  },
  data(){
    return{
      svg,
      images
    }
  },
  setup(){
    const store = useStore();

    const getCraftItemById = (uid: number) => {
      return store.getters.getCraftStore.find((item: CraftStore) => item.uid === uid);
    };

    const getCategoryName = (category: CategoryList): string => {
      return CategoryProperty[category].name;
    };
    
    return{
      getCraftItemById,
      getCategoryName
    }
  }
});
