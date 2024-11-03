import { computed, defineComponent, ref } from 'vue'
import { ImagesImages } from '../../tools/ImagesImages'
import { useStore } from 'vuex'
import CraftStore from './components/CraftStore/CraftStore.vue'
import CraftHistory from './components/CraftHistory/CraftHistory.vue'
import { Craft } from './types/Craft'
import { Events } from './events'

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
    const store = useStore<Craft>();
    const CraftData = computed(() => store.getters.getCraftData)
    const isCrashStoreVisible = ref(true)

    const toggleView = (value: boolean) => {
      isCrashStoreVisible.value = value;
    };

    const exitCraft =() => {
      window.mp.trigger(Events.ExitCraft)
    }

    return{
      isCrashStoreVisible,
      toggleView,
      CraftData,
      exitCraft
    }
  }
});
