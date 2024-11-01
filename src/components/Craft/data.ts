import { defineComponent, ref } from 'vue'
import { ImagesImages } from '../../tools/ImagesImages'
import { useStore } from 'vuex'
import CraftStore from './components/CraftStore/CraftStore.vue'
import CraftHistory from './components/CraftHistory/CraftHistory.vue'

const svg = ImagesImages(require.context('./assets/svg/', false, /\.(png|jpe?g|svg)$/));
const images = ImagesImages(require.context('./assets/images/', false, /\.(png|jpe?g|svg)$/));

export default defineComponent({
  components: {
    CraftStore,
    CraftHistory
  },
  data(){
    return{
      svg,
      images, 
    }
  },
  setup(){
    const isCrashStoreVisible = ref(true)

    const toggleView = (value: boolean) => {
      isCrashStoreVisible.value = value;
    };

    return{
      isCrashStoreVisible,
      toggleView
    }
  }
});
