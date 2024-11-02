import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { ImagesImages } from '../../../../tools/ImagesImages'
import { Craft } from '../../types/Craft';

const svg = ImagesImages(require.context('../../assets/svg/', false, /\.(png|jpe?g|svg)$/));
const images = ImagesImages(require.context('../../assets/images/', false, /\.(png|jpe?g|svg)$/));

export default defineComponent({
  data(){
    return{
      svg,
      images, 
    }
  },
  setup(){
    const store = useStore<Craft>();
    const CraftHistory = computed(() => store.getters.getCraftHistory)

    const searchHistory = ref("")

    const filteredCraftHistory = computed(() => {
      if (!searchHistory.value) {
        return CraftHistory.value;
      }
      return CraftHistory.value.filter((item: any) => 
        item.name.toLowerCase().includes(searchHistory.value.toLowerCase()) || 
        item.date.includes(searchHistory.value) || 
        item.quantity.toString().includes(searchHistory.value) ||
        item.listItem.some((listItem: any) => listItem.toLowerCase().includes(searchHistory.value.toLowerCase())) 
      );
    });

    return{
      CraftHistory,
      searchHistory,
      filteredCraftHistory 
    }
  }
});
